"use client";

import Image from "next/image";
import { useEffect, useState, type FormEvent } from "react";
import {
  motion,

  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

/* ─── Shared animation helpers ─── */
function useFadeUp(delay = 0) {
  const prefersReduced = useReducedMotion();
  return {
    initial: prefersReduced ? {} : { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  };
}

/* ─── Nav ─── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b border-white/5 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "bg-navy-deep/95" : "bg-navy-deep/80"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white">
          <Image
            src="/images/logo.png"
            alt="FilterParent logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          Filter<span className="text-olive">Parent</span>
        </a>
        <motion.a
          href="#waitlist"
          className="rounded-lg bg-olive px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-olive-dark"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Get Started
        </motion.a>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  const { scrollY } = useScroll();
  const prefersReduced = useReducedMotion();
  const orbY = useTransform(scrollY, [0, 600], [0, prefersReduced ? 0 : 120]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Hero background image */}
      <Image
        src="/images/hero.png"
        alt=""
        fill
        className="object-cover opacity-30"
        priority
      />

      {/* Dot-pattern overlay for texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/60 to-navy-deep" />

      {/* Parallax gradient orb */}
      <motion.div
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-olive/10 blur-3xl"
        style={{ y: orbY }}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.h1
          {...useFadeUp()}
          className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Your peace of mind
          <br />
          in every message.
        </motion.h1>
        <motion.p
          {...useFadeUp(0.1)}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-body sm:text-xl"
        >
          AI-powered emotional protection for high-conflict communication.
          <br className="hidden sm:block" />
          See what they meant, not how they said it.
        </motion.p>
        <motion.a
          {...useFadeUp(0.2)}
          href="#waitlist"
          className="mt-10 inline-block rounded-lg bg-olive px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-olive/20 transition-colors hover:bg-olive-dark"
          whileHover={{ scale: 1.03, boxShadow: "0 0 24px rgba(107,142,35,0.35)" }}
          whileTap={{ scale: 0.97 }}
        >
          Get Started
        </motion.a>
      </div>
    </section>
  );
}

/* ─── How It Works ─── */
const steps = [
  {
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <rect x="8" y="6" width="32" height="36" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M16 18h16M16 24h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="35" cy="35" r="9" fill="#6B8E23" />
        <path d="M32 35h6M35 32v6" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Get Your Number",
    desc: "We assign you a private phone number in your area code.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <path
          d="M10 12a4 4 0 014-4h20a4 4 0 014 4v18a4 4 0 01-4 4H22l-8 6v-6h-4a4 4 0 01-4-4V12z"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <circle cx="18" cy="21" r="2" fill="#6B8E23" />
        <circle cx="24" cy="21" r="2" fill="#6B8E23" />
        <circle cx="30" cy="21" r="2" fill="#6B8E23" />
      </svg>
    ),
    title: "Share It",
    desc: "Give your new number to your co-parent or contact. They text it like normal.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <path
          d="M24 4l4.9 9.9L40 15.8l-8 7.8 1.9 11L24 29.5 14.1 34.6l1.9-11-8-7.8 11.1-1.9L24 4z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="20" r="5" fill="#6B8E23" />
        <path d="M22 20l1.5 1.5L27 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "See Safe Summaries",
    desc: "Our AI strips the hostility and delivers a calm, factual summary. The original is always saved.",
  },
];

