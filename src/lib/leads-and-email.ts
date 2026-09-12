import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import { getDb } from "@/db/db";
import { quoteRequests, partnerInquiries } from "@/db/schema";

const LEADS_FILE = path.join(process.cwd(), "src", "data", "admin-leads.json");

export interface LeadPayload {
  type: "quote" | "partner";
  name: string;
  organization?: string;
  businessName?: string;
  email: string;
  phone?: string;
  service?: string;
  serviceSlug?: string;
  city?: string;
  quantity?: string;
  message?: string;
  notes?: string;
  sourcePage?: string;
}

export interface StoredLead {
  id: string;
  type: "quote" | "partner";
  name: string;
  organization?: string;
  email: string;
  phone?: string;
  service?: string;
  city?: string;
  quantity?: string;
  message?: string;
  sourcePage?: string;
  status: "new" | "in_review" | "contacted" | "closed";
  createdAt: string;
}

/**
 * Persists lead to JSON file so it immediately appears in the Admin Panel
 * (/admin/quotes and /admin/partners)
 */
export function saveLeadToAdminJson(payload: LeadPayload): StoredLead {
  let leads: StoredLead[] = [];
  try {
    if (fs.existsSync(LEADS_FILE)) {
      const raw = fs.readFileSync(LEADS_FILE, "utf-8");
      leads = JSON.parse(raw);
    }
  } catch (e) {
    console.error("Error reading admin-leads.json:", e);
    leads = [];
  }

  const newLead: StoredLead = {
    id: `lead-${Date.now()}`,
    type: payload.type,
    name: payload.name.trim(),
    organization: payload.organization || payload.businessName || undefined,
    email: payload.email.trim(),
    phone: payload.phone?.trim() || undefined,
    service: payload.service || payload.serviceSlug || undefined,
    city: payload.city?.trim() || undefined,
    quantity: payload.quantity?.trim() || undefined,
    message: payload.message || payload.notes || undefined,
    sourcePage: payload.sourcePage || undefined,
    status: "new",
    createdAt: new Date().toISOString(),
  };

  leads.unshift(newLead);

  try {
    const dir = path.dirname(LEADS_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
  } catch (e) {
    console.error("Error saving lead to admin-leads.json:", e);
  }

  return newLead;
}

/**
 * Attempts database insertion via Drizzle if DB is connected
 */
export async function saveLeadToDb(payload: LeadPayload) {
  try {
    const db = getDb();
    if (payload.type === "quote") {
      await db.insert(quoteRequests).values({
        name: payload.name,
        organization: payload.organization || payload.businessName || null,
        email: payload.email,
        phone: payload.phone || null,
        serviceSlug: payload.serviceSlug || payload.service || null,
        city: payload.city || null,
        quantity: payload.quantity || null,
        message: payload.message || payload.notes || null,
        sourcePage: payload.sourcePage || null,
      });
    } else if (payload.type === "partner") {
      await db.insert(partnerInquiries).values({
        name: payload.name,
        businessName: payload.businessName || payload.organization || null,
        email: payload.email,
        phone: payload.phone || null,
        city: payload.city || null,
        message: payload.message || payload.notes || null,
      });
    }
  } catch (err) {
    console.warn("DB insert skipped or failed (falling back to JSON store):", err);
  }
}

/**
 * Sends notification email to the configured admin / factory desk
 */
export async function sendLeadNotificationEmail(lead: StoredLead) {
  const notifyEmail =
    process.env.LEADS_NOTIFY_EMAIL ||
    process.env.SMTP_TO ||
    process.env.ADMIN_EMAIL ||
    "info@idgen.in";

  const isPartner = lead.type === "partner";
  const subject = isPartner
    ? `[New Partner Application] ${lead.name} (${lead.organization || lead.city || "IDGen Partner"})`
    : `[New Contact / Quote Lead] ${lead.name} - ${lead.organization || lead.service || "Direct Message"}`;

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #1e293b; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
    .header { background: linear-gradient(135deg, #0f172a 0%, #009fe3 100%); color: #ffffff; padding: 28px; }
    .header h1 { margin: 0 0 6px; font-size: 20px; font-weight: 800; letter-spacing: -0.5px; }
    .header p { margin: 0; font-size: 13px; opacity: 0.9; }
    .badge { display: inline-block; padding: 4px 10px; border-radius: 9999px; background: rgba(255,255,255,0.2); font-size: 11px; font-weight: 700; text-transform: uppercase; margin-bottom: 8px; }
    .body { padding: 28px; }
    .field-row { display: flex; border-bottom: 1px solid #f1f5f9; padding: 12px 0; }
    .field-label { width: 140px; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; }
    .field-value { flex: 1; font-size: 14px; font-weight: 600; color: #0f172a; word-break: break-word; }
    .message-box { margin-top: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; font-size: 13px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
    .footer { padding: 20px 28px; background: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #64748b; }
    .cta-btn { display: inline-block; margin-top: 16px; padding: 10px 20px; background: #009fe3; color: #ffffff !important; text-decoration: none; border-radius: 8px; font-size: 13px; font-weight: 700; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="badge">${isPartner ? "Partner Program Inquiry" : "Quote Request / Contact"}</div>
      <h1>${lead.name}</h1>
      <p>${lead.organization ? lead.organization + " • " : ""}${lead.city || "Guwahati Hub"}</p>
    </div>
    <div class="body">
      <div class="field-row">
        <div class="field-label">Full Name</div>
        <div class="field-value">${lead.name}</div>
      </div>
      <div class="field-row">
        <div class="field-label">Email</div>
        <div class="field-value"><a href="mailto:${lead.email}" style="color: #009fe3;">${lead.email}</a></div>
      </div>
      <div class="field-row">
        <div class="field-label">Phone / WhatsApp</div>
        <div class="field-value">${lead.phone ? `<a href="https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}" style="color: #10b981;">${lead.phone}</a>` : "Not provided"}</div>
      </div>
      ${lead.organization ? `
      <div class="field-row">
        <div class="field-label">Organization</div>
        <div class="field-value">${lead.organization}</div>
      </div>` : ""}
      ${lead.city ? `
      <div class="field-row">
        <div class="field-label">City / Location</div>
        <div class="field-value">${lead.city}</div>
      </div>` : ""}
      ${lead.service ? `
      <div class="field-row">
        <div class="field-label">Requirement</div>
        <div class="field-value">${lead.service}</div>
      </div>` : ""}
      ${lead.quantity ? `
      <div class="field-row">
        <div class="field-label">Quantity</div>
        <div class="field-value">${lead.quantity}</div>
      </div>` : ""}
      ${lead.sourcePage ? `
      <div class="field-row">
        <div class="field-label">Source Page</div>
        <div class="field-value">${lead.sourcePage}</div>
      </div>` : ""}
      
      ${lead.message ? `
      <div style="margin-top: 16px;">
        <div class="field-label" style="margin-bottom: 6px;">Message / Specifications</div>
        <div class="message-box">${lead.message}</div>
      </div>` : ""}

      <div style="text-align: center; margin-top: 24px;">
        <a href="https://www.idgen.in/admin/${isPartner ? "partners" : "quotes"}" class="cta-btn">
          Open in IDGen Admin Panel &rarr;
        </a>
      </div>
    </div>
    <div class="footer">
      This is an automated notification from IDGen Identity Systems Website (Guwahati Hub).
    </div>
  </div>
</body>
</html>
  `;

  // Check SMTP configuration
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD;
  const smtpFrom = process.env.SMTP_FROM || `"iDGen Factory Desk" <${smtpUser || "noreply@idgen.in"}>`;

  if (smtpHost && smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
        tls: {
          rejectUnauthorized: false,
        },
        connectionTimeout: 10000,
      });

      await transporter.sendMail({
        from: smtpFrom,
        to: notifyEmail,
        replyTo: lead.email,
        subject,
        html: htmlContent,
      });

      console.log(`[EMAIL DISPATCHED] Lead notification successfully sent to ${notifyEmail} for ${lead.name}`);
      return { success: true, method: "smtp" };
    } catch (mailError) {
      console.error("[EMAIL ERROR] Failed to send via SMTP:", mailError);
    }
  } else {
    // If SMTP not yet configured in .env, log formatted alert
    console.log(`[LEAD NOTIFICATION RECEIVED] Target: ${notifyEmail}`);
    console.log(`[LEAD DETAILS] Name: ${lead.name}, Email: ${lead.email}, Phone: ${lead.phone}, Org: ${lead.organization}, Type: ${lead.type}`);
    console.log(`[LEAD SAVED] Stored to src/data/admin-leads.json with ID: ${lead.id}`);
  }

  return { success: true, method: "persisted" };
}
