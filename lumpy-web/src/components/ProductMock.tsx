/**
 * A faithful, static reproduction of the real Lumpy dashboard
 * (apps/web/src/app/page.tsx + components/SideNav.tsx). Same Tailwind
 * classes, same layout, same status-dot language — so the landing page
 * shows what the product actually looks like, not an abstract mock.
 */

const NAV = [
  { label: 'Home', icon: '🏠', active: true },
  { label: 'Projects', icon: '📁' },
  { label: 'Sessions', icon: '⌨' },
  { label: 'Services', icon: '🧩' },
  { label: 'Schedules', icon: '⏰' },
  { label: 'Fleet', icon: '🖥' },
];

const SERVERS = [
  { dot: 'bg-emerald-500', label: 'ubuntu-8gb-ash-1', right: 'online' },
  { dot: 'bg-emerald-500', label: 'cpx31-memekombat', right: 'online' },
  { dot: 'bg-emerald-500', label: 'mac-studio-remote', right: 'online' },
  { dot: 'bg-emerald-500', label: 'edge-worker-01', right: 'online' },
  { dot: 'bg-emerald-500', label: 'edge-worker-02', right: 'online' },
];

const SERVICES = [
  { dot: 'bg-emerald-500', label: 'arena.memekombat.io', right: '100%' },
  { dot: 'bg-emerald-500', label: 'lobby.memekombat.io', right: '99.9%' },
  { dot: 'bg-emerald-500', label: 'lumpy.nublear.com', right: '100%' },
];

const SESSIONS = [
  { dot: 'bg-blue-500', label: 'Conductor', right: 'working' },
  { dot: 'bg-emerald-500', label: 'Librarian: Latchkey', right: 'running' },
  { dot: 'bg-emerald-500', label: 'Health Auditor', right: 'running' },
  { dot: 'bg-amber-500', label: 'api-refactor', right: 'needs you' },
  { dot: 'bg-neutral-500', label: 'nightly-tests', right: 'idle' },
];

const SCHEDULES = [
  { dot: 'bg-neutral-500', label: 'fleet sweep', right: '14:30' },
  { dot: 'bg-neutral-500', label: 'knowledge refresh', right: '18:00' },
  { dot: 'bg-neutral-500', label: 'nightly tests', right: '02:00' },
];

const ACTIVITY = [
  { icon: '🤖', title: 'Conductor recovered edge-worker-02 (redeploy verified)', at: 'just now' },
  { icon: '🌐', title: 'Uptime check: lumpy.nublear.com → 200 OK', at: '2m ago' },
  { icon: '⌨', title: 'Librarian: Latchkey updated knowledge base', at: '11m ago' },
  { icon: '🔒', title: 'TLS cert renewed for arena.memekombat.io', at: '1h ago' },
  { icon: '🔔', title: 'Alert cleared: edge-worker-02 back online', at: '1h ago' },
];

export function ProductMock() {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 shadow-2xl shadow-black/60">
      {/* browser chrome */}
      <div className="flex items-center gap-2 border-b border-neutral-800 bg-neutral-900/60 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-amber-500/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
        <span className="ml-3 truncate rounded-md bg-neutral-800/70 px-3 py-1 text-[11px] text-neutral-400">
          lumpy · orchestrator
        </span>
      </div>

      {/* app shell: sidebar + dashboard */}
      <div className="flex h-[420px] text-left">
        <SideRail />
        <div className="min-w-0 flex-1 overflow-hidden p-4">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-base font-semibold text-neutral-100">Lumpy</h1>
            <span className="rounded-full bg-emerald-950/40 px-3 py-1 text-[11px] font-medium text-emerald-300">
              all clear ✅
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Card title="Servers" stat="5/5" hint="online" rows={SERVERS} />
            <Card title="Hosted services" stat="3/3" hint="up" rows={SERVICES} />
            <Card title="Sessions" stat="4" hint="running" rows={SESSIONS} note="1 needs your input" />
            <Card title="Schedules" stat="3" hint="enabled" rows={SCHEDULES} />
          </div>

          <section className="mt-3 rounded-lg border border-neutral-800 bg-neutral-950 p-4">
            <h2 className="mb-2 text-sm font-medium text-neutral-300">Recent activity</h2>
            <ul className="space-y-1.5">
              {ACTIVITY.map((a) => (
                <li key={a.title} className="flex items-center justify-between gap-3 text-sm">
                  <span className="flex min-w-0 items-center gap-2 text-neutral-200">
                    <span className="shrink-0">{a.icon}</span>
                    <span className="truncate">{a.title}</span>
                  </span>
                  <span className="shrink-0 text-xs text-neutral-600">{a.at}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

function SideRail() {
  return (
    <nav className="hidden w-44 shrink-0 flex-col border-r border-neutral-800 px-3 py-4 sm:flex">
      <div className="mb-6 px-1">
        <div className="text-lg font-semibold tracking-tight text-neutral-100">Lumpy</div>
        <div className="text-xs text-neutral-500">Micro Services</div>
      </div>
      <div className="flex flex-col gap-1">
        {NAV.map((item) => (
          <span
            key={item.label}
            className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-sm ${
              item.active ? 'bg-neutral-800 text-neutral-100' : 'text-neutral-400'
            }`}
          >
            <span className="text-base leading-none">{item.icon}</span>
            {item.label}
          </span>
        ))}
      </div>
      <div className="mt-4 flex flex-col gap-1 border-t border-neutral-800 pt-3">
        <span className="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-neutral-400">
          <span className="text-base leading-none">🔔</span>
          Alerts
          <span className="ml-auto rounded-full bg-emerald-600 px-1.5 text-xs text-neutral-950">0</span>
        </span>
        <span className="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-neutral-400">
          <span className="text-base leading-none">⚙</span>
          Settings
        </span>
        <div className="mt-2 flex items-center gap-2 px-3 pt-1 text-xs text-neutral-500">
          <span className="h-2 w-2 animate-pulseDot rounded-full bg-emerald-500" />
          tmux ready · v0.1.0
        </div>
      </div>
    </nav>
  );
}

function Card({
  title,
  stat,
  hint,
  rows,
  note,
}: {
  title: string;
  stat: string;
  hint: string;
  rows: { dot: string; label: string; right: string }[];
  note?: string;
}) {
  return (
    <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-4">
      <div className="mb-2 flex items-baseline justify-between">
        <h2 className="text-sm font-medium text-neutral-300">{title}</h2>
        <span className="text-xs text-neutral-600">
          <span className="text-base font-semibold text-neutral-100">{stat}</span> {hint}
        </span>
      </div>
      {note && <p className="mb-1 text-xs font-medium text-amber-400">{note}</p>}
      <div className="space-y-1">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between gap-2 text-sm">
            <span className="flex min-w-0 items-center gap-2 text-neutral-200">
              <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${r.dot}`} />
              <span className="truncate">{r.label}</span>
            </span>
            <span className="shrink-0 text-xs text-neutral-500">{r.right}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
