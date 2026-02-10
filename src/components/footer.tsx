import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

const linkClass =
  "text-sm text-muted-foreground hover:text-foreground transition-colors"

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string; external?: boolean }[]
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
        {title}
      </span>
      <ul className="flex flex-col gap-2">
        {links.map(({ label, href, external }) =>
          external ? (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {label}
              </a>
            </li>
          ) : (
            <li key={href}>
              <Link href={href} className={linkClass}>
                {label}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container px-4 sm:px-6 py-10 md:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-10">
          <FooterColumn
            title="Site"
            links={[
              { label: "Home", href: "/" },
              { label: "Principles", href: "/principles" },
              { label: "Landscape", href: "/landscape" },
            ]}
          />
          <FooterColumn
            title="Resources"
            links={[
              {
                label: "AI² – Industrial AI Association",
                href: "https://industrial-ai-network.com/",
                external: true,
              },
              {
                label: "Overview",
                href: "https://vlarichev.github.io/digital-reasoning-thread/",
                external: true,
              },
              {
                label: "Whitepaper",
                href: "https://vlarichev.github.io/digital-reasoning-thread/whitepaper.html",
                external: true,
              },
              {
                label: "GitHub",
                href: "https://github.com/vlarichev/digital-reasoning-thread",
                external: true,
              },
            ]}
          />
          <FooterColumn
            title="Legal"
            links={[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Use", href: "/terms" },
              { label: "Trademark & use", href: "/trademark" },
              { label: "Imprint", href: "/imprint" },
            ]}
          />
          <div className="col-span-2 flex flex-col gap-3">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Contact
            </span>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a
                href="https://www.linkedin.com/in/vladlarichev/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} flex items-center gap-1.5`}
              >
                <Linkedin className="h-4 w-4 shrink-0" />
                Vlad Larichev
              </a>
              <a
                href="https://www.linkedin.com/in/dirk-molitor/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} flex items-center gap-1.5`}
              >
                <Linkedin className="h-4 w-4 shrink-0" />
                Dr. Dirk Molitor
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Digital Reasoning Thread
            {" · "}
            <a
              href="https://industrial-ai-network.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              An initiative of AI²
            </a>
          </div>
          <a
            href="https://github.com/vlarichev/digital-reasoning-thread"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
