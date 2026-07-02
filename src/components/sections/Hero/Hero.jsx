import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  useEffect(() => {
    const items = document.querySelectorAll('.hero__fade')
    items.forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 200 + i * 200)
    })
  }, [])

  const scrollDown = () => {
    const next = document.querySelector('#hero + *')
    if (next) next.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      {/* Fullscreen background video */}
      <video className="hero__video" autoPlay muted loop playsInline>
        <source src="/intro_video.mp4" type="video/mp4" />
      </video>

      {/* Cinematic vignette — centre stays bright */}
      <div className="hero__overlay" />

      <div className="hero__content">
        {/* Gold accent — lines + label */}
        <div className="hero__accent hero__fade">
          <span className="hero__accent-line" />
          <span className="hero__accent-label">Palm Beach County, Florida</span>
          <span className="hero__accent-line hero__accent-line--r" />
        </div>

        <h1 className="hero__title hero__fade">
          Palm Beach<br />
          Real Estate
          <span className="hero__title-accent">Shalene KJ Brostek</span>
        </h1>

        <p className="hero__sub hero__fade">
          Expert guidance for buyers and sellers across Palm Beach County's most
          sought-after communities. Trusted. Local. Results-driven.
        </p>

        <div className="hero__btns hero__fade">
          <Link to="/listings"  className="hero__btn hero__btn--outline">Search Homes</Link>
          <Link to="/valuation" className="hero__btn hero__btn--filled">Get a Free Valuation</Link>
        </div>
      </div>

      {/* Animated scroll hint */}
      <button className="hero__scroll" onClick={scrollDown} aria-label="Scroll down">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-dot" />
        </div>
        <span>Scroll</span>
      </button>
    </section>
  )
}
