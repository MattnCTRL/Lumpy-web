import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Activity,
  ArrowUpRight,
  Bot,
  Check,
  ChevronRight,
  CircleDot,
  Command,
  Cpu,
  Gauge,
  GitBranch,
  Github,
  Layers3,
  MonitorUp,
  Network,
  Radar,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Zap
} from 'lucide-react';
import './styles.css';

const GITHUB_URL = 'https://github.com/MattnCTRL/lumpy-microservices';

const fleetNodes = [
  { label: 'Conductor', state: 'Orchestrating', value: '99.98%', tone: 'mint' },
  { label: 'Librarian', state: 'Indexing Latchkey', value: '42k', tone: 'violet' },
  { label: 'Health Auditor', state: 'Sweeping fleet', value: '5/5', tone: 'ice' },
  { label: 'Deploy Agent', state: 'Verified release', value: '200 OK', tone: 'coral' }
];

const features = [
  {
    icon: Command,
    title: 'Agent command plane',
    body: 'Spin up, steer, pause, resume, and retire Claude Code sessions across every project from one polished surface.'
  },
  {
    icon: Radar,
    title: 'Always-on conductor',
    body: 'A supervisory layer keeps sessions useful, catches stuck work, escalates questions, and keeps a clean audit trail.'
  },
  {
    icon: ShieldCheck,
    title: 'Self-healing deploys',
    body: 'Builds, type checks, health checks, and rollback decisions run together so the fleet can improve itself without drama.'
  },
  {
    icon: Network,
    title: 'Servers and services',
    body: 'Map machines, hosted apps, uptime checks, schedules, alerts, and specialist micro-services into one live operating model.'
  }
];

const workflow = [
  ['01', 'Connect the work', 'Link repos, servers, hosted services, schedules, and the projects your AI agents should understand.'],
  ['02', 'Launch the fleet', 'Assign specialist agents, give them tasks and boundaries, then let Lumpy create durable sessions.'],
  ['03', 'Watch the conductor', 'The conductor routes work, detects stale sessions, surfaces decisions, and keeps the dashboard calm.'],
  ['04', 'Ship with recovery', 'Every change moves through verification, deploy health, and rollback logic before it becomes trusted state.']
];

const useCases = [
  'Portfolio teams running many products with a tiny operating core',
  'Platform teams keeping uptime, tests, and infra hygiene in motion',
  'Solo founders who need maintenance work to keep moving after hours'
];

const metrics = [
  ['24/7', 'supervision'],
  ['5/5', 'fleet online'],
  ['<1 min', 'self-heal target'],
  ['∞', 'agent scale']
];

const logs = [
  ['sweep', 'Fleet sweep finished, no critical drift detected'],
  ['session', 'Librarian refreshed project memory for Latchkey'],
  ['deploy', 'Build, typecheck, health check passed for edge worker'],
  ['heal', 'Service recovered and verified at 200 OK']
];

function App() {
  return (
    <main>
      <Navigation />
      <Hero />
      <LogoRail />
      <Features />
      <Workflow />
      <UseCases />
      <Pricing />
      <Waitlist />
      <Footer />
    </main>
  );
}

function Navigation() {
  return (
    <header className="nav-shell">
      <a className="brand" href="#top" aria-label="Lumpy home">
        <span className="brand-mark">L</span>
        <span>
          <strong>Lumpy</strong>
          <small>by Nublear</small>
        </span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#features">Features</a>
        <a href="#workflow">Workflow</a>
        <a href="#use-cases">Use cases</a>
        <a href="#pricing">Pricing</a>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a>
      </nav>
      <a className="nav-cta" href="#waitlist">
        <Sparkles size={16} aria-hidden="true" />
        Waitlist
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <img
        className="hero-image"
        src="/lumpy-liquid-crystal.png"
        alt=""
        aria-hidden="true"
      />
      <div className="hero-shine" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="eyebrow">
            <CircleDot size={14} aria-hidden="true" />
            Autonomous engineering fleet orchestration
          </div>
          <h1>Your AI engineering fleet, crystal clear.</h1>
          <p>
            Lumpy spins up, supervises, and self-heals fleets of coding agents across
            your repos, services, and servers, with a conductor keeping the whole
            operation bright, observable, and moving.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#waitlist">
              Join the waitlist
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="secondary-btn" href="#workflow">
              See the workflow
              <ChevronRight size={18} aria-hidden="true" />
            </a>
            <a className="secondary-btn" href={GITHUB_URL} target="_blank" rel="noreferrer">
              <Github size={18} aria-hidden="true" />
              Star on GitHub
            </a>
          </div>
          <div className="hero-proof" aria-label="Lumpy platform proof points">
            {metrics.map(([value, label]) => (
              <span key={label}>
                <strong>{value}</strong>
                {label}
              </span>
            ))}
          </div>
        </div>
        <ProductPreview />
      </div>
      <div className="next-peek" aria-hidden="true">
        <span>Capabilities</span>
        <span>Conductor</span>
        <span>Self-healing</span>
      </div>
    </section>
  );
}

