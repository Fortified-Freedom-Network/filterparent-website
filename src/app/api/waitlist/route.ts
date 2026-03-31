import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

const DATA_PATH = path.join(process.cwd(), "data", "waitlist.json");

interface WaitlistEntry {
  name: string;
  email: string;
  source: string;
  timestamp: string;
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

    let entries: WaitlistEntry[] = [];
    try {
      const raw = await fs.readFile(DATA_PATH, "utf-8");
      entries = JSON.parse(raw);
    } catch {
      entries = [];
    }

    const normalizedEmail = email.toLowerCase().trim();

    if (entries.some((e) => e.email === normalizedEmail)) {
      return NextResponse.json({
        message: "You're already on the list! We'll be in touch soon.",
      });
    }

    entries.push({
      name: name.trim(),
      email: normalizedEmail,
      source: source || "",
      timestamp: new Date().toISOString(),
    });

    await fs.writeFile(DATA_PATH, JSON.stringify(entries, null, 2) + "\n");

    return NextResponse.json({ message: "Success" });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
