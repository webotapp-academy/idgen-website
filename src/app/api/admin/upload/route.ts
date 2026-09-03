import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let buffer: Buffer;
    let originalName = "uploaded-image.jpg";

    if (contentType.includes("application/json")) {
      const body = await request.json();
      if (!body.image) {
        return NextResponse.json({ error: "No image provided" }, { status: 400 });
      }
      originalName = body.filename || "uploaded-image.jpg";
      const base64Data = body.image.replace(/^data:image\/\w+;base64,/, "");
      buffer = Buffer.from(base64Data, "base64");
    } else {
      const formData = await request.formData();
      const file = formData.get("file") as any;
      if (!file) {
        return NextResponse.json({ error: "No file provided" }, { status: 400 });
      }
      originalName = file.name || "uploaded-image.jpg";
      if (typeof file.arrayBuffer === "function") {
        const bytes = await file.arrayBuffer();
        buffer = Buffer.from(bytes);
      } else {
        const text = await file.text();
        buffer = Buffer.from(text);
      }
    }

    const sanitizeName = originalName.replace(/[^a-zA-Z0-9.-]/g, "_");
    const ext = path.extname(sanitizeName) || ".jpg";
    const baseName = path.basename(sanitizeName, ext);
    const filename = `${baseName}-${Date.now()}${ext}`;

    const uploadDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, filename);
    fs.writeFileSync(filePath, buffer);

    const publicUrl = `/uploads/${filename}`;
    return NextResponse.json({ success: true, url: publicUrl });
  } catch (error: any) {
    console.error("Image upload error:", error);
    return NextResponse.json({ error: error?.message || "Failed to upload image" }, { status: 500 });
  }
}
