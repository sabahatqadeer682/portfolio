import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "sabahatqadeerbhati@gmail.com";

const recentSubmissions = new Map<string, number>();
const RATE_LIMIT_MS = 30_000;

function getClientIp(req: Request) {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function parseDevice(ua: string) {
  if (!ua) return "Unknown device";
  const isMobile = /Mobile|Android|iPhone|iPad/i.test(ua);
  let os = "Unknown OS";
  if (/Windows/i.test(ua)) os = "Windows";
  else if (/Mac OS X/i.test(ua) && !/Mobile/i.test(ua)) os = "macOS";
  else if (/iPhone|iPad|iOS/i.test(ua)) os = "iOS";
  else if (/Android/i.test(ua)) os = "Android";
  else if (/Linux/i.test(ua)) os = "Linux";

  let browser = "Unknown browser";
  if (/Edg\//i.test(ua)) browser = "Edge";
  else if (/Chrome\//i.test(ua)) browser = "Chrome";
  else if (/Firefox\//i.test(ua)) browser = "Firefox";
  else if (/Safari\//i.test(ua)) browser = "Safari";

  return `${isMobile ? "Mobile" : "Desktop"} · ${os} · ${browser}`;
}

function formatPKTime(d: Date) {
  return d.toLocaleString("en-PK", {
    timeZone: "Asia/Karachi",
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    const userAgent = req.headers.get("user-agent") || "";
    const referer = req.headers.get("referer") || "";

    const last = recentSubmissions.get(ip);
    if (last && Date.now() - last < RATE_LIMIT_MS) {
      return NextResponse.json(
        { error: "Please wait a few seconds before sending another message." },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const subject = String(body.subject || "").trim();
    const message = String(body.message || "").trim();
    const honeypot = String(body.website || "").trim();

    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (name.length > 100 || subject.length > 200 || message.length > 5000) {
      return NextResponse.json(
        { error: "One of the fields is too long." },
        { status: 400 }
      );
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const now = new Date();
    const timestamp = formatPKTime(now);
    const device = parseDevice(userAgent);
    const wordCount = message.trim().split(/\s+/).length;

    const eName = escapeHtml(name);
    const eEmail = escapeHtml(email);
    const eSubject = escapeHtml(subject);
    const eMessage = escapeHtml(message).replace(/\n/g, "<br />");
    const eDevice = escapeHtml(device);
    const eRef = escapeHtml(referer);
    const eIp = escapeHtml(ip);

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="color-scheme" content="light" />
<meta name="supported-color-schemes" content="light" />
<title>New portfolio message</title>
<style>
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }
  body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
  a { color: #0891b2; text-decoration: none; word-break: break-word; }
  .wrap-anywhere { word-break: break-word; overflow-wrap: anywhere; }
  @media screen and (max-width: 600px) {
    .container { width: 100% !important; padding: 12px !important; }
    .card { padding: 18px !important; border-radius: 10px !important; }
    .h-title { font-size: 17px !important; }
    .label { font-size: 11px !important; }
    .value { font-size: 14px !important; }
    .stack { display: block !important; width: 100% !important; padding: 0 !important; }
    .stack-label { padding: 0 0 4px 0 !important; }
    .stack-value { padding: 0 0 12px 0 !important; }
    .meta-cell { display: block !important; width: 100% !important; padding: 8px 0 !important; border-right: none !important; }
    .reply-btn { display: block !important; width: 100% !important; box-sizing: border-box !important; }
    .msg-box { padding: 14px !important; font-size: 14px !important; }
  }
</style>
</head>
<body style="background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0f172a;">
  <div style="display:none;font-size:1px;color:#f1f5f9;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">
    New message from ${eName}: ${eSubject}
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f1f5f9;">
    <tr>
      <td align="center" style="padding:24px 12px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;">

          <!-- Brand bar -->
          <tr>
            <td style="padding:0 0 14px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="font-family:'JetBrains Mono',ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:13px;color:#64748b;">
                    <span style="color:#22d3ee;">~/</span><span style="color:#0f172a;font-weight:600;">sabahat</span><span style="color:#64748b;">.dev</span>
                    &nbsp;<span style="color:#cbd5e1;">·</span>&nbsp;
                    <span style="color:#22d3ee;">●</span> new message
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main card -->
          <tr>
            <td class="card" style="background:#ffffff;border-radius:14px;padding:26px;border:1px solid #e2e8f0;box-shadow:0 1px 3px rgba(15,23,42,0.05);">

              <!-- Header -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-bottom:16px;border-bottom:2px solid #22d3ee;">
                    <h1 class="h-title" style="margin:0;color:#0f172a;font-size:19px;font-weight:700;line-height:1.3;font-family:'JetBrains Mono',ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;">
                      <span style="color:#22d3ee;">$</span> ./new-message <span style="color:#64748b;">--from=</span><span style="color:#0891b2;">portfolio</span>
                    </h1>
                    <p style="margin:6px 0 0;color:#64748b;font-size:13px;line-height:1.5;" class="wrap-anywhere">
                      <strong style="color:#0f172a;">${eName}</strong> sent you a message via your contact form.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Fields (stack on mobile) -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:18px;">
                <tr>
                  <td class="stack stack-label" style="padding:8px 12px 8px 0;width:90px;vertical-align:top;color:#64748b;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;" valign="top">
                    Name
                  </td>
                  <td class="stack stack-value wrap-anywhere value" style="padding:8px 0;color:#0f172a;font-size:15px;line-height:1.5;" valign="top">
                    ${eName}
                  </td>
                </tr>
                <tr>
                  <td class="stack stack-label" style="padding:8px 12px 8px 0;width:90px;vertical-align:top;color:#64748b;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;" valign="top">
                    Email
                  </td>
                  <td class="stack stack-value wrap-anywhere value" style="padding:8px 0;font-size:15px;line-height:1.5;" valign="top">
                    <a href="mailto:${eEmail}" style="color:#0891b2;font-weight:500;">${eEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td class="stack stack-label" style="padding:8px 12px 8px 0;width:90px;vertical-align:top;color:#64748b;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;" valign="top">
                    Subject
                  </td>
                  <td class="stack stack-value wrap-anywhere value" style="padding:8px 0;color:#0f172a;font-size:15px;font-weight:500;line-height:1.5;" valign="top">
                    ${eSubject}
                  </td>
                </tr>
                <tr>
                  <td class="stack stack-label" style="padding:8px 12px 8px 0;width:90px;vertical-align:top;color:#64748b;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;" valign="top">
                    Received
                  </td>
                  <td class="stack stack-value value" style="padding:8px 0;color:#475569;font-size:14px;line-height:1.5;" valign="top">
                    ${escapeHtml(timestamp)} <span style="color:#94a3b8;">(PKT)</span>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <div style="margin-top:18px;padding-top:18px;border-top:1px solid #e2e8f0;">
                <p class="label" style="margin:0 0 10px;color:#64748b;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">
                  Message <span style="color:#94a3b8;font-weight:400;text-transform:none;letter-spacing:0;">· ${wordCount} word${wordCount === 1 ? "" : "s"}</span>
                </p>
                <div class="msg-box wrap-anywhere" style="background:#f8fafc;border-left:3px solid #22d3ee;padding:16px 18px;border-radius:6px;color:#0f172a;font-size:15px;line-height:1.65;">
                  ${eMessage}
                </div>
              </div>

              <!-- Reply CTA -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:22px;">
                <tr>
                  <td>
                    <a href="mailto:${eEmail}?subject=${encodeURIComponent("Re: " + subject)}" class="reply-btn" style="display:inline-block;background:#0f172a;color:#ffffff;font-size:14px;font-weight:600;padding:12px 22px;border-radius:8px;text-decoration:none;text-align:center;">
                      ↩ Reply to ${eName}
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Meta footer -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:22px;padding-top:16px;border-top:1px solid #e2e8f0;">
                <tr>
                  <td class="meta-cell" style="padding-right:14px;border-right:1px solid #e2e8f0;color:#94a3b8;font-size:11px;line-height:1.6;vertical-align:top;" valign="top">
                    <strong style="color:#64748b;display:block;margin-bottom:2px;">Device</strong>
                    ${eDevice}
                  </td>
                  <td class="meta-cell" style="padding:0 14px;border-right:1px solid #e2e8f0;color:#94a3b8;font-size:11px;line-height:1.6;vertical-align:top;" valign="top">
                    <strong style="color:#64748b;display:block;margin-bottom:2px;">IP</strong>
                    <span class="wrap-anywhere">${eIp}</span>
                  </td>
                  <td class="meta-cell" style="padding-left:14px;color:#94a3b8;font-size:11px;line-height:1.6;vertical-align:top;" valign="top">
                    <strong style="color:#64748b;display:block;margin-bottom:2px;">Source</strong>
                    <span class="wrap-anywhere">${eRef || "direct"}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Bottom note -->
          <tr>
            <td style="padding:14px 6px 0;text-align:center;color:#94a3b8;font-size:11px;line-height:1.6;" class="wrap-anywhere">
              Sent automatically from your portfolio contact form ·
              <a href="mailto:${eEmail}" style="color:#0891b2;">${eEmail}</a>
              <br />
              Just hit "Reply" — it goes straight to ${eName}.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    const textBody = [
      `New portfolio message`,
      `─────────────────────`,
      ``,
      `From:     ${name} <${email}>`,
      `Subject:  ${subject}`,
      `Received: ${timestamp} (PKT)`,
      `Device:   ${device}`,
      `IP:       ${ip}`,
      `Source:   ${referer || "direct"}`,
      ``,
      `Message (${wordCount} word${wordCount === 1 ? "" : "s"}):`,
      `${message}`,
      ``,
      `─────────────────────`,
      `Reply directly to: ${email}`,
    ].join("\n");

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [TO_EMAIL],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: textBody,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    recentSubmissions.set(ip, Date.now());
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
