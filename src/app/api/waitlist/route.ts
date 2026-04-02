import { NextResponse } from "next/server";
import Database from "better-sqlite3";
import path from "node:path";
import fs from "node:fs";
import nodemailer from "nodemailer";

const DB_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DB_DIR, "waitlist.db");
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WAITLIST_WEBHOOK || "";

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
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#1a2f38;border-radius:8px;overflow:hidden;">

<!-- Header -->
<tr><td style="background:linear-gradient(135deg,#0F2027,#1a3a2a);padding:40px 32px 24px;text-align:center;">
  <h1 style="margin:0;font-size:28px;color:#6B8E23;font-weight:700;">Welcome to the FilterParent Beta!</h1>
</td></tr>

<!-- Body -->
<tr><td style="padding:32px;color:#e0e0e0;font-size:15px;line-height:1.7;">

<p style="margin:0 0 20px;color:#ffffff;font-size:16px;">Hi ${name},</p>

<p style="margin:0 0 24px;">Thank you for signing up. You&rsquo;re now part of our beta program, and your feedback will directly shape how this tool supports survivors.</p>

<!-- Beta Rounds -->
<h2 style="margin:0 0 16px;font-size:20px;color:#6B8E23;">Beta Rounds Overview</h2>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
<tr><td style="padding:14px 16px;background-color:#162a32;border-left:3px solid #6B8E23;border-radius:4px;margin-bottom:8px;">
  <strong style="color:#6B8E23;">Round 1 &mdash; April 13th (25&ndash;100 testers)</strong><br>
  <span style="color:#cccccc;">Free access. AI-generated messages (texts, voice memos, calls). Bring friends to test with. Accounts reset after.</span>
</td></tr>
<tr><td style="height:8px;"></td></tr>
<tr><td style="padding:14px 16px;background-color:#162a32;border-left:3px solid #6B8E23;border-radius:4px;">
  <strong style="color:#6B8E23;">Round 2 &mdash; ~2 weeks after Round 1 (100&ndash;300 testers)</strong><br>
  <span style="color:#cccccc;">Same setup, incorporating Round 1 feedback. Accounts reset after.</span>
</td></tr>
<tr><td style="height:8px;"></td></tr>
<tr><td style="padding:14px 16px;background-color:#162a32;border-left:3px solid #6B8E23;border-radius:4px;">
  <strong style="color:#6B8E23;">Round 3 &mdash; ~2 weeks after Round 2 (Paid beta)</strong><br>
  <span style="color:#cccccc;">Keep your number. Use with real contacts. Permanent beta discount: Shield Pro $7.99/mo, Guardian Elite $9.99/mo (locked forever).</span>
</td></tr>
</table>

<!-- How It Works -->
<h2 style="margin:0 0 12px;font-size:20px;color:#6B8E23;">How It Works</h2>
<p style="margin:0 0 24px;">When you create your account, you&rsquo;ll choose a simulated contact (a fictional character). They&rsquo;ll send you texts, voice memos, and calls. You can reply and the AI responds in character.</p>

<!-- Important -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
<tr><td style="padding:16px;background-color:#2a1a1a;border:1px solid #8B0000;border-radius:6px;">
  <strong style="color:#ff6b6b;font-size:15px;">&#9888; Important</strong>
  <p style="margin:8px 0 0;color:#e0e0e0;">Do <strong>NOT</strong> give your FilterParent number to anyone in real life during Rounds 1 and 2. Simulated contacts only.</p>
</td></tr>
</table>

<!-- Safety -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
<tr><td style="padding:16px;background-color:#1a2a20;border:1px solid #6B8E23;border-radius:6px;">
  <strong style="color:#6B8E23;font-size:15px;">&#128154; Emotional Safety</strong>
  <p style="margin:8px 0 0;color:#e0e0e0;">Some messages may feel realistic and could be triggering. You can pause or stop the simulation anytime. Your safety matters more than participation.</p>
</td></tr>
</table>

<!-- Next Steps -->
<h2 style="margin:0 0 12px;font-size:20px;color:#6B8E23;">Next Steps</h2>
<p style="margin:0 0 28px;">Set up your account before April 12th so you&rsquo;re ready for launch day.</p>

<!-- CTA -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr><td align="center" style="padding-bottom:32px;">
  <p style="display:inline-block;padding:14px 36px;background-color:rgba(107,142,35,0.15);color:#6B8E23;font-size:16px;font-weight:700;border-radius:6px;border:1px solid #6B8E23;">We&#39;ll send you a link to create your account a few days before launch.</p>
</td></tr>
</table>

</td></tr>

<!-- Footer -->
<tr><td style="padding:24px 32px;background-color:#0a1a20;text-align:center;border-top:1px solid #1a3a3a;">
  <p style="margin:0 0 8px;color:#888888;font-size:13px;">Questions? Reply to this email.</p>
  <p style="margin:0 0 16px;color:#888888;font-size:13px;">Follow us on TikTok <a href="https://www.tiktok.com/@fortified.freedom" style="color:#6B8E23;text-decoration:none;">@fortified.freedom</a></p>
  <p style="margin:0;color:#6B8E23;font-size:14px;font-weight:600;">&mdash; The FilterParent Team</p>
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