function HowItWorks() {
  return (
    <section id="how" className="relative bg-navy py-24">
      {/* Smooth top transition */}
      <div className="pointer-events-none absolute -top-24 left-0 h-24 w-full bg-gradient-to-b from-navy-deep to-navy" />

      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          {...useFadeUp()}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          How It Works
        </motion.h2>

        <div className="mt-16 grid items-start gap-12 sm:grid-cols-3 lg:grid-cols-5">
          {/* Steps */}
          <div className="grid gap-12 sm:col-span-3 sm:grid-cols-3">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                {...useFadeUp(i * 0.15)}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-navy-deep text-olive">
                  {s.icon}
                </div>
                <span className="mt-2 text-sm font-semibold text-olive">
                  Step {i + 1}
                </span>
                <h3 className="mt-3 text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-body">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Phone mockup */}
          <motion.div
            {...useFadeUp(0.3)}
            className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-center"
          >
            <Image
              src="/images/phone-mockup.png"
              alt="FilterParent app showing safe message summaries"
              width={320}
              height={640}
              className="h-auto w-full max-w-[280px] drop-shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Phone mockup — mobile/tablet (below steps) */}
        <motion.div
          {...useFadeUp(0.2)}
          className="mt-12 flex justify-center lg:hidden"
        >
          <Image
            src="/images/phone-mockup.png"
            alt="FilterParent app showing safe message summaries"
            width={280}
            height={560}
            className="h-auto w-full max-w-[240px] drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Why FilterParent ─── */
const reasons = [
  "No more stomach drops when your phone buzzes.",
  "No more reading abuse just to find a pickup time.",
  "No more screenshots to ask someone: am I crazy?",
];

function WhyFilterParent() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Smooth top transition */}
      <div className="pointer-events-none absolute -top-24 left-0 h-24 w-full bg-gradient-to-b from-navy to-navy-deep" />

      {/* Transform background image */}
      <Image
        src="/images/transform.png"
        alt=""
        fill
        className="object-cover opacity-15"
      />
      <div className="pointer-events-none absolute inset-0 bg-navy-deep/80" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          {...useFadeUp()}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          Why FilterParent
        </motion.h2>
        <div className="mt-12 space-y-6">
          {reasons.map((r, i) => (
            <motion.p
              key={i}
              {...useFadeUp(i * 0.15)}
              className="text-xl leading-relaxed text-body italic"
            >
              {r}
            </motion.p>
          ))}
        </div>
        <motion.div
          {...useFadeUp(0.45)}
          className="mx-auto mt-12 max-w-lg rounded-2xl border border-olive/30 bg-navy/60 p-8 backdrop-blur-sm"
        >
          <p className="text-lg font-medium leading-relaxed text-white">
            FilterParent reads it for you.
            <br />
            Filters the pain. Keeps the facts.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
const plans = [
  {
    name: "Shield Pro",
    price: "$9.99",
    features: [
      "Unlimited filtered messages",
      "Safe AI summaries",
      "Vault mode",
      "Tactic detection and labeling",
      "Intensity scoring",
      "Message archiving",
      "Reply through protected number",
    ],
  },
  {
    name: "Guardian Elite",
    price: "$14.99",
    featured: true,
    features: [
      "Everything in Shield Pro, plus:",
      "Voice call proxy",
      "Call recording and transcription",
      "Speaker-labeled transcripts",
      "MMS voice message filtering",
      "Conversation context analysis",
      "AI reply suggestions (coming soon)",
    ],
  },
  {
    name: "Case Builder",
    price: "$24.99",
    addon: true,
    features: [
      "Everything in Guardian Elite, plus:",
      "Full abuse pattern analysis reports",
      "Court-ready PDF evidence exports",
      "Escalation timeline visualization",
      "Attorney-ready evidence bundles",
      "Cross-contact pattern analysis",
      "Tactic frequency reports",
    ],
  },
];

