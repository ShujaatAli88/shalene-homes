import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar    from './components/layout/Navbar/Navbar'
import Footer    from './components/layout/Footer/Footer'
import ScrollToTop from './components/ui/ScrollToTop'

import Home              from './pages/Home'
import PortfolioPage     from './pages/PortfolioPage'
import NeighborhoodsPage from './pages/NeighborhoodsPage'
import AreaVibePage      from './pages/AreaVibePage'
import ListingsPage      from './pages/ListingsPage'
import ValuationPage     from './pages/ValuationPage'
import AboutPage         from './pages/AboutPage'
import TestimonialsPage  from './pages/TestimonialsPage'
import BlogPage          from './pages/BlogPage'
import ContactPage       from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"              element={<Home />} />
        <Route path="/portfolio"     element={<PortfolioPage />} />
        <Route path="/neighborhoods" element={<NeighborhoodsPage />} />
        <Route path="/area-vibes/:slug" element={<AreaVibePage />} />
        <Route path="/listings"      element={<ListingsPage />} />
        <Route path="/valuation"     element={<ValuationPage />} />
        <Route path="/about"         element={<AboutPage />} />
        <Route path="/testimonials"  element={<TestimonialsPage />} />
        <Route path="/blog"          element={<BlogPage />} />
        <Route path="/contact"       element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
