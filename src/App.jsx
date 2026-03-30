import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import Stats from './components/Stats/Stats'
import Ticker from './components/Ticker/Ticker'
import Products from './components/Products/Products'
import Capabilities from './components/Capabilities/Capabilities'
import Industries from './components/Industries/Industries'
import Process from './components/Process/Process'
import CTABanner from './components/CTABanner/CTABanner'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { useScrollFadeIn } from './hooks/useScrollFadeIn'

export default function App() {
  useScrollFadeIn()

  return (
    <>
      <Navigation />
      <Hero />
      <Stats />
      <Ticker />
      <Products />
      <Capabilities />
      <Industries />
      <Process />
      <CTABanner />
      <Contact />
      <Footer />
    </>
  )
}
