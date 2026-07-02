import { useState } from 'react'
import PageHero from '../components/ui/PageHero'
import './ValuationPage.css'

const HERO = 'https://images.unsplash.com/photo-1582407947304-fd86f28320c9?w=1800&q=85'

const STEPS = [
  { num: '01', title: 'Submit Your Property Details', desc: 'Fill out the quick form below with your property address and basic information.' },
  { num: '02', title: 'Market Analysis', desc: 'Shalene personally reviews comparable sales, active listings, and market trends in your area.' },
  { num: '03', title: 'Receive Your Report', desc: 'Within 24 hours you\'ll receive a detailed Comparative Market Analysis (CMA) report.' },
  { num: '04', title: 'Strategy Consultation', desc: 'Schedule a no-obligation call to discuss your goals and a customized selling strategy.' },
]

export default function ValuationPage() {
  const [form, setForm] = useState({ address: '', city: '', beds: '', baths: '', sqft: '', name: '', email: '', phone: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        image={HERO}
        eyebrow="Home Valuation"
        title="What Is Your Home Worth?"
        subtitle="Get an accurate, data-driven valuation from a Palm Beach County expert — at no cost to you."
        overlay="left"
      />

      <section className="vp-steps-section">
        <div className="container">
          <div className="vp-steps">
            {STEPS.map(s => (
              <div key={s.num} className="vp-step">
                <div className="vp-step__num">{s.num}</div>
                <h3 className="vp-step__title">{s.title}</h3>
                <p className="vp-step__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vp-form-section parallax" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600&q=80)' }}>
        <div className="container">
          {sent ? (
            <div className="vp-success">
              <div className="vp-success__icon">✓</div>
              <h2>Request Received!</h2>
              <p>Shalene will review your property and send your complimentary CMA within 24 hours.</p>
            </div>
          ) : (
            <div className="vp-form-wrap">
              <div className="vp-form-header">
                <div className="eyebrow">Free CMA Request</div>
                <h2 className="section-title">Get Your Valuation</h2>
                <p className="section-sub">No obligation. No pressure. Just expert insight from a trusted local professional.</p>
              </div>
              <form className="vp-form" onSubmit={handleSubmit}>
                <div className="vp-form__row">
                  <label>Property Address *<input name="address" value={form.address} onChange={handleChange} placeholder="123 Ocean Blvd" required /></label>
                  <label>City *<input name="city" value={form.city} onChange={handleChange} placeholder="Palm Beach" required /></label>
                </div>
                <div className="vp-form__row vp-form__row--3">
                  <label>Bedrooms<input name="beds" value={form.beds} onChange={handleChange} placeholder="4" type="number" min="0" /></label>
                  <label>Bathrooms<input name="baths" value={form.baths} onChange={handleChange} placeholder="3" type="number" min="0" /></label>
                  <label>Sq Footage<input name="sqft" value={form.sqft} onChange={handleChange} placeholder="2,800" /></label>
                </div>
                <div className="vp-form__divider" />
                <div className="vp-form__row">
                  <label>Your Name *<input name="name" value={form.name} onChange={handleChange} placeholder="John Smith" required /></label>
                  <label>Email *<input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required /></label>
                </div>
                <label className="vp-form__full">Phone<input name="phone" value={form.phone} onChange={handleChange} placeholder="(561) 000-0000" /></label>
                <button type="submit" className="btn btn--primary btn--lg vp-form__submit">Request My Free Valuation</button>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
