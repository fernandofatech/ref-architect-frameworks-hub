import { ShieldCheck, Map, Layers, Network, Boxes, Server, Compass } from "lucide-react";

const frameworks = [
  {
    icon: ShieldCheck,
    title: "AWS Well-Architected",
    description: "Six pillars: Operational Excellence, Security, Reliability, Performance, Cost, Sustainability.",
  },
  {
    icon: Map,
    title: "TOGAF ADM",
    description: "Architecture Development Method, phases A through H.",
  },
  {
    icon: Layers,
    title: "C4 Model",
    description: "Context, Container, Component and Code diagrams.",
  },
  {
    icon: Network,
    title: "ArchiMate",
    description: "Business, Application and Technology layers.",
  },
  {
    icon: Boxes,
    title: "Domain-Driven Design",
    description: "Bounded contexts, ubiquitous language, strategic and tactical patterns.",
  },
  {
    icon: Server,
    title: "12-Factor App",
    description: "Pragmatic checklist for cloud-native applications.",
  },
  {
    icon: Compass,
    title: "Cynefin",
    description: "Decision framework: clear, complicated, complex, chaotic.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 sm:px-10">
      <section className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm uppercase tracking-widest text-sky-400">
          Portfolio · Solution Architecture
        </p>
        <h1 className="text-4xl font-bold sm:text-6xl">Architect Frameworks Hub</h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          A fast reference for the frameworks a practicing solution architect
          uses every week — concise summaries, comparable trade-offs, links to
          canonical sources for depth.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://github.com/fernandofatech/architect-frameworks-hub"
            className="rounded-md bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-sky-400"
          >
            View on GitHub
          </a>
          <a
            href="https://fernando.moretes.com"
            className="rounded-md border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-800"
          >
            Portfolio
          </a>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-5xl">
        <h2 className="text-2xl font-semibold">Covered frameworks</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {frameworks.map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
              <f.icon className="h-6 w-6 text-sky-400" aria-hidden />
              <h3 className="mt-3 text-base font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mx-auto mt-24 max-w-5xl border-t border-slate-800 pt-8 text-sm text-slate-400">
        <p>
          Built by{" "}
          <a className="text-sky-300 hover:underline" href="https://fernando.moretes.com">
            Fernando Francisco Azevedo
          </a>{" "}
          ·{" "}
          <a
            className="text-sky-300 hover:underline"
            href="https://www.linkedin.com/in/fernando-francisco-azevedo/"
          >
            LinkedIn
          </a>{" "}
          ·{" "}
          <a className="text-sky-300 hover:underline" href="https://github.com/fernandofatech">
            GitHub
          </a>
        </p>
        <p className="mt-2">MIT License · © 2026</p>
      </footer>
    </main>
  );
}
