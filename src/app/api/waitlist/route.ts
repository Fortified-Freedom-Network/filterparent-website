import { NextResponse } from "next/server";
import Database from "better-sqlite3";
import path from "node:path";
import fs from "node:fs";

const DB_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DB_DIR, "waitlist.db");

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

    db.close();
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
