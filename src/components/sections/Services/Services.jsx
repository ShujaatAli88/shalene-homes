import './Services.css'
import SectionHeader from '../../ui/SectionHeader'
import { Link } from 'react-router-dom'
import useScrollReveal from '../../../hooks/useScrollReveal'

const IMG = 'https://images.pexels.com/photos/19075389/pexels-photo-19075389.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80'

const SERVICES = [
  {
    id: 'buy',
    step: '01',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
    ),
    eyebrow: 'For Buyers',
    title: 'Buy with a Plan, Not Guesswork',
    body: "Palm Beach County's competitive market requires more than a search portal. I guide buyers through every municipality — from waterfront estates to family-friendly neighborhoods — with clear strategy and expert insight.",
    cta: 'Start Your Search',
    to: '/listings',
  },
  {
    id: 'sell',
    step: '02',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
    ),
    eyebrow: 'For Sellers',
    title: 'Positioned to Sell, Not Just Listed',
    body: 'Your property deserves more than a sign in the yard. Strategic pricing, professional photography, targeted digital marketing, and deep buyer-network access — all working to maximize your sale price.',
    cta: 'Get Your Value',
    to: '/valuation',
  },
  {
    id: 'process',
    step: '03',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
    ),
    eyebrow: 'My Process',
    title: 'A Process That Delivers Results',
    body: "From your initial consultation through closing day, you'll have clear expectations, consistent communication, and a dedicated advocate who treats your real estate goals as their own priority.",
    cta: 'Learn My Process',
    to: '/about',
  },
]

export default function Services() {
  const ref = useScrollReveal()

  return (
    <section
      className="services parallax"
      id="services"
      ref={ref}
      style={{ backgroundImage: `url('${IMG}')` }}
    >
      <div className="container">
        <div className="fade">
          <SectionHeader
            eyebrow="How I Serve You"
            title="A Strategic Approach to Every Transaction"
            subtitle="Whether you're buying your first home, selling a luxury property, or investing in Palm Beach County real estate, I bring a structured, results-driven process to every deal."
            light
          />
        </div>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <div key={s.id} className={`svc-card fade d${i}`}>
              <span className="svc-card__step" aria-hidden="true">{s.step}</span>
              <div className="svc-card__icon-wrap">
                <div className="svc-card__icon">{s.icon}</div>
              </div>
              <div className="svc-card__eyebrow">{s.eyebrow}</div>
              <h3 className="svc-card__title">{s.title}</h3>
              <p className="svc-card__body">{s.body}</p>
              <Link to={s.to} className="svc-card__cta">
                {s.cta}
                <span className="svc-card__cta-arrow">→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Connector line */}
        <div className="services__connector" aria-hidden="true">
          <span className="services__connector-line" />
          <span className="services__connector-dot" />
          <span className="services__connector-dot" />
          <span className="services__connector-dot" />
          <span className="services__connector-line" />
        </div>
      </div>
    </section>
  )
}