function CheckIcon({ delay, amber = false }: { delay: number; amber?: boolean }) {
  return (
    <motion.svg
      className={`mt-0.5 h-5 w-5 shrink-0 ${amber ? "text-amber" : "text-olive"}`}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2.5"
      stroke="currentColor"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 400, damping: 15, delay }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </motion.svg>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="relative bg-navy py-24">
      {/* Smooth top transition */}
      <div className="pointer-events-none absolute -top-24 left-0 h-24 w-full bg-gradient-to-b from-navy-deep to-navy" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          {...useFadeUp()}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          Simple, Protective Pricing
        </motion.h2>
        <motion.p {...useFadeUp(0.1)} className="mt-4 text-center text-body">
          Start with a free trial. Cancel anytime.
        </motion.p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {plans.map((p, planIdx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: planIdx * 0.15, ease: "easeOut" }}
              whileHover={{
                y: -4,
                boxShadow: p.addon
                  ? "0 20px 40px rgba(212,160,23,0.2)"
                  : p.featured
                    ? "0 20px 40px rgba(107,142,35,0.2)"
                    : "0 20px 40px rgba(0,0,0,0.3)",
              }}
              className={`relative rounded-2xl border p-8 transition-colors ${
                p.addon
                  ? "border-amber bg-navy-deep shadow-lg shadow-amber/10"
                  : p.featured
                    ? "border-olive bg-navy-deep shadow-lg shadow-olive/10"
                    : "border-white/10 bg-navy-deep"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-6 rounded-full bg-olive px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              {p.addon && (
                <span className="absolute -top-3 left-6 rounded-full bg-amber px-3 py-1 text-xs font-semibold text-white">
                  Add-on
                </span>
              )}
              <h3 className={`text-xl font-bold ${p.addon ? "text-amber" : "text-white"}`}>
                {p.name}
              </h3>
              <p className="mt-2">
                <span className={`text-4xl font-extrabold ${p.addon ? "text-amber" : "text-white"}`}>
                  {p.price}
                </span>
                <span className="text-body">/mo{p.addon ? " add-on" : ""}</span>
              </p>

              <ul className="mt-8 space-y-3">
                {p.features.map((f, fi) => (
                  <li key={f} className="flex items-start gap-3 text-body">
                    <CheckIcon delay={0.3 + fi * 0.06} amber={!!p.addon} />
                    {f}
                  </li>
                ))}
              </ul>

              {p.addon ? (
                <div className="mt-8 block rounded-lg border-2 border-dashed border-amber/40 py-3 text-center font-semibold text-amber/60">
                  Coming Soon
                </div>
              ) : (
                <motion.a
                  href="#waitlist"
                  className={`mt-8 block rounded-lg py-3 text-center font-semibold transition-colors ${
                    p.featured
                      ? "bg-olive text-white hover:bg-olive-dark"
                      : "border border-olive text-olive hover:bg-olive hover:text-white"
                  }`}
                  whileHover={{
                    scale: 1.03,
                    ...(p.featured
                      ? { boxShadow: "0 0 24px rgba(107,142,35,0.35)" }
                      : {}),
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  Join the Free Beta
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Waitlist ─── */
const sources = [
  "TikTok",
  "Instagram",
  "Facebook",
  "Friend/Family",
  "Attorney/Advocate",
  "DV Shelter",
  "Other",
];

function Waitlist() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      source: (form.elements.namedItem("source") as HTMLSelectElement).value,
    };

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json.error || "Something went wrong.");
        setLoading(false);
        return;
      }

      setSubmitted(true);
    } catch (_) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="waitlist" className="relative py-24">
      {/* Smooth top transition */}
      <div className="pointer-events-none absolute -top-24 left-0 h-24 w-full bg-gradient-to-b from-navy to-navy-deep" />

      <div className="mx-auto max-w-2xl px-6">
        <motion.h2
          {...useFadeUp()}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          FilterParent Beta Program
        </motion.h2>
        <motion.p
          {...useFadeUp(0.1)}
          className="mt-4 text-center text-lg text-body"
        >
          We&apos;re launching FilterParent in three beta rounds to make sure we
          get this right.
        </motion.p>

        {/* Beta rounds timeline */}
        <div className="mt-10 space-y-6">
          {[
            {
              round: "Round 1",
              date: "April 13th",
              testers: "25–100 testers",
              desc: "Free access to all features. You\u2019ll receive AI-generated text messages, MMS voice memos, and voice calls to test the full filtering experience. Bring friends to test with too \u2014 this round is about making sure everything works. Accounts reset after Round 1.",
              delay: 0.15,
            },
            {
              round: "Round 2",
              date: "~2 weeks after Round 1",
              testers: "100–300 testers",
              desc: "After incorporating Round 1 feedback, we open the doors wider. Same setup \u2014 AI-generated content and friend testing. Not meant for real abuser contact yet. Accounts reset after Round 2.",
              delay: 0.25,
            },
            {
              round: "Round 3",
              date: "~2 weeks after Round 2",
              testers: "Paid beta",
              desc: "This is the real deal. You keep your number, and you can start using FilterParent with your actual contacts. Beta testers get a permanent discounted rate as a thank you: Shield Pro at $7.99/mo and Guardian Elite at $9.99/mo (locked in forever, even after we launch publicly at full price).",
              delay: 0.35,
            },
          ].map((r) => (
            <motion.div
              key={r.round}
              {...useFadeUp(r.delay)}
              className="rounded-xl border border-white/10 bg-navy/60 p-6 text-left backdrop-blur-sm"
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-bold text-olive">{r.round}</h3>
                <span className="text-sm font-medium text-white/80">
                  &mdash; {r.date}
                </span>
                <span className="rounded-full bg-olive/15 px-2.5 py-0.5 text-xs font-semibold text-olive">
                  {r.testers}
                </span>
              </div>
              <p className="mt-3 leading-relaxed text-body">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Waitlist form */}
        <div className="mt-14 text-center">
        {submitted ? (
            <div
              className="mt-12 flex flex-col items-center gap-6 rounded-2xl border border-olive/20 bg-navy/60 p-8 backdrop-blur-sm sm:p-10"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-olive/20">
                <svg className="h-10 w-10 text-olive" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                You&apos;re in!
              </h3>
              <p className="max-w-md leading-relaxed text-body">
                We&apos;ll email you before Round 1 kicks off on{" "}
                <span className="font-semibold text-white">April 13th</span>{" "}
                with everything you need to get started.
              </p>

              <div className="mt-2 w-full border-t border-white/10 pt-6">
                <p className="mb-4 text-sm font-medium text-white/70">
                  In the meantime, follow us for updates
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.tiktok.com/@fortified.freedom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/10 px-4 py-2 text-sm text-body transition-colors hover:border-olive hover:text-white"
                  >
                    TikTok
                  </a>
                </div>
              </div>

              <div className="w-full border-t border-white/10 pt-6">
                <p className="mb-3 text-sm font-medium text-white/70">
                  Know someone who needs FilterParent?
                </p>
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      if (navigator.share) {
                        await navigator.share({
                          title: "FilterParent",
                          text: "AI-powered emotional protection for high-conflict communication.",
                          url: window.location.origin,
                        });
                      } else {
                        await navigator.clipboard.writeText(window.location.origin);
                      }
                    } catch (_) {
                      // User cancelled or API unavailable
                    }
                  }}
                  className="inline-flex items-center gap-2 rounded-lg bg-olive px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-olive-dark"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                  </svg>
                  Tell a Friend
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-12 space-y-4 text-left"
            >
              <div>
                <label htmlFor="wl-name" className="mb-1 block text-sm font-medium text-body">
                  Name
                </label>
                <input
                  id="wl-name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-white/10 bg-[#1E3344] px-4 py-3 text-white placeholder:text-white/30 focus:border-olive focus:outline-none focus:ring-1 focus:ring-olive"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="wl-email" className="mb-1 block text-sm font-medium text-body">
                  Email
                </label>
                <input
                  id="wl-email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-[#1E3344] px-4 py-3 text-white placeholder:text-white/30 focus:border-olive focus:outline-none focus:ring-1 focus:ring-olive"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label htmlFor="wl-source" className="mb-1 block text-sm font-medium text-body">
                  How did you hear about us?{" "}
                  <span className="text-white/30">(optional)</span>
                </label>
                <select
                  id="wl-source"
                  name="source"
                  className="w-full rounded-lg border border-white/10 bg-[#1E3344] px-4 py-3 text-white focus:border-olive focus:outline-none focus:ring-1 focus:ring-olive"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select one…
                  </option>
                  {sources.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {error && (
                <p className="text-sm text-red-400">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-olive py-3 text-center font-semibold text-white transition-colors hover:bg-olive-dark disabled:opacity-60"
              >
                {loading ? "Submitting…" : "Join the Waitlist"}
              </button>

              <p className="mt-3 text-center text-xs text-body">
                By joining, you agree to our{" "}
                <a href="/terms" className="text-olive underline-offset-2 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-olive underline-offset-2 hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      {/* Smooth top transition */}
      <div className="pointer-events-none absolute -top-24 left-0 h-24 w-full bg-gradient-to-b from-navy to-navy-deep" />

      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          {...useFadeUp()}
          className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between"
        >
          <div className="text-center sm:text-left">
            <p className="font-semibold text-white">
              A{" "}
              <a
                href="https://fortifiedfreedomnetwork.com"
                className="text-olive underline-offset-4 hover:underline"
              >
                Fortified Freedom Network
              </a>{" "}
              product
            </p>
            <p className="mt-1 text-sm text-body">
              &copy; 2026 FilterParent. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6 text-sm text-body">
            <a href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="transition hover:text-white">
              Terms of Service
            </a>
            <a
              href="mailto:hello@fortifiedfreedom.org"
              className="transition hover:text-white"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <HowItWorks />
      <WhyFilterParent />
      <Pricing />
      <Waitlist />
      <Footer />
    </>
  );
}
