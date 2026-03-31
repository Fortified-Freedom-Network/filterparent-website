export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <HowItWorks />
      <WhyFilterParent />
      <Pricing />
      <Footer />
    </>
  );
}

/* ─── Nav ─── */
function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-navy-deep/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-tight text-white">
          Filter<span className="text-olive">Parent</span>
        </a>
        <a
          href="https://app.filterparent.com/signup"
          className="rounded-lg bg-olive px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-olive-dark"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Subtle gradient orb */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-olive/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h1 className="animate-fade-in-up text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Your peace of mind
          <br />
          in every message.
        </h1>
        <p className="animate-fade-in-up animate-delay-100 mx-auto mt-6 max-w-xl text-lg leading-relaxed text-body sm:text-xl">
          AI-powered emotional protection for high-conflict communication.
          <br className="hidden sm:block" />
          See what they meant, not how they said it.
        </p>
        <a
          href="https://app.filterparent.com/signup"
          className="animate-fade-in-up animate-delay-200 mt-10 inline-block rounded-lg bg-olive px-8 py-4 text-lg font-semibold text-white transition hover:bg-olive-dark"
        >
          Get Started
        </a>
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
    <section id="how" className="bg-navy py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          How It Works
        </h2>
        <div className="mt-16 grid gap-12 sm:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className={`animate-fade-in-up animate-delay-${(i + 1) * 100} flex flex-col items-center text-center`}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-navy-deep text-olive">
                {s.icon}
              </div>
              <span className="mt-2 text-sm font-semibold text-olive">
                Step {i + 1}
              </span>
              <h3 className="mt-3 text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-body">{s.desc}</p>
            </div>
          ))}
        </div>
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
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Why FilterParent
        </h2>
        <div className="mt-12 space-y-6">
          {reasons.map((r, i) => (
            <p
              key={i}
              className={`animate-fade-in-up animate-delay-${(i + 1) * 100} text-xl leading-relaxed text-body italic`}
            >
              {r}
            </p>
          ))}
        </div>
        <div className="animate-fade-in-up animate-delay-400 mx-auto mt-12 max-w-lg rounded-2xl border border-olive/30 bg-navy/60 p-8">
          <p className="text-lg font-medium leading-relaxed text-white">
            FilterParent reads it for you.
            <br />
            Filters the pain. Keeps the facts.
          </p>
        </div>
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
      "Unlimited messages",
      "Safe summaries",
      "Vault mode",
      "Court-ready exports",
      "Tactic labels",
      "Intensity scoring",
    ],
  },
  {
    name: "Guardian Elite",
    price: "$14.99",
    featured: true,
    features: [
      "Everything in Shield Pro",
      "AI reply rewriter",
      "Advanced pattern analysis",
      "Red-flag alerts",
      "Evidence builder",
      "Nervous system support",
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="bg-navy py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          Simple, Protective Pricing
        </h2>
        <p className="mt-4 text-center text-body">
          Start with a free trial. Cancel anytime.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-8 transition ${
                p.featured
                  ? "border-olive bg-navy-deep shadow-lg shadow-olive/10"
                  : "border-white/10 bg-navy-deep"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-6 rounded-full bg-olive px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-white">{p.name}</h3>
              <p className="mt-2">
                <span className="text-4xl font-extrabold text-white">
                  {p.price}
                </span>
                <span className="text-body">/mo</span>
              </p>

              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-body">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-olive"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://app.filterparent.com/signup"
                className={`mt-8 block rounded-lg py-3 text-center font-semibold transition ${
                  p.featured
                    ? "bg-olive text-white hover:bg-olive-dark"
                    : "border border-olive text-olive hover:bg-olive hover:text-white"
                }`}
              >
                Start Free Trial
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
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
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a
              href="mailto:hello@fortifiedfreedom.org"
              className="hover:text-white transition"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
