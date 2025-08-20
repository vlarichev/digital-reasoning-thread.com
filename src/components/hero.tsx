'use client'

import { Button } from "@/components/ui/button"
import { InteractiveBackground } from "@/components/interactive-background"

export function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <InteractiveBackground />
      
      <div className="container relative z-10 min-h-screen flex flex-col justify-end pb-[10vh] px-6 md:px-8">
        <div className="max-w-[90%] md:max-w-[80%] lg:max-w-[70%] space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
            DIGITAL <span className="bg-clip-text text-transparent bg-gradient-to-r from-[oklch(0.6132_0.2294_291.7437)] to-[oklch(0.7857_0.1153_246.6596)]">REASONING</span> THREAD.
          </h1>
          <div>
            <Button size="lg" variant="default" className="text-base md:text-lg">
              Explore the architecture
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
