import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function LandscapeBlock() {
  return (
    <section className="container px-4 py-12 md:py-16">
      <div
        className={cn(
          "max-w-3xl mx-auto rounded-xl border border-border bg-muted/20 p-6 md:p-8",
          "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        )}
      >
        <div className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">
            Startup landscape
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Industrial AI today spans seven layers — from sensing and edge intelligence up to
            governance and explainability. We mapped 30+ companies across this stack. The
            landscape shows who plays where, who bridges layers, and where the critical gap
            remains: no one yet owns industrial reasoning as a first-class, vertical thread.
          </p>
        </div>
        <div className="shrink-0">
          <Button asChild size="lg" variant="default">
            <Link href="/landscape">Explore the landscape</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
