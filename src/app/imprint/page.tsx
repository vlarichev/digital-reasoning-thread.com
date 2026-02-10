import { Navbar } from "@/components/navbar"
import Link from "next/link"

export const metadata = {
  title: "Imprint — Digital Reasoning Thread",
  description: "Imprint and legal information for the Digital Reasoning Thread.",
}

export default function ImprintPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container px-4 sm:px-6 pt-28 pb-24 max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
          Imprint
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Legal information as required under German and European law (Impressum).
        </p>

        <div className="space-y-8 text-muted-foreground text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">Responsible for content</h2>
            <p>
              The Digital Reasoning Thread website is maintained by the individuals and
              contributors named below. Contact for the site and the DRT concept:
            </p>
            <ul className="list-none mt-3 space-y-2">
              <li>
                <strong className="text-foreground">Vlad Larichev</strong>
                <br />
                <a
                  href="https://www.linkedin.com/in/vladlarichev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <strong className="text-foreground">Dr. Dirk Molitor</strong>
                <br />
                <a
                  href="https://www.linkedin.com/in/dirk-molitor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
            <p className="mt-3">
              For formal correspondence (e.g. legal notices, privacy requests), please
              use the contact channels linked in the footer or reach out via the
              above profiles. If you need a postal address or email for legal purposes,
              please request it via LinkedIn message.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">Hosting & technical operation</h2>
            <p>
              This website may be hosted and served by third-party providers (e.g. Vercel,
              Inc. or similar). Their terms and privacy policies apply to the technical
              provision of the service. We do not operate the underlying infrastructure
              ourselves.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">Liability for content</h2>
            <p>
              We take care to ensure that the content on this site is accurate and
              up to date. Nevertheless, we do not guarantee completeness or correctness.
              As a service provider we are responsible for our own content on these pages
              under general law; we are not obliged to monitor third-party information
              transmitted or stored, nor to investigate circumstances that indicate
              illegal activity. Obligations to remove or block the use of information
              under general laws remain unaffected. Liability in this regard is only
              possible from the time of knowledge of a concrete legal violation. Upon
              becoming aware of such violations, we will remove the relevant content
              promptly.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">Liability for links</h2>
            <p>
              This site contains links to external third-party websites. We have no
              influence over their content and do not adopt it as our own. The respective
              provider is always responsible for the content of linked pages. The linked
              pages were checked for obvious legal violations at the time of linking;
              unlawful content was not apparent at that time. Permanent monitoring of
              linked pages without concrete evidence of a violation is not reasonable.
              Upon becoming aware of legal violations, we will remove the relevant
              links promptly.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">Copyright</h2>
            <p>
              The content and works created by the site operators on these pages are
              subject to copyright. Reproduction, editing, distribution, and any use
              outside the limits of copyright law require the consent of the respective
              author or creator. Downloads and copies of this site are permitted only for
              private, non-commercial use. Where content on this site was not created by
              the operator, the copyright of third parties is respected; third-party
              content is marked as such. If you become aware of a copyright infringement,
              please inform us so we can remove the content.
            </p>
          </section>
        </div>

        <p className="mt-12 text-sm text-muted-foreground">
          <Link href="/" className="text-primary hover:underline">
            ← Return home
          </Link>
          {" · "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          {" · "}
          <Link href="/terms" className="text-primary hover:underline">
            Terms of Use
          </Link>
          {" · "}
          <Link href="/trademark" className="text-primary hover:underline">
            Trademark & use
          </Link>
        </p>
      </div>
    </main>
  )
}
