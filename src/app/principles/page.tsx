import { Navbar } from "@/components/navbar"
import Link from "next/link"

export const metadata = {
  title: "Principles — Digital Reasoning Thread",
  description:
    "Core principles of the Digital Reasoning Thread: context propagation, decision lineage, composability, and persistence for industrial AI.",
}

export default function PrinciplesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container px-6 md:px-8 pt-28 pb-24 max-w-3xl mx-auto">
        <header className="space-y-4 mb-16">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Main principles
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A short overview of what the Digital Reasoning Thread is and why it
            matters — distilled from the concept paper and narrative.
          </p>
        </header>

        <article className="space-y-16">
          {/* What is DRT */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">What is a Digital Reasoning Thread?</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Digital Reasoning Thread (DRT) is a{" "}
              <strong className="text-foreground">persistent, context-aware, auditable</strong>{" "}
              representation of the reasoning that drives industrial decisions across systems,
              agents, and humans. It turns reasoning into an asset that can be traced, audited,
              and reused — not just &ldquo;what happened,&rdquo; but{" "}
              <strong className="text-foreground">why</strong> it happened.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In practice: it&apos;s the structured chain of machine reasoning that connects
              steps end-to-end. The difference between &ldquo;five AI models that each did
              something&rdquo; and &ldquo;one coherent line of industrial thought.&rdquo;
            </p>
          </section>

          {/* The problem */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">The problem</h2>
            <p className="text-muted-foreground leading-relaxed">
              Most industrial systems record <em>what</em> happened — not <em>why</em>. As data
              and decisions move across PLM, MES, ERP, digital twins, and AI models:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-2">
              <li>Assumptions are lost at handovers</li>
              <li>Analysis is repeated across teams</li>
              <li>Audits become slow and incomplete</li>
              <li>Trust in AI outputs stays low</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Reasoning today is fragmented: isolated model calls, logic buried in applications,
              or in people&apos;s heads. DRT is the connective layer that carries context and
              rationale across that chain.
            </p>
          </section>

          {/* Four pillars */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">Four pillars of a DRT</h2>
            <ul className="space-y-5">
              <li>
                <strong className="text-foreground">Context propagation.</strong>{" "}
                <span className="text-muted-foreground">
                  Every step inherits full upstream context — not only data, but rationale,
                  confidence, and rejected alternatives. That travels with the thread.
                </span>
              </li>
              <li>
                <strong className="text-foreground">Decision lineage.</strong>{" "}
                <span className="text-muted-foreground">
                  An immutable chain of reasoning provenance for regulation, safety, and
                  root-cause analysis — a record of why each conclusion was drawn.
                </span>
              </li>
              <li>
                <strong className="text-foreground">Composability.</strong>{" "}
                <span className="text-muted-foreground">
                  Reasoning is decomposed into modular, chainable units (like microservices for
                  logic). A vibration-analysis thread can feed a remaining-useful-life thread,
                  then procurement — each testable, versioned, and reusable.
                </span>
              </li>
              <li>
                <strong className="text-foreground">Persistence.</strong>{" "}
                <span className="text-muted-foreground">
                  The thread lives across time: it can be paused, resumed, branched, and
                  merged. A thread started at inspection can be extended with later data and
                  closed with the repair outcome.
                </span>
              </li>
            </ul>
          </section>

          {/* Kubernetes analogy */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">The Kubernetes analogy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Kubernetes didn&apos;t replace containers — it made them operable at scale. Similarly,{" "}
              <strong className="text-foreground">the DRT is the Kubernetes of industrial reasoning</strong>:
              it doesn&apos;t replace your models or agents; it makes them viable where &ldquo;the AI said
              so&rdquo; is never enough.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left p-3 font-medium">Before Kubernetes</th>
                    <th className="text-left p-3 font-medium">Before DRT</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/70">
                    <td className="p-3">Container</td>
                    <td className="p-3">AI model call / agent step</td>
                  </tr>
                  <tr className="border-b border-border/70">
                    <td className="p-3">Orchestrating thousands is chaos</td>
                    <td className="p-3">Chaining reasoning at scale is chaos</td>
                  </tr>
                  <tr>
                    <td className="p-3">Pod, Service, Deployment</td>
                    <td className="p-3">Reasoning Thread, Decision Node, Lineage Chain</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Layers (from PDF) */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">How DRT connects the stack</h2>
            <p className="text-muted-foreground leading-relaxed">
              DRT aims to connect perception, knowledge, reasoning, simulation, execution, and
              feedback. In that flow:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Perception</strong> — signals from sensors, logs, images, documents</li>
              <li><strong className="text-foreground">Knowledge</strong> — schemas, ontologies, catalogs</li>
              <li><strong className="text-foreground">Reasoning</strong> — goals, assumptions, constraints, plans, traces</li>
              <li><strong className="text-foreground">Simulation</strong> — what-if scenarios, digital twins</li>
              <li><strong className="text-foreground">Execution</strong> — MES, PLCs, robots, enterprise systems</li>
              <li><strong className="text-foreground">Feedback</strong> — intent vs outcome, context updates</li>
              <li><strong className="text-foreground">Governance</strong> — identity, policy, lineage, safety (spanning all layers)</li>
            </ul>
          </section>

          {/* Anatomy (simplified) */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">Anatomy of a thread</h2>
            <p className="text-muted-foreground leading-relaxed">
              A DRT is not just a prompt chain or a DAG of API calls. It includes:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Reasoning nodes</strong> — units of inference (LLM, physics model, rules, or human), with inputs, outputs, confidence, and explanation trace</li>
              <li><strong className="text-foreground">Thread context</strong> — a cumulative object flowing through the thread, carrying rationale and narrowing uncertainty</li>
              <li><strong className="text-foreground">Branching and convergence</strong> — when diagnostics consider multiple failure modes, the thread branches; when evidence rules some out, it converges</li>
              <li><strong className="text-foreground">Temporal anchors</strong> — each node tied to the data state at a point in time, so you can replay, do what-if, and audit retroactively</li>
              <li><strong className="text-foreground">Governance hooks</strong> — who authorized, what policy, safety constraints, human-in-the-loop — built into the structure, not bolted on</li>
            </ul>
          </section>

          {/* What it enables */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">What this makes possible</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li><strong className="text-foreground">Explainable autonomy</strong> — Full thread from sensor → anomaly → failure mode → risk → recommendation, with every step traceable.</li>
              <li><strong className="text-foreground">Reasoning reuse</strong> — A thread validated for one asset can be templated and deployed across a fleet; improvements propagate.</li>
              <li><strong className="text-foreground">Cross-system reasoning</strong> — Decisions that span OT, supply chain, finance, and safety without losing context or lineage.</li>
              <li><strong className="text-foreground">Continuous learning</strong> — When the outcome is known (repair worked, prediction correct), it can flow back through the thread to calibrate nodes.</li>
            </ul>
          </section>

          {/* Use cases (from PDF) */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">Example use cases</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <strong className="text-foreground">Engineering handover</strong> — Constraints from PLM/tools → compliance check, risk simulation, parameter windows → MES work instructions and safe ranges. Outcome: traceable handover, faster ramp-up.
              </li>
              <li>
                <strong className="text-foreground">Predictive maintenance + scheduling</strong> — Time-series (e.g. UNS), maintenance logs, shift plan → failure-window prediction, downtime optimization → work order and pick list. Outcome: less unplanned downtime.
              </li>
              <li>
                <strong className="text-foreground">Supply chain exceptions</strong> — Supplier ETA change, inventory, priorities → option evaluation, penalty/service-level simulation → replan and customer updates. Outcome: consistent decisions and audit-ready explanations.
              </li>
            </ul>
          </section>

          {/* Trademark & open use */}
          <section className="rounded-xl border border-border bg-muted/20 p-6 space-y-3">
            <h2 className="text-lg font-semibold">Trademark & open use</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              &ldquo;Digital Reasoning Thread&rdquo; is a registered European trademark —
              held so that everyone can use the term and develop the concept. No single
              company can grab it. You are welcome to use it, fork it, and build on it.{" "}
              <Link href="/trademark" className="text-primary hover:underline">
                Full policy →
              </Link>
            </p>
          </section>

          {/* CTA */}
          <section className="rounded-xl border border-border bg-muted/20 p-6 space-y-4">
            <h2 className="text-lg font-semibold">Go deeper</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              DRT is an architectural pattern, not a single product — and it will evolve with
              the community. Digital Reasoning Thread is developed as an initiative under{" "}
              <a
                href="https://industrial-ai-network.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                AI² – Association for Industrial AI
              </a>
              . See the full narrative, the landscape of existing players, and how to get
              involved.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/landscape"
                className="text-sm font-medium text-primary hover:underline"
              >
                Startup landscape →
              </Link>
              <a
                href="https://vlarichev.github.io/digital-reasoning-thread/whitepaper.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline"
              >
                Whitepaper →
              </a>
              <a
                href="https://github.com/vlarichev/digital-reasoning-thread"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline"
              >
                Contribute on GitHub →
              </a>
            </div>
          </section>
        </article>
      </div>
    </main>
  )
}
