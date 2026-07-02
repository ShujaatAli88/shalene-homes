import Hero          from '../components/sections/Hero/Hero'
import Services      from '../components/sections/Services/Services'
import About         from '../components/sections/About/About'
import MarqueeStrip  from '../components/ui/MarqueeStrip/MarqueeStrip'
import Listings      from '../components/sections/Listings/Listings'
import Valuation     from '../components/sections/Valuation/Valuation'
import Testimonials  from '../components/sections/Testimonials/Testimonials'
import Contact       from '../components/sections/Contact/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <MarqueeStrip />
      <Listings />
      <Valuation />
      <Testimonials />
      <Contact />
    </>
  )
}
