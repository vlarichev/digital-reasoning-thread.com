import { Navbar } from "@/components/navbar"
import Link from "next/link"

export const metadata = {
  title: "Trademark & use — Digital Reasoning Thread",
  description:
    "Digital Reasoning Thread is a registered European trademark held to keep the term free for the community. Everyone is welcome to use, fork, and develop it.",
}

const TMDN_LINK =
  "https://www.tmdn.org/tmview/#/tmview/detail/EM500000019244395"

export default function TrademarkPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container px-4 sm:px-6 pt-28 pb-24 max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
          Trademark & use of the name
        </h1>
        <p className="text-muted-foreground mb-10">
          How the name &ldquo;Digital Reasoning Thread&rdquo; is protected and why
          everyone can use it.
        </p>

        <div className="space-y-8 text-muted-foreground text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Registered European trademark
            </h2>
            <p>
              &ldquo;Digital Reasoning Thread&rdquo; is registered as a European
              Union trademark (EU trade mark) for a period of 10 years. You can
              look up the registration in the EUIPO/TMDn database:{" "}
              <a
                href={TMDN_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                TMDn – EM500000019244395
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Why we registered it: keep it free for everyone
            </h2>
            <p>
              The mark was registered so that the term stays available to the
              community — not so that a single company or vendor can claim it.
              Our goal is that everyone can use &ldquo;Digital Reasoning
              Thread&rdquo;, fork the concept, adapt it, and develop it further.
              We do not want large players (e.g. Siemens, Bosch, Accenture, or
              others) to grab the term and lock it down. The registration
              protects the name from that kind of appropriation.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              You are welcome to use it
            </h2>
            <p>
              You may use the term &ldquo;Digital Reasoning Thread&rdquo; (and
              abbreviations like DRT) in a descriptive, fair way: in talks,
              papers, products, open-source projects, and community work. You may
              fork, extend, and build on the concept. We do not grant exclusive
              rights to any company. We ask that you do not suggest that you
              alone own or officially represent the term, and that you do not use
              it in a way that confuses the public about who stands behind the
              concept. Beyond that, use it to help the idea grow.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              In short
            </h2>
            <p>
              The trademark exists to keep &ldquo;Digital Reasoning Thread&rdquo;
              open and in the hands of the community. Use it, develop it, and
              help make industrial reasoning traceable and reusable for everyone.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Initiative
            </h2>
            <p>
              Digital Reasoning Thread is developed as an initiative under{" "}
              <a
                href="https://industrial-ai-network.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                AI² – Association for Industrial AI
              </a>
              , a global association connecting industry, academia, and technology
              leaders to advance Industrial AI.
            </p>
          </section>
        </div>

        <p className="mt-12 text-sm text-muted-foreground">
          <Link href="/" className="text-primary hover:underline">
            ← Return home
          </Link>
          {" · "}
          <Link href="/principles" className="text-primary hover:underline">
            Principles
          </Link>
          {" · "}
          <Link href="/terms" className="text-primary hover:underline">
            Terms of Use
          </Link>
        </p>
      </div>
    </main>
  )
}
