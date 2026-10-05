import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let buffer: Buffer | null = null;
    let originalName = "uploaded-image.jpg";

    if (contentType.includes("application/json")) {
      const body = await request.json();
      const rawImage = body.image || body.file || body.base64;
      if (!rawImage) {
        return NextResponse.json({ error: "No image provided" }, { status: 400 });
      }
      originalName = body.filename || body.name || "uploaded-image.jpg";
      const base64Data = rawImage.replace(/^data:image\/\w+;base64,/, "");
      buffer = Buffer.from(base64Data, "base64");
    } else {
      const formData = await request.formData();
      let file: any = formData.get("file") || formData.get("image");
      if (!file) {
        for (const [_, val] of formData.entries()) {
          if (val && typeof val === "object" && (val as any).name) {
            file = val;
            break;
          }
        }
      }
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

    if (!buffer) {
      return NextResponse.json({ error: "Could not parse image data" }, { status: 400 });
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
    return NextResponse.json({ success: true, url: publicUrl, filename });
  } catch (error: any) {
    console.error("Image upload error:", error);
    return NextResponse.json({ error: error?.message || "Failed to upload image" }, { status: 500 });
  }
}
