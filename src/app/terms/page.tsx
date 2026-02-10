import { Navbar } from "@/components/navbar"
import Link from "next/link"

export const metadata = {
  title: "Terms of Use — Digital Reasoning Thread",
  description: "Terms of use for the Digital Reasoning Thread website.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container px-4 sm:px-6 pt-28 pb-24 max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
          Terms of Use
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <div className="space-y-8 text-muted-foreground text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">1. Acceptance</h2>
            <p>
              By accessing or using the Digital Reasoning Thread website
              (digital-reasoning-thread.com and related paths), you agree to these Terms
              of Use. If you do not agree, please do not use the site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">2. Use of the site</h2>
            <p>
              This site provides informational content about the Digital Reasoning Thread
              (DRT) concept, including principles, landscape, and links to external
              resources. You may view and share the content for personal, educational, and
              non-commercial use in line with these terms. You may not use the site to
              distribute malware, attempt to gain unauthorized access to our or others’
              systems, scrape or harvest data in a way that harms the service, or use the
              site for any illegal or harmful purpose.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">3. Intellectual property</h2>
            <p>
              The text, layout, and original materials on this site are offered for
              reference and discussion. The DRT concept and related materials may be
              subject to specific licenses (e.g. CC-BY) as stated on the relevant
              documents or repositories. External content (e.g. whitepapers, GitHub
              repositories) is governed by their respective terms and licenses. If you
              believe your work has been used here in a way that infringes your rights,
              please contact us so we can address it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">4. Trademark</h2>
            <p>
              &ldquo;Digital Reasoning Thread&rdquo; (and the abbreviation DRT) is a
              registered European Union trademark. The mark is held to keep the term
              available for the community: anyone may use it, fork the concept, and
              develop it further; no exclusive rights are granted to any company or
              vendor. For the full policy on use of the name, see our{" "}
              <Link href="/trademark" className="text-primary hover:underline">
                Trademark & use
              </Link>{" "}
              page.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">5. No professional advice</h2>
            <p>
              The content on this site is for general information and conceptual
              discussion only. It does not constitute technical, legal, regulatory, or
              business advice. You should seek appropriate professional advice for
              decisions that affect your operations, compliance, or legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">6. Disclaimer of warranties</h2>
            <p>
              The site and its content are provided “as is”. We do not warrant that the
              site will be uninterrupted, error-free, or free of harmful components. We
              disclaim all warranties to the fullest extent permitted by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">7. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, we and our contributors shall not be
              liable for any indirect, incidental, special, consequential, or punitive
              damages, or any loss of data, revenue, or goodwill, arising from your use
              of or inability to use the site or its content. Our total liability shall
              not exceed the amount (if any) you paid to access the site in the twelve
              months preceding the claim (and in most cases that amount is zero).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">8. Third-party links</h2>
            <p>
              The site may link to third-party websites (e.g. GitHub, LinkedIn, external
              whitepapers). We do not control and are not responsible for their content,
              privacy practices, or terms. Linking does not imply endorsement. Use
              third-party sites at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">9. Governing law</h2>
            <p>
              These terms are governed by the laws of Germany. Any disputes shall be
              subject to the exclusive jurisdiction of the courts of Germany, unless
              mandatory consumer protection laws in your country require otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">10. Changes</h2>
            <p>
              We may update these Terms of Use from time to time. The “Last updated” date
              at the top will be revised when we do. Continued use of the site after
              changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">11. Contact</h2>
            <p>
              For questions about these terms, please contact us via the links in the
              site footer or on the{" "}
              <Link href="/imprint" className="text-primary hover:underline">
                Imprint
              </Link>{" "}
              page.
            </p>
          </section>
        </div>

        <p className="mt-12 text-sm text-muted-foreground">
          <Link href="/" className="text-primary hover:underline">
            ← Return home
          </Link>
        </p>
      </div>
    </main>
  )
}
