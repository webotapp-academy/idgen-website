import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// idgen.in, http://idgen.in, and http://www.idgen.in were all serving the
// same content as https://www.idgen.in with no redirect — a 4-way duplicate
// content setup. Canonicalize everything to a single host + protocol here,
// since next.config.ts redirects() can't inspect host/protocol.
const CANONICAL_HOST = "www.idgen.in";

export function proxy(request: NextRequest) {
  const hostname = (request.headers.get("host") || "").split(":")[0];
  const proto = request.headers.get("x-forwarded-proto") || "https";

  if (hostname && hostname !== CANONICAL_HOST) {
    const url = new URL(request.url);
    url.protocol = "https:";
    url.host = CANONICAL_HOST;
    return NextResponse.redirect(url, 308);
  }

  if (proto !== "https") {
    const url = new URL(request.url);
    url.protocol = "https:";
    url.host = CANONICAL_HOST;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
