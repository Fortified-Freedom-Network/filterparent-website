import { NextResponse } from "next/server";
import Database from "better-sqlite3";
import path from "node:path";
import fs from "node:fs";
import nodemailer from "nodemailer";

const DB_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DB_DIR, "waitlist.db");
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WAITLIST_WEBHOOK || "";
const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN || "";
const SLACK_WAITLIST_CHANNEL = process.env.SLACK_WAITLIST_CHANNEL || "";

const smtpTransporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

function getDb() {
  fs.mkdirSync(DB_DIR, { recursive: true });
  const db = new Database(DB_PATH);
  db.pragma("journal_mode = WAL");
  db.exec(`
    CREATE TABLE IF NOT EXISTS waitlist (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      source TEXT DEFAULT '',
      created_at TEXT NOT NULL
    )
  `);
  return db;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function buildConfirmationEmail(name: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#0F2027;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0F2027;">
<tr><td align="center" style="padding:24px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#1E3344;border-radius:8px;overflow:hidden;">

<tr><td style="background-color:#0F2027;padding:40px 32px 24px;text-align:center;border-bottom:1px solid rgba(107,142,35,0.3);">
  <img src="https://filterparent.com/images/logo.png" alt="FilterParent" width="48" height="48" style="display:block;margin:0 auto 16px;" />
  <h1 style="margin:0;font-size:26px;color:#ffffff;font-weight:800;letter-spacing:-0.5px;">Filter<span style="color:#6B8E23;">Parent</span></h1>
  <p style="margin:12px 0 0;font-size:18px;color:#6B8E23;font-weight:600;">Your beta access is ready</p>
</td></tr>

<tr><td style="padding:32px;color:#D0D5DA;font-size:15px;line-height:1.7;">

<p style="margin:0 0 20px;color:#ffffff;font-size:16px;">Hi ${name},</p>

<p style="margin:0 0 24px;">Thanks for signing up for the FilterParent beta. You can create your account right now at <a href="https://app.filterparent.com" style="color:#6B8E23;text-decoration:none;font-weight:700;">app.filterparent.com</a>.</p>

<h2 style="margin:0 0 12px;font-size:20px;color:#6B8E23;">How to get started</h2>
<ol style="margin:0 0 24px;padding-left:22px;color:#D0D5DA;">
  <li style="margin-bottom:10px;">Go to <a href="https://app.filterparent.com" style="color:#6B8E23;text-decoration:none;font-weight:700;">app.filterparent.com</a>.</li>
  <li style="margin-bottom:10px;">Create your account with the same email address you used for the beta signup.</li>
  <li style="margin-bottom:10px;">Verify your email and finish setting up your account.</li>
  <li style="margin-bottom:10px;">Choose your FilterParent phone number during onboarding.</li>
  <li>Open <strong>Settings → Simulated Contacts</strong> and activate one or more AI personas to start testing.</li>
</ol>

<h2 style="margin:0 0 12px;font-size:20px;color:#6B8E23;">About the AI personas</h2>
<p style="margin:0 0 16px;">FilterParent includes AI-generated personas that simulate realistic high-conflict co-parenting communication. These are not real people. They are test contacts designed to help you experience how the product handles stressful texts and conversations.</p>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
<tr><td style="padding:16px;background-color:#0F2027;border-left:3px solid #6B8E23;border-radius:4px;">
  <strong style="color:#6B8E23;">What to expect</strong>
  <p style="margin:8px 0 0;color:#D0D5DA;">Once activated in Settings, personas can send messages that reflect common abusive or manipulative communication patterns. You can turn them on or off anytime.</p>
</td></tr>
</table>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
<tr><td style="padding:16px;background-color:#2a1a1a;border:1px solid #8B0000;border-radius:6px;">
  <strong style="color:#ff6b6b;font-size:15px;">&#9888; Important</strong>
  <p style="margin:8px 0 0;color:#D0D5DA;">To test the beta, you must manually activate personas in <strong>Settings → Simulated Contacts</strong>. They are off by default.</p>
</td></tr>
</table>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
<tr><td style="padding:16px;background-color:#1a2a20;border:1px solid #6B8E23;border-radius:6px;">
  <strong style="color:#6B8E23;font-size:15px;">&#128154; Emotional Safety</strong>
  <p style="margin:8px 0 0;color:#D0D5DA;">Some persona messages may feel realistic and could be triggering. You can pause or deactivate them at any time. Your safety matters more than participation.</p>
</td></tr>
</table>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr><td align="center" style="padding-bottom:32px;">
  <a href="https://app.filterparent.com" style="display:inline-block;padding:14px 36px;background-color:#6B8E23;color:#ffffff;font-size:16px;font-weight:700;border-radius:6px;text-decoration:none;">Create Your Account</a>
</td></tr>
</table>

<p style="margin:0;color:#D0D5DA;">If you hit anything weird, reply to this email. Beta is where we find the sharp edges before users do. Very glamorous.</p>

</td></tr>

<tr><td style="padding:24px 32px;background-color:#0F2027;text-align:center;border-top:1px solid #1a3a3a;">
  <p style="margin:0 0 8px;color:#8A9BA8;font-size:13px;">Questions? Reply to this email.</p>
  <p style="margin:0 0 16px;color:#8A9BA8;font-size:13px;">Follow us on TikTok <a href="https://www.tiktok.com/@fortified.freedom" style="color:#6B8E23;text-decoration:none;">@fortified.freedom</a></p>
  <p style="margin:0 0 12px;color:#6B8E23;font-size:14px;font-weight:600;">&mdash; The FilterParent Team</p>
  <p style="margin:0;color:#8A9BA8;font-size:12px;">A <a href="https://fortifiedfreedomnetwork.com" style="color:#6B8E23;text-decoration:none;">Fortified Freedom Network</a> product</p>
  <p style="margin:8px 0 0;color:#8A9BA8;font-size:11px;">&copy; 2026 FilterParent. All rights reserved.</p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

async function sendConfirmationEmail(name: string, email: string) {
  try {
    await smtpTransporter.sendMail({
      from: process.env.SMTP_FROM || "jt@fortifiedfreedom.org",
      to: email,
      subject: "You're in! FilterParent Beta Program",
      html: buildConfirmationEmail(name),
    });
  } catch {
    // Best effort — don't fail the signup if email sending fails
  }
}

async function notifyDiscord(name: string, email: string, source: string, count: number) {
  if (!DISCORD_WEBHOOK_URL) return;
  try {
    await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [{
          title: "🛡️ New Waitlist Signup!",
          color: 0x6B8E23,
          fields: [
            { name: "Name", value: name, inline: true },
            { name: "Email", value: email, inline: true },
            { name: "Source", value: source || "Not specified", inline: true },
          ],
          footer: { text: `Total signups: ${count}` },
          timestamp: new Date().toISOString(),
        }],
      }),
    });
  } catch {
    // Best effort — don't fail the signup if Discord is down
  }
}

