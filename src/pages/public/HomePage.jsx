import Hero from '@/components/home/Hero'
import HowItWorks from '@/components/home/HowItWorks'
import ServicesPreview from '@/components/home/ServicesPreview'
import PricingPreview from '@/components/home/PricingPreview'
import Features from '@/components/home/Features'
import CTA from '@/components/home/CTA'

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <ServicesPreview />
      <PricingPreview />
      <Features />
      <CTA />
    </main>
  )
}

export default HomePage