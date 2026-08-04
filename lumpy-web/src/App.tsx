import { useState, type ReactNode } from 'react';
import { ProductMock } from './components/ProductMock';
import {
  FAQS,
  FEATURES,
  NAV_LINKS,
  PRICING,
  STATS,
  STEPS,
  TERMINAL_LINES,
  USE_CASES,
} from './content';

const TONE: Record<string, string> = {
  sky: 'text-sky-400',
  amber: 'text-amber-400',
  emerald: 'text-emerald-400',
  neutral: 'text-neutral-400',
};

export function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Logos />
        <Features />
        <HowItWorks />
        <UseCases />
        <Stats />
        <Testimonials />
        <Pricing />
        <Waitlist />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

function BrandMark() {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="grid h-7 w-7 place-items-center rounded-md border border-neutral-700 bg-neutral-900">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
          <path
            d="M9 6 v12 h7"
            stroke="#e5e5e5"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-base font-semibold tracking-tight text-neutral-100">Lumpy</span>
      <span className="text-xs text-neutral-500">by Nublear</span>
    </span>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" aria-label="Lumpy by Nublear">
          <BrandMark />
        </a>
        <nav className="hidden items-center gap-7 text-sm text-neutral-400 md:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-neutral-100">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#waitlist"
            className="rounded-md bg-emerald-500 px-3.5 py-1.5 text-sm font-medium text-neutral-950 transition hover:bg-emerald-400"
          >
            Join the waitlist
          </a>
          <button
            className="text-neutral-300 md:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-neutral-800 px-6 py-3 text-sm md:hidden">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-neutral-300 hover:bg-neutral-900"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-neutral-900">
      {/* subtle grid + glow, kept neutral to match the product */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-400">
            <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-emerald-500" />
            Always-on orchestration for AI engineering teams
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-neutral-100 sm:text-5xl">
            Your autonomous engineering fleet,{' '}
            <span className="text-emerald-400">orchestrated.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-400">
            Lumpy spins up, supervises, and self-heals fleets of Claude Code agents across your
            projects and servers — with an always-on Conductor keeping everything healthy around the
            clock.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-medium text-neutral-950 transition hover:bg-emerald-400"
            >
              Join the waitlist
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#how"
              className="rounded-md border border-neutral-700 px-5 py-2.5 text-sm text-neutral-200 transition hover:bg-neutral-900"
            >
              See how it works
            </a>
          </div>
          <p className="mt-5 flex items-center gap-2 text-xs text-neutral-500">
            <span className="text-emerald-400">✓</span>
            Connect your repos &amp; servers · drive agents from anywhere, even your phone
          </p>
        </div>
        <div className="lg:pl-4">
          <ProductMock />
        </div>
      </div>
    </section>
  );
}

