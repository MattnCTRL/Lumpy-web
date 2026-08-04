// All marketing copy, preserved from the original landing page.

export const FEATURES = [
  {
    title: 'Orchestrate Claude Code agents',
    body: 'Spin up autonomous coding sessions per project, give each one a task, and let them run. Start, stop, resume, and steer every agent from one place.',
    icon: '⌨',
  },
  {
    title: 'Fleet & uptime monitoring',
    body: 'Track every server, machine, and remote with live CPU, memory, disk and load — plus hosted-service uptime checks and alerts when something goes sideways.',
    icon: '🖥',
  },
  {
    title: 'Self-healing deploys',
    body: 'Ship changes with build, type-check and health verification — and automatic rollback if anything fails. Agents can safely improve the platform itself without taking it down.',
    icon: '🛡',
  },
  {
    title: 'The Conductor',
    body: 'A top-level orchestrator watches platform health and the whole fleet 24/7 — triaging problems, keeping sessions productive, and logging the state of everything.',
    icon: '🎛',
  },
  {
    title: 'Micro-services & Librarians',
    body: 'Deploy reusable specialist agents — like per-project Librarians that build living knowledge bases, or a Platform Health Auditor that keeps watch.',
    icon: '🧩',
  },
  {
    title: 'Drive it from anywhere',
    body: "Approve a prompt, answer a question, or kick off work straight from your phone. Your fleet keeps moving whether you're at your desk or not.",
    icon: '📱',
  },
];

export const STEPS = [
  { title: 'Connect', body: 'Link your projects, repositories, and servers. Lumpy imports them and maps your fleet automatically.' },
  { title: 'Spin up agents', body: 'Create autonomous Claude Code sessions per project with a task and the access they need.' },
  { title: 'Supervise', body: 'The Conductor monitors health, surfaces alerts, and keeps every session doing useful work.' },
  { title: 'Ship & self-heal', body: 'Changes deploy with verification and auto-rollback, so your platform stays up no matter what.' },
];

export const USE_CASES = [
  { title: 'Portfolio & agency teams', body: 'Run a dedicated agent fleet per client project, each with its own knowledge base and guardrails.' },
  { title: 'Platform & infra teams', body: 'Continuous monitoring, triage, and safe self-healing deploys across your whole server fleet.' },
  { title: 'Solo founders & small teams', body: 'Punch above your headcount — keep maintenance, tests, and upkeep moving without a full ops team.' },
];

export const TERMINAL_LINES = [
  { tag: '[sweep]', tone: 'sky', rest: 'platform ok · uptime climbing · 5/5 fleet online' },
  { tag: '[sessions]', tone: 'sky', rest: 'Conductor working · Librarian:Latchkey running' },
  { tag: '[alert]', tone: 'amber', rest: 'edge-worker-02 offline → triaging…' },
  { tag: '[heal]', tone: 'emerald', rest: 'redeploy verified · health 200 OK · recovered <1 min' },
  { tag: '[deploy]', tone: 'emerald', rest: 'build ✓ typecheck ✓ health ✓ → live' },
  { tag: '[conductor]', tone: 'neutral', rest: 'all systems nominal · next sweep in 15m' },
] as const;

export const STATS = [
  { n: '24/7', label: 'Autonomous supervision' },
  { n: '<1 min', label: 'Typical self-heal recovery' },
  { n: '∞', label: 'Agents per fleet' },
  { n: 'XX%', label: 'Less manual ops (placeholder)' },
];

export const FAQS = [
  {
    q: 'What exactly is Lumpy?',
    a: 'Lumpy is an orchestration platform for AI engineering. It runs and supervises fleets of Claude Code agents across your projects and servers, monitors the health of everything, and ships changes with self-healing, auto-rollback deploys — all coordinated by an always-on Conductor.',
  },
  {
    q: 'Do I need to babysit the agents?',
    a: "No. That's the point. Agents run autonomously on the tasks you give them, and the Conductor keeps the fleet healthy and productive. You step in only when you want to — and you can do that from your phone.",
  },
  {
    q: 'How do self-healing deploys work?',
    a: "Changes go through build, type-check, and health verification before they go live. If anything fails or the platform doesn't come back healthy, Lumpy automatically rolls back to the last known-good version — so a bad change never takes you down.",
  },
  {
    q: 'What can it monitor?',
    a: 'Servers, machines, and remotes (CPU, memory, disk, load), plus hosted-service uptime checks. When something crosses a threshold or goes offline, Lumpy raises an alert and the Conductor triages it.',
  },
  {
    q: 'Is my code and infrastructure secure?',
    a: 'Lumpy is built by Nublear with least-privilege access and scoped tokens, and Enterprise plans support self-hosted / VPC deployment so your code never leaves your environment. [Placeholder — confirm final security/compliance details before launch.]',
  },
  {
    q: 'When can I use it?',
    a: "Lumpy is rolling out in batches. Join the waitlist and we'll send an early-access invite.",
  },
];

export const PRICING = [
  {
    name: 'Solo',
    amount: '$0',
    per: '/ mo',
    desc: 'For trying Lumpy on a single project.',
    features: ['1 project, up to 2 agents', 'Fleet monitoring & alerts', 'Community support'],
    cta: 'Join the waitlist',
    featured: false,
  },
  {
    name: 'Team',
    amount: '$XX',
    per: '/ mo',
    desc: 'For teams running a fleet across several projects.',
    features: [
      'Unlimited projects & agents',
      'The Conductor + self-healing deploys',
      'Librarians & micro-services',
      'Priority support',
    ],
    cta: 'Join the waitlist',
    featured: true,
  },
  {
    name: 'Enterprise',
    amount: "Let's talk",
    per: '',
    desc: 'For portfolios, agencies, and regulated fleets.',
    features: ['SSO, roles & audit logs', 'Self-hosted / VPC deploy', 'Dedicated Nublear support'],
    cta: 'Talk to Nublear',
    featured: false,
  },
];

export const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#how', label: 'How it works' },
  { href: '#use-cases', label: 'Use cases' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];
