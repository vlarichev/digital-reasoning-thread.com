import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { DomainTerms } from "@/components/domain-terms"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <DomainTerms />
    </main>
  )
}