function Logos() {
  return (
    <section className="border-b border-neutral-900 py-10">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="mb-6 text-xs uppercase tracking-widest text-neutral-600">Teams building on Lumpy</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* PLACEHOLDER: replace with real customer / partner logos */}
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="rounded-md border border-dashed border-neutral-800 px-6 py-3 text-xs text-neutral-700"
            >
              Your logo
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: ReactNode }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs uppercase tracking-widest text-emerald-400">{eyebrow}</span>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-neutral-100 sm:text-3xl">{title}</h2>
      {sub && <p className="mt-3 text-neutral-400">{sub}</p>}
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="border-b border-neutral-900 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          eyebrow="Capabilities"
          title="One platform to run your whole AI engineering operation"
          sub="Lumpy turns a pile of one-off AI coding sessions into a coordinated, supervised, self-healing fleet."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-lg border border-neutral-800 bg-neutral-950 p-5 transition hover:border-neutral-700"
            >
              <div className="grid h-10 w-10 place-items-center rounded-md border border-neutral-800 bg-neutral-900 text-lg">
                {f.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold text-neutral-100">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="border-b border-neutral-900 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          eyebrow="How it works"
          title="From repos to a running fleet in minutes"
          sub="Point Lumpy at your work, define what each agent should do, and let the Conductor keep it all healthy."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <div key={s.title} className="rounded-lg border border-neutral-800 bg-neutral-950 p-5">
              <div className="text-xs text-neutral-600">0{i + 1}</div>
              <h3 className="mt-2 text-base font-semibold text-neutral-100">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section id="use-cases" className="border-b border-neutral-900 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <span className="text-xs uppercase tracking-widest text-emerald-400">Built for</span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-neutral-100 sm:text-3xl">
            Teams that run more software than people can babysit
          </h2>
          <p className="mt-3 text-neutral-400">
            Whether you operate one product or a portfolio, Lumpy gives you a coordinated AI
            engineering layer that never sleeps.
          </p>
          <div className="mt-8 space-y-5">
            {USE_CASES.map((u) => (
              <div key={u.title} className="flex gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-950/60 text-xs text-emerald-400">
                  ✓
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-100">{u.title}</h4>
                  <p className="mt-1 text-sm text-neutral-400">{u.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 shadow-2xl shadow-black/60">
          <div className="flex items-center gap-2 border-b border-neutral-800 bg-neutral-900/60 px-4 py-2.5">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            <span className="ml-3 text-[11px] text-neutral-500">conductor · live log</span>
          </div>
          <div className="space-y-2 p-5 text-[13px] leading-relaxed">
            {TERMINAL_LINES.map((l) => (
              <div key={l.tag} className="flex gap-2">
                <span className="shrink-0 text-neutral-600">{l.tag}</span>
                <span className={TONE[l.tone]}>{l.rest}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 pt-1 text-neutral-600">
              <span>$</span>
              <span className="inline-block h-4 w-2 animate-pulseDot bg-neutral-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-b border-neutral-900 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6 text-center">
          <span className="rounded-full border border-dashed border-amber-800/60 px-3 py-1 text-[11px] text-amber-500/80">
            Placeholder metrics — wire to real data before launch
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-lg border border-neutral-800 bg-neutral-950 p-6 text-center">
              <div className="text-3xl font-bold text-emerald-400">{s.n}</div>
              <div className="mt-2 text-xs text-neutral-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    '[ Customer quote about how Lumpy replaced a pile of manual babysitting with a fleet that just runs. ]',
    '[ Customer quote about uptime / self-healing saving a weekend. ]',
    '[ Customer quote about shipping more with a small team. ]',
  ];
  return (
    <section className="border-b border-neutral-900 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          eyebrow="What people say"
          title="Loved by the teams it runs for"
          sub={
            <span className="rounded-full border border-dashed border-amber-800/60 px-3 py-1 text-[11px] text-amber-500/80">
              Placeholder testimonials — swap for real quotes &amp; attribution
            </span>
          }
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {quotes.map((q, i) => (
            <figure key={i} className="rounded-lg border border-neutral-800 bg-neutral-950 p-6">
              <blockquote className="text-sm leading-relaxed text-neutral-300">“{q}”</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className="h-8 w-8 rounded-full bg-neutral-800" />
                <span className="text-xs">
                  <span className="block font-semibold text-neutral-200">Name Surname</span>
                  <span className="text-neutral-600">Role · Company</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="border-b border-neutral-900 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          eyebrow="Pricing"
          title="Start small, scale your fleet"
          sub={
            <span className="rounded-full border border-dashed border-amber-800/60 px-3 py-1 text-[11px] text-amber-500/80">
              Placeholder tiers &amp; prices — confirm packaging before launch
            </span>
          }
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {PRICING.map((t) => (
            <div
              key={t.name}
              className={`flex flex-col rounded-lg border p-6 ${
                t.featured ? 'border-emerald-700/60 bg-emerald-950/10' : 'border-neutral-800 bg-neutral-950'
              }`}
            >
              {t.featured && (
                <span className="mb-3 w-fit rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-medium text-neutral-950">
                  Most popular
                </span>
              )}
              <h3 className="text-base font-semibold text-neutral-100">{t.name}</h3>
              <div className="mt-3 text-3xl font-bold text-neutral-100">
                {t.amount}
                {t.per && <span className="text-sm font-normal text-neutral-500"> {t.per}</span>}
              </div>
              <p className="mt-2 text-sm text-neutral-400">{t.desc}</p>
              <ul className="mt-5 space-y-2 text-sm text-neutral-300">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-emerald-400">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={t.cta === 'Talk to Nublear' ? 'https://www.nublear.com/contact' : '#waitlist'}
                className={`mt-6 rounded-md px-4 py-2 text-center text-sm font-medium transition ${
                  t.featured
                    ? 'bg-emerald-500 text-neutral-950 hover:bg-emerald-400'
                    : 'border border-neutral-700 text-neutral-200 hover:bg-neutral-900'
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Waitlist() {
  const [done, setDone] = useState(false);
  const [email, setEmail] = useState('');
  return (
    <section id="waitlist" className="border-b border-neutral-900 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900/40 to-neutral-950 p-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-100 sm:text-3xl">
            Put your engineering on autopilot
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-neutral-400">
            Join the waitlist for early access to Lumpy — your autonomous engineering fleet,
            orchestrated.
          </p>
          {done ? (
            <p className="mt-7 text-emerald-400">Thanks — you're on the list. We'll be in touch. ✦</p>
          ) : (
            <form
              className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                if (email.indexOf('@') < 1) return;
                // TODO: POST to real waitlist endpoint (Formspree / API route / CRM).
                setDone(true);
              }}
            >
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                aria-label="Email address"
                className="input flex-1"
              />
              <button
                type="submit"
                className="rounded-md bg-emerald-500 px-5 py-2 text-sm font-medium text-neutral-950 transition hover:bg-emerald-400"
              >
                Request early access
              </button>
            </form>
          )}
          <p className="mt-4 text-xs text-neutral-600">No spam. Early access invites roll out in batches.</p>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="border-b border-neutral-900 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHead eyebrow="FAQ" title="Questions, answered" />
        <div className="mt-10 space-y-3">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group rounded-lg border border-neutral-800 bg-neutral-950 p-4 [&_summary]:cursor-pointer"
            >
              <summary className="flex items-center justify-between text-sm font-medium text-neutral-200 marker:content-['']">
                {f.q}
                <span className="text-neutral-500 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { title: 'Product', links: NAV_LINKS },
    {
      title: 'Company',
      links: [
        { href: 'https://www.nublear.com', label: 'Nublear' },
        { href: 'https://www.nublear.com/contact', label: 'Contact' },
        { href: '#faq', label: 'FAQ' },
      ],
    },
    {
      title: 'Get started',
      links: [
        { href: '#waitlist', label: 'Join the waitlist' },
        { href: 'https://www.nublear.com/contact', label: 'Talk to us' },
      ],
    },
  ];
  return (
    <footer className="py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <BrandMark />
            <p className="mt-4 max-w-xs text-sm text-neutral-500">
              Your autonomous engineering fleet, orchestrated. A platform by Nublear — modern
              consulting for the AI era.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h5 className="text-xs uppercase tracking-widest text-neutral-600">{c.title}</h5>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                {c.links.map((l) => (
                  <a key={l.label} href={l.href} className="text-neutral-400 transition hover:text-neutral-100">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-neutral-900 pt-6 text-xs text-neutral-600 sm:flex-row">
          <span>© {new Date().getFullYear()} Nublear. All rights reserved.</span>
          <span>lumpy.nublear.com</span>
        </div>
      </div>
    </footer>
  );
}
