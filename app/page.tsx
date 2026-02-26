import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Authority from '@/components/Authority'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Manifesto from '@/components/Manifesto'
import About from '@/components/About'
import RightHand from '@/components/RightHand'
import CTAFinal from '@/components/CTAFinal'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <Authority /> */}
      <Services />
      <Projects />
      <Manifesto />
      <About />
      <RightHand />
      <CTAFinal />
      <Footer />
    </main>
  )
}
