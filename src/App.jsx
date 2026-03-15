import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValueProps from './components/ValueProps'
import Benefits from './components/Benefits'
import BeforeAfter from './components/BeforeAfter'
import Process from './components/Process'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Packages from './components/Packages'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Hero />
        <ValueProps />
        <Benefits />
        <BeforeAfter />
        <Process />
        <Reviews />
        <FAQ />
        <Packages />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  )
}
