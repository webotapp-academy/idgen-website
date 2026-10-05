import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  validateCredentials,
  createSessionToken,
  verifySessionToken,
  SESSION_COOKIE_NAME,
} from "@/lib/auth";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const action = url.searchParams.get("action");

  // Allow GET /api/admin/auth?action=logout for instant direct link logout
  if (action === "logout") {
    const loginUrl = new URL("/admin/login", request.url);
    const response = NextResponse.redirect(loginUrl);
    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE_NAME, "", { maxAge: 0, path: "/" });
    response.cookies.set({
      name: SESSION_COOKIE_NAME,
      value: "",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 0,
    });
    return response;
  }

  const cookieStore = await cookies();
  const cookieHeader = request.headers.get("cookie") || "";
  const headerMatch = cookieHeader.match(new RegExp(`${SESSION_COOKIE_NAME}=([^;]+)`));
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value || (headerMatch ? headerMatch[1] : undefined);

  const session = verifySessionToken(token);
  if (!session) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  return NextResponse.json({
    authenticated: true,
    user: { username: session.username, role: session.role },
  });
}

export async function POST(request: Request) {
  try {
    let username = "";
    let password = "";
    let action = "";
    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      const body = await request.json();
      username = body.username || "";
      password = body.password || "";
      action = body.action || "";
    } else {
      // Handle form POST (x-www-form-urlencoded or multipart/form-data)
      const formData = await request.formData();
      username = (formData.get("username") as string) || "";
      password = (formData.get("password") as string) || "";
      action = (formData.get("action") as string) || "";
    }

    // Logout action
    if (action === "logout") {
      const isFormSubmit = !contentType.includes("application/json");
      const response = isFormSubmit
        ? NextResponse.redirect(new URL("/admin/login", request.url))
        : NextResponse.json({ success: true, message: "Logged out successfully" });

      response.cookies.set({
        name: SESSION_COOKIE_NAME,
        value: "",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 0,
      });
      return response;
    }

    // Login validation
    if (!validateCredentials(username, password)) {
      return NextResponse.json(
        { success: false, error: "Invalid username or password" },
        { status: 401 }
      );
    }

    const token = createSessionToken(username);
    const response = NextResponse.json({
      success: true,
      message: "Authentication successful",
      user: { username, role: "administrator" },
    });

    // 7 days cookie
    response.cookies.set({
      name: SESSION_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    });

    return response;
  } catch (error: any) {
    console.error("Auth error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || String(error) },
      { status: 500 }
    );
  }
}