function ProductPreview() {
  return (
    <aside className="product-shell" aria-label="Lumpy product preview">
      <div className="window-bar">
        <span className="dot coral" />
        <span className="dot amber" />
        <span className="dot green" />
        <span className="window-title">lumpy.fleet</span>
        <span className="status-pill">
          <Zap size={13} aria-hidden="true" />
          live
        </span>
      </div>
      <div className="dashboard">
        <div className="side-rail">
          <strong>Lumpy</strong>
          <button aria-label="Home">
            <Layers3 size={16} aria-hidden="true" />
          </button>
          <button aria-label="Sessions">
            <Bot size={16} aria-hidden="true" />
          </button>
          <button aria-label="Fleet">
            <Server size={16} aria-hidden="true" />
          </button>
          <button aria-label="Deploys">
            <GitBranch size={16} aria-hidden="true" />
          </button>
        </div>
        <div className="dashboard-main">
          <div className="dashboard-head">
            <div>
              <span>Conductor</span>
              <h2>All systems bright</h2>
            </div>
            <div className="pulse-meter">
              <Activity size={16} aria-hidden="true" />
              5/5 online
            </div>
          </div>
          <div className="node-grid">
            {fleetNodes.map((node) => (
              <article className={`node-card ${node.tone}`} key={node.label}>
                <div>
                  <span>{node.label}</span>
                  <strong>{node.value}</strong>
                </div>
                <p>{node.state}</p>
              </article>
            ))}
          </div>
          <div className="log-console">
            <div className="console-head">
              <span>live log</span>
              <Gauge size={15} aria-hidden="true" />
            </div>
            {logs.map(([tag, message]) => (
              <div className="log-row" key={message}>
                <code>{tag}</code>
                <span>{message}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

function LogoRail() {
  return (
    <section className="logo-rail" aria-label="Teams building on Lumpy">
      <span>For teams running more software than people can babysit</span>
      <div>
        <b>Nublear Labs</b>
        <b>FleetOps</b>
        <b>Latchkey</b>
        <b>EdgeWorks</b>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="section" id="features">
      <div className="section-heading">
        <span>Capabilities</span>
        <h2>One glossy command surface for a serious engineering operation.</h2>
      </div>
      <div className="feature-grid">
        {features.map(({ icon: Icon, title, body }) => (
          <article className="feature-card" key={title}>
            <div className="icon-chip">
              <Icon size={22} aria-hidden="true" />
            </div>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section className="section split-section" id="workflow">
      <div className="section-heading sticky-heading">
        <span>Workflow</span>
        <h2>From repo sprawl to an orchestrated agent fleet.</h2>
        <p>
          The redesign keeps the original product promise, but frames it as a calm
          operating layer: visible status, guided decisions, and verified recovery.
        </p>
      </div>
      <div className="timeline">
        {workflow.map(([number, title, body]) => (
          <article className="timeline-step" key={title}>
            <span>{number}</span>
            <div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section className="use-cases" id="use-cases">
      <div className="crystal-panel">
        <div className="section-heading">
          <span>Built for</span>
          <h2>Teams that need the fleet to keep moving when nobody is staring at it.</h2>
        </div>
        <div className="use-case-grid">
          <ul>
            {useCases.map((useCase) => (
              <li key={useCase}>
                <Check size={18} aria-hidden="true" />
                {useCase}
              </li>
            ))}
          </ul>
          <div className="mini-orbit" aria-label="Lumpy system map">
            <div className="orbit-core">
              <Cpu size={28} aria-hidden="true" />
              <strong>Conductor</strong>
            </div>
            <span className="orbit-chip chip-one">
              <Bot size={15} aria-hidden="true" />
              Agents
            </span>
            <span className="orbit-chip chip-two">
              <Server size={15} aria-hidden="true" />
              Servers
            </span>
            <span className="orbit-chip chip-three">
              <MonitorUp size={15} aria-hidden="true" />
              Uptime
            </span>
            <span className="orbit-chip chip-four">
              <TerminalSquare size={15} aria-hidden="true" />
              Sessions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="section-heading">
        <span>Pricing concept</span>
        <h2>Start with one project, scale into a fleet.</h2>
      </div>
      <div className="pricing-grid">
        <article className="price-card">
          <h3>Solo</h3>
          <strong>$0</strong>
          <p>For testing Lumpy on a single project.</p>
          <a href="#waitlist">Join waitlist</a>
        </article>
        <article className="price-card featured">
          <div className="label">Most likely</div>
          <h3>Team</h3>
          <strong>$XX</strong>
          <p>For teams running agents across several projects and services.</p>
          <a href="#waitlist">Request access</a>
        </article>
        <article className="price-card">
          <h3>Enterprise</h3>
          <strong>Talk</strong>
          <p>For self-hosted, VPC, SSO, audit logs, and dedicated support.</p>
          <a href="https://www.nublear.com/contact">Talk to Nublear</a>
        </article>
      </div>
    </section>
  );
}

function Waitlist() {
  return (
    <section className="waitlist" id="waitlist">
      <div>
        <span>Early access</span>
        <h2>Put your engineering operation on autopilot.</h2>
        <p>Join the Lumpy waitlist and see what an always-on AI engineering fleet feels like when it is designed to stay legible.</p>
      </div>
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="email">Email address</label>
        <div className="input-row">
          <input id="email" type="email" placeholder="you@company.com" />
          <button type="submit">
            Request access
            <ArrowUpRight size={17} aria-hidden="true" />
          </button>
        </div>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <a className="brand" href="#top" aria-label="Lumpy home">
        <span className="brand-mark">L</span>
        <span>
          <strong>Lumpy</strong>
          <small>by Nublear</small>
        </span>
      </a>
      <p>
        © {new Date().getFullYear()} Lumpy — a Nublear platform.{' '}
        <a href={GITHUB_URL} target="_blank" rel="noreferrer">
          Star us on GitHub
        </a>
      </p>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(<App />);
