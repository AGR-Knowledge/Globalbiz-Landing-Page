import Header from "@/components/header"
import Hero from "@/components/hero"
import EditionsSection from "@/components/editions-section"
import SpeedSection from "@/components/speed-section"
import PipelineSection from "@/components/pipeline-section"
import ComparisonSection from "@/components/comparison-section"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"
import FloatingButtons from "@/components/floating-buttons"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <EditionsSection />
      <SpeedSection />
      <PipelineSection />
      <ComparisonSection />
      <FAQSection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
