import { Navbar } from "@/components/navbar"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy — Digital Reasoning Thread",
  description: "Privacy policy for the Digital Reasoning Thread website.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container px-4 sm:px-6 pt-28 pb-24 max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <div className="space-y-8 text-muted-foreground text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">1. Introduction</h2>
            <p>
              Digital Reasoning Thread (“we”, “our”, or “the site”) is an informational website
              about the Digital Reasoning Thread (DRT) concept and related resources. This
              privacy policy explains what data we may collect when you visit this website,
              how we use it, and your rights regarding that data. We do not sell your personal
              data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">2. Data we collect</h2>
            <p>
              This site is primarily static and does not require you to create an account or
              submit personal information to view content. We may collect:
            </p>
            <ul className="list-disc list-inside pl-2 space-y-1 mt-2">
              <li>
                <strong className="text-foreground">Usage data:</strong> When you visit, our
                hosting or analytics providers may log your IP address, browser type, device
                type, referring URL, and pages visited. This is standard for operating and
                improving websites.
              </li>
              <li>
                <strong className="text-foreground">Cookies and similar technologies:</strong> If
                we use analytics (e.g. to understand traffic), those services may set cookies
                or use local storage. You can control cookies via your browser settings.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">3. How we use data</h2>
            <p>
              We use the data described above to operate the website, ensure security,
              understand how the site is used (e.g. which pages are popular), and improve
              content and performance. We do not use your data for advertising or to build
              profiles for third-party marketing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">4. Third parties</h2>
            <p>
              The site may be hosted and served by third-party providers (e.g. Vercel or
              similar). Those providers process requests and may log technical data as part
              of their service. If we use analytics (e.g. Vercel Analytics, or a
              privacy-respecting alternative), their use of data will be governed by their
              own policies. We may link to external sites (e.g. GitHub, LinkedIn,
              whitepaper hosts); those sites have their own privacy policies and we do not
              control their practices.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">5. Your rights</h2>
            <p>
              Depending on where you live (e.g. EU/EEA, UK, California), you may have
              rights to access, correct, delete, or restrict processing of your personal
              data, or to object to processing. To exercise these rights, please contact us
              using the details in the footer or on the Imprint page. You may also have the
              right to lodge a complaint with a supervisory authority.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">6. Retention</h2>
            <p>
              We retain logs and technical data only as long as necessary for operation,
              security, and legitimate analysis, or as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">7. Changes</h2>
            <p>
              We may update this privacy policy from time to time. The “Last updated” date
              at the top will be revised when we do. Continued use of the site after
              changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">8. Contact</h2>
            <p>
              For privacy-related questions or requests, please contact us via the links
              provided in the site footer or on the{" "}
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
