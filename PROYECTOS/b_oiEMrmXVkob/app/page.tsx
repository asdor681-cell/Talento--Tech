import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProperties } from "@/components/featured-properties"
import { HowItWorks } from "@/components/how-it-works"
import { TrustSection } from "@/components/trust-section"
import { OpportunitiesSection } from "@/components/opportunities-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedProperties />
        <HowItWorks />
        <OpportunitiesSection />
        <TrustSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
