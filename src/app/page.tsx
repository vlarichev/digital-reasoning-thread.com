import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { InteractiveBackground } from "@/components/interactive-background"
import { DomainTerms } from "@/components/domain-terms"
import { MissionStatement } from "@/components/mission-statement"
import { LandscapeBlock } from "@/components/landscape-block"
import { FAQ } from "@/components/faq"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
 
        <Hero />
        <MissionStatement />

        <DomainTerms />
        <LandscapeBlock />
        <FAQ />
    </main>
  )
}
