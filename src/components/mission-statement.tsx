import { cn } from "@/lib/utils"

export function MissionStatement() {
  return (
    <div className="container px-4 py-12 md:py-16">
      <h2 className={cn(
        "text-2xl md:text-3xl lg:text-4xl font-bold text-balance text-center max-w-4xl mx-auto",
        "bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
      )}>
        We introduce a new architectural layer that transforms fragmented decisions into a structured, auditable reasoning asset across the industrial value chain.
      </h2>
    </div>
  )
}
