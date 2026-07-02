import './Contact.css'
import { Link } from 'react-router-dom'
import { agent } from '../../../data/agent'
import useScrollReveal from '../../../hooks/useScrollReveal'

const PROPS = [
  { icon: '⚡', label: 'Response within 24 hours' },
  { icon: '🔒', label: '100% confidential & no obligation' },
  { icon: '📍', label: 'Serving all of Palm Beach County' },
]

export default function Contact() {
  const ref = useScrollReveal()

  return (
    <section
      className="contact parallax"
      id="contact"
      ref={ref}
      style={{ backgroundImage: "url('https://images.pexels.com/photos/29123790/pexels-photo-29123790.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80')" }}
    >
      <div className="contact__inner fade">

        {/* Agent photo */}
        <div className="contact__avatar-wrap">
          <img src={agent.photo} alt={agent.name} className="contact__avatar" />
          <div className="contact__avatar-ring" />
        </div>

        {/* Eyebrow */}
        <div className="contact__cta-eyebrow">
          <span className="contact__eyebrow-rule" />
          <span>Ready to make a move?</span>
          <span className="contact__eyebrow-rule" />
        </div>

        {/* Headline */}
        <h2 className="contact__cta-heading">
          Let's Talk<br />Real Estate
        </h2>

        {/* Sub */}
        <p className="contact__cta-sub">
          Whether you're buying, selling, or simply curious about your home's value —
          Shalene is ready to guide you every step of the way.
        </p>

        {/* Value props */}
        <div className="contact__props">
          {PROPS.map(p => (
            <div key={p.label} className="contact__prop">
              <span className="contact__prop-icon">{p.icon}</span>
              <span className="contact__prop-label">{p.label}</span>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <Link to="/contact" className="contact__cta-btn">
          <span>Let's Connect</span>
          <span className="contact__cta-arrow">→</span>
        </Link>

        {/* Agent name tag */}
        <p className="contact__agent-tag">
          {agent.name} &nbsp;·&nbsp; {agent.title} &nbsp;·&nbsp; {agent.brokerage}
        </p>

      </div>
    </section>
  )
}
