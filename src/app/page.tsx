import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ContentSection } from "@/components/content-section"
import { LivingSpacesSection } from "@/components/living-spaces-section"
import { DesignSection } from "@/components/design-section"
import { Page6 } from "@/components/page-6"
import { Page7 } from "@/components/page-7"
import { Page8 } from "@/components/page-8"
import { Page9 } from "@/components/page-9"
import { Page11 } from "@/components/page-11"
import { Page13 } from "@/components/page-13"
import { Page14 } from "@/components/page-14"
import { Footer } from "@/components/footer"
import { Page5 } from "@/components/page-5"
import { Page10 } from "@/components/page-10"
import { Page12 } from "@/components/page-12"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ContentSection />
      <DesignSection />
      <LivingSpacesSection />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
      <Page9 />
      <Page10 />
      <Page11 />
      <Page12 />
      <Page13 />
      <Page14 />
      <Footer />
    </main>
  )
}