async function notifySlack(name: string, email: string, source: string, count: number) {
  if (!SLACK_BOT_TOKEN || !SLACK_WAITLIST_CHANNEL) return;
  try {
    await fetch("https://slack.com/api/chat.postMessage", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${SLACK_BOT_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        channel: SLACK_WAITLIST_CHANNEL,
        text: `🛡️ New waitlist signup: ${name} (${email})`,
        blocks: [
          {
            type: "header",
            text: { type: "plain_text", text: "🛡️ New Waitlist Signup!", emoji: true },
          },
          {
            type: "section",
            fields: [
              { type: "mrkdwn", text: `*Name:*\n${name}` },
              { type: "mrkdwn", text: `*Email:*\n${email}` },
              { type: "mrkdwn", text: `*Source:*\n${source || "Not specified"}` },
              { type: "mrkdwn", text: `*Total Signups:*\n${count}` },
            ],
          },
        ],
      }),
    });
  } catch {
    // Best effort
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, source } = body as {
      name?: string;
      email?: string;
      source?: string;
    };

    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 },
      );
    }

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "A valid email is required." },
        { status: 400 },
      );
    }

    const db = getDb();
    const normalizedEmail = email.toLowerCase().trim();

    const existing = db.prepare("SELECT id FROM waitlist WHERE email = ?").get(normalizedEmail);
    if (existing) {
      db.close();
      return NextResponse.json({
        message: "You're already on the list! We'll be in touch soon.",
      });
    }

    db.prepare(
      "INSERT INTO waitlist (name, email, source, created_at) VALUES (?, ?, ?, ?)",
    ).run(name.trim(), normalizedEmail, source || "", new Date().toISOString());

    const { count } = db.prepare("SELECT COUNT(*) as count FROM waitlist").get() as { count: number };
    db.close();

    // Fire and forget email + Discord notifications
    sendConfirmationEmail(name.trim(), normalizedEmail);
    notifyDiscord(name.trim(), normalizedEmail, source || "", count);
    notifySlack(name.trim(), normalizedEmail, source || "", count);

    return NextResponse.json({ message: "Success" });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const db = getDb();
    const entries = db.prepare("SELECT * FROM waitlist ORDER BY created_at DESC").all();
    db.close();
    return NextResponse.json(entries);
  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}
