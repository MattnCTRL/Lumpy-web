import {
  Activity,
  ArrowUpRight,
  Bell,
  Bot,
  Boxes,
  Crown,
  GitBranch,
  Github,
  Heart,
  Radar,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
} from 'lucide-react';

const GITHUB_URL = 'https://github.com/MattnCTRL/lumpy-microservices';

const FEATURES = [
  {
    icon: Crown,
    title: 'The Conductor',
    body: 'A locked, always-on master session that orchestrates everything, relays between isolated agents, and keeps the platform healthy — it can even ship fixes to its own codebase through a self-healing deploy.',
  },
  {
    icon: Server,
    title: 'Fleet monitoring',
    body: 'Servers, machines, and remotes in one view — live CPU, memory, disk, uptime, and Tailscale presence. Agentless over SSH or a one-line push agent.',
  },
  {
    icon: Heart,
    title: 'Self-healing',
    body: 'Alerts trigger an autonomous Claude session to investigate and fix safe issues. Deploys validate, health-check, and auto-roll-back, so a bad change can never take the platform down.',
  },
  {
    icon: Boxes,
    title: 'Micro services',
    body: 'A rolodex of deployable, self-improving specialist functions — uptime sentinels, cert guardians, dependency auditors — spun up on demand.',
  },
  {
    icon: GitBranch,
    title: 'Project knowledge',
    body: 'Each project gets an operating manual derived from its repos, databases, and servers — so every agent works with the full picture, scoped to only its own data.',
  },
  {
    icon: Smartphone,
    title: 'Run it from your pocket',
    body: 'A mobile-first PWA: watch the fleet, talk to sessions, approve actions, and get push alerts — from any device, anywhere.',
  },
];

const STEPS = [
  {
    icon: Radar,
    title: 'Map',
    body: 'Connect your servers and machines over Tailscale. Lumpy discovers them and builds a live picture of your whole fleet.',
  },
  {
    icon: Bot,
    title: 'Orchestrate',
    body: 'Spin up Claude Code agents per project. The Conductor coordinates them, relays knowledge, and keeps each one in its own lane.',
  },
  {
    icon: ShieldCheck,
    title: 'Heal',
    body: 'Lumpy watches uptime, certs, and metrics 24/7 — and remediates or alerts the moment something needs you.',
  },
];

const STATS = [
  { value: '24/7', label: 'always-on Conductor' },
  { value: '1', label: 'pane of glass for your fleet' },
  { value: '∞', label: 'agents, orchestrated' },
  { value: '0', label: 'bad deploys that stick' },
];

function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-950">
        <span className="absolute h-1.5 w-1.5 -translate-y-2 rounded-full bg-emerald-400" />
        <span className="absolute h-1.5 w-1.5 -translate-x-1.5 translate-y-1.5 rounded-full bg-indigo-400" />
        <span className="absolute h-1.5 w-1.5 translate-x-1.5 translate-y-1.5 rounded-full bg-indigo-400" />
      </span>
      <span className="text-base font-semibold tracking-tight text-neutral-100">Lumpy</span>
    </span>
  );
}

function Pill() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulseDot" />
      a Nublear platform · self-hosted
    </span>
  );
}

function Button({ href, children, variant = 'solid', external }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition';
  const styles =
    variant === 'solid'
      ? 'bg-neutral-100 text-neutral-900 hover:bg-white'
      : 'border border-neutral-700 text-neutral-200 hover:bg-neutral-900';
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className={`${base} ${styles}`}
    >
      {children}
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-neutral-900/80 bg-ink/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm text-neutral-400 md:flex">
            <a href="#features" className="hover:text-neutral-100">Features</a>
            <a href="#how" className="hover:text-neutral-100">How it works</a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-neutral-100">
              GitHub
            </a>
          </nav>
          <Button href={GITHUB_URL} external variant="outline">
            <Github className="h-4 w-4" /> Star on GitHub
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="grid-backdrop pointer-events-none absolute inset-0 -z-10 h-[120%]" />
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 text-center md:pt-28">
          <div className="flex justify-center">
            <Pill />
          </div>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight text-neutral-50 md:text-6xl">
            Your autonomous engineering fleet,{' '}
            <span className="bg-gradient-to-r from-emerald-300 to-indigo-300 bg-clip-text text-transparent">
              orchestrated.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-neutral-400 md:text-lg">
            Lumpy spins up, monitors, and self-heals fleets of Claude Code agents across your
            projects and servers — supervised around the clock by an always-on Conductor. One
            self-hosted brain for everything you run.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href={GITHUB_URL} external>
              Get started <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button href="#features" variant="outline">
              See what it does
            </Button>
          </div>

          {/* Faux console */}
          <div className="mx-auto mt-16 max-w-3xl animate-floaty">
            <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950/80 text-left shadow-2xl">
              <div className="flex items-center gap-2 border-b border-neutral-800 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                <span className="ml-2 flex items-center gap-1.5 text-xs text-neutral-500">
                  <Terminal className="h-3.5 w-3.5" /> conductor
                </span>
                <span className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulseDot" /> all clear
                </span>
              </div>
              <div className="space-y-2 px-4 py-4 text-sm">
                <ConsoleRow icon={Server} label="Fleet" value="3/3 servers online" tone="ok" />
                <ConsoleRow icon={Activity} label="Services" value="NubSec · Arena · Lobby — up" tone="ok" />
                <ConsoleRow icon={Bot} label="Sessions" value="6 agents working" tone="muted" />
                <ConsoleRow icon={Bell} label="Alerts" value="none" tone="muted" />
                <ConsoleRow icon={Sparkles} label="Conductor" value="idle — watching" tone="accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-neutral-900 bg-neutral-950/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="px-4 py-8 text-center">
              <div className="text-3xl font-semibold text-neutral-50">{s.value}</div>
              <div className="mt-1 text-xs text-neutral-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-50 md:text-4xl">
            One platform for your whole engineering fleet
          </h2>
          <p className="mt-4 text-neutral-400">
            Map your infrastructure, run agents that do the work, and let Lumpy keep it all healthy —
            from a single, self-hosted control plane you actually own.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-neutral-800 bg-neutral-950/60 p-6 transition hover:border-neutral-700 hover:bg-neutral-900/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 text-emerald-300">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-medium text-neutral-100">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-t border-neutral-900 bg-neutral-950/40">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-50 md:text-4xl">
            Map. Orchestrate. Heal.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <div key={s.title} className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 text-indigo-300">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm text-neutral-700">0{i + 1}</span>
                </div>
                <h3 className="mt-4 text-base font-medium text-neutral-100">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 px-6 py-16 text-center">
          <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-[36rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[100px]" />
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-neutral-50 md:text-4xl">
            Put an always-on engineer in charge of your stack.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-400">
            Lumpy is open and self-hosted. Run it on your own box and keep control of every agent,
            secret, and server.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href={GITHUB_URL} external>
              <Github className="h-4 w-4" /> View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-900">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-neutral-500 sm:flex-row">
          <Logo />
          <p>
            © {new Date().getFullYear()} Lumpy — a{' '}
            <a href="https://nublear.com" className="text-neutral-300 hover:text-white">
              Nublear
            </a>{' '}
            platform.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ConsoleRow({ icon: Icon, label, value, tone }) {
  const valueTone =
    tone === 'ok'
      ? 'text-emerald-300'
      : tone === 'accent'
        ? 'text-indigo-300'
        : 'text-neutral-400';
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="flex items-center gap-2 text-neutral-300">
        <Icon className="h-4 w-4 text-neutral-500" /> {label}
      </span>
      <span className={valueTone}>{value}</span>
    </div>
  );
}
