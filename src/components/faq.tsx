'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section className="container px-4 py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        
      <Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>What is a Digital Reasoning Thread?</AccordionTrigger>
    <AccordionContent>
      The Digital Reasoning Thread (DRT) is an architectural layer that records and connects the logic behind industrial decisions.
      It links goals, context, assumptions, constraints, evidence, decisions, actions, and outcomes so teams and agents can understand why something happened and reuse that logic later.
      In short, it turns decision-making into a managed, queryable asset.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2">
    <AccordionTrigger>How does it integrate with existing systems?</AccordionTrigger>
    <AccordionContent>
      DRT complements PLM, MES, ERP, CMMS, UNS, and process mining rather than replacing them.
      Integration is protocol-first: UNS or OPC UA for telemetry and structure, MQTT or Kafka for events, MCP for tool skills, A2A for agent-to-agent coordination, and REST or gRPC where needed.
      Source systems remain systems of record for data, while DRT is the system of record for reasoning.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-3">
    <AccordionTrigger>What problems does it solve?</AccordionTrigger>
    <AccordionContent>
      It addresses fragmented decision-making, loss of context at handovers, inconsistent AI outputs across tools, and audit gaps.
      DRT preserves the why behind decisions, reduces duplicated logic, and improves reliability by linking every decision to its evidence and constraints.
      This improves reuse, speeds root-cause analysis, and supports compliance.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-4">
    <AccordionTrigger>Who benefits from this architecture?</AccordionTrigger>
    <AccordionContent>
      Engineers, manufacturing leads, planners, operators, quality, maintenance, and supply chain teams benefit directly.
      Leadership, compliance, and IT gain from consistent decisions, better auditability, and portable reasoning artifacts that survive tool changes.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-5">
    <AccordionTrigger>How is DRT different from the digital thread?</AccordionTrigger>
    <AccordionContent>
      The digital thread focuses on moving and aligning data across the lifecycle.
      DRT adds the missing part - the reasoning that used the data to reach a decision.
      With DRT you can trace not only what changed but why, under which constraints, and with which evidence, then reuse that logic elsewhere.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-6">
    <AccordionTrigger>Why now?</AccordionTrigger>
    <AccordionContent>
      Copilots and agents are spreading across a fragmented landscape.
      Without a centralized reasoning instance, their outputs stay local, hard to audit, and not reusable across domains.
      DRT provides shared context, governance, and portability so AI-driven decisions scale beyond single tools.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-7">
    <AccordionTrigger>What does DRT store?</AccordionTrigger>
    <AccordionContent>
      DRT stores reasoning artifacts and links back to sources, not full raw datasets.
      Typical objects include goals, context, assumptions, constraints, evidence references, inferences, decisions, actions, and outcomes.
      This keeps storage lean while preserving full traceability and replay.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-8">
    <AccordionTrigger>Is it centralized or federated?</AccordionTrigger>
    <AccordionContent>
      Logically centralized - one thread of truth for reasoning artifacts.
      Physically federated - instances can run at the edge, in a line or plant, or in the cloud based on latency, privacy, and cost.
      Instances sync through versioned contracts rather than custom glue code.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-9">
    <AccordionTrigger>What are typical use cases?</AccordionTrigger>
    <AccordionContent>
      Three common starters: 1) Engineering-to-manufacturing handover with constraints carried into MES. 2) Predictive maintenance coordinated with production scheduling to pick the best downtime window. 3) Supply chain exception management with auditable decisions on allocations and penalties.
      Each case benefits from traceability and reuse of logic across lines and plants.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-10">
    <AccordionTrigger>How do we adopt it without big-bang change?</AccordionTrigger>
    <AccordionContent>
      Start in read-only shadow mode to capture reasoning alongside current processes.
      Introduce human approvals for medium-risk actions, then move to closed-loop control inside defined safety envelopes.
      Workload by workload, you build a reusable library of reasoning artifacts.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-11">
    <AccordionTrigger>How do we measure success?</AccordionTrigger>
    <AccordionContent>
      Track a small set of KPIs: decision consistency across similar contexts, decision latency from event to action, audit completeness, human intervention rate, and regret rate after deployment.
      These metrics show both reliability and operational value and help tune approval thresholds over time.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-12">
    <AccordionTrigger>What about security, privacy, and governance?</AccordionTrigger>
    <AccordionContent>
      DRT is designed for least privilege, data minimization, encryption in transit and at rest, and RBAC.
      Policies are encoded as code, and every decision includes provenance, approvals, and safety envelopes.
      This reduces operational risk and makes audits straightforward.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-13">
    <AccordionTrigger>What is the vendor lock-in risk?</AccordionTrigger>
    <AccordionContent>
      The approach is neutral by design: open protocols, versioned schemas, and portable reasoning artifacts.
      Skills and agents communicate through contracts so you can replace tools without rewriting the logic layer.
      Your logic stays yours even if platforms change.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-14">
    <AccordionTrigger>Who is behind this and how can I contribute?</AccordionTrigger>
    <AccordionContent>
      DRT is led by an independent group of researchers and developers as a non-profit initiative.
      We share the concept to help industry build safer and more transparent AI systems.
      Contributions are welcome - connect via LinkedIn or open issues and pull requests on GitHub. If you want to pilot the idea, we are happy to collaborate and document results openly.
    </AccordionContent>
  </AccordionItem>
</Accordion>
        
      </div>
    </section>
  )
}
