import './Valuation.css'
import { Link } from 'react-router-dom'

export default function Valuation() {
  return (
    <section className="valuation" id="valuation">
      {/* Fullscreen looping background video */}
      <video className="valuation__video" autoPlay muted loop playsInline>
        <source src="/home_tour.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="valuation__overlay" />

      <div className="container">
        <div className="valuation__inner">
          <div className="eyebrow eyebrow--light">Know Your Number</div>
          <h2 className="section-title section-title--white">
            What Is Your Home Worth Today?
          </h2>
          <p>
            Palm Beach County's market moves fast. Get an accurate, data-driven valuation based on
            current comparable sales, market trends, and neighborhood-specific insights —
            no obligation, no pressure.
          </p>
          <div className="valuation__btns">
            <Link to="/valuation" className="btn btn--primary">Request Free Valuation</Link>
            <Link to="/contact" className="btn btn--outline">Talk to Shalene</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
