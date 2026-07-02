import { useState } from 'react'
import { agent } from '../data/agent'
import SocialIcons from '../components/ui/SocialIcons'
import './ContactPage.css'

const ICONS = {
  buy: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6L4 18h4v16h10v-9h4v9h10V18h4L20 6z" fill="#1c2940" fillOpacity=".12"/>
      <path d="M20 6L4 18h4v16h10v-9h4v9h10V18h4L20 6z" stroke="#1c2940" strokeWidth="1.8" strokeLinejoin="round"/>
      <rect x="16" y="27" width="8" height="7" rx="1" fill="#00C4CC" opacity=".9"/>
      <path d="M14 22h12" stroke="#00C4CC" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  sell: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="12" width="20" height="18" rx="2" fill="#1c2940" fillOpacity=".10" stroke="#1c2940" strokeWidth="1.8"/>
      <path d="M26 18h5l3 3-3 3h-5" stroke="#1c2940" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M10 18h10M10 23h7" stroke="#00C4CC" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="16" cy="10" r="3" fill="#00C4CC" opacity=".8"/>
    </svg>
  ),
  both: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 8L6 14h3v9h10V14h3L14 8z" fill="#1c2940" fillOpacity=".12" stroke="#1c2940" strokeWidth="1.7" strokeLinejoin="round"/>
      <path d="M26 18l8 6h-3v9H21v-9h-3l8-6z" fill="#00C4CC" fillOpacity=".18" stroke="#00C4CC" strokeWidth="1.7" strokeLinejoin="round"/>
    </svg>
  ),
  value: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="11" fill="#1c2940" fillOpacity=".08" stroke="#1c2940" strokeWidth="1.8"/>
      <path d="M12 22l4-5 4 3 4-6" stroke="#00C4CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26 26l6 6" stroke="#1c2940" strokeWidth="2.2" strokeLinecap="round"/>
      <circle cx="29" cy="29" r="1.5" fill="#00C4CC"/>
    </svg>
  ),
  invest: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="22" width="6" height="12" rx="1.5" fill="#1c2940" fillOpacity=".80"/>
      <rect x="13" y="16" width="6" height="18" rx="1.5" fill="#1c2940" fillOpacity=".55"/>
      <rect x="21" y="10" width="6" height="24" rx="1.5" fill="#00C4CC" opacity=".85"/>
      <path d="M8 18l8-6 8 4 8-8" stroke="#00C4CC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="32" cy="8" r="2.5" fill="#00C4CC"/>
    </svg>
  ),
  relocate: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 5C14.48 5 10 9.48 10 15c0 8 10 20 10 20s10-12 10-20c0-5.52-4.48-10-10-10z" fill="#1c2940" fillOpacity=".10" stroke="#1c2940" strokeWidth="1.8"/>
      <circle cx="20" cy="15" r="4" fill="#00C4CC" opacity=".9"/>
      <path d="M6 36c3-2 6-3 14-3s11 1 14 3" stroke="#1c2940" strokeWidth="1.5" strokeLinecap="round" opacity=".3"/>
    </svg>
  ),
}

const INTERESTS = [
  { icon: ICONS.buy,      label: 'Buying a Home' },
  { icon: ICONS.sell,     label: 'Selling My Home' },
  { icon: ICONS.both,     label: 'Buying & Selling' },
  { icon: ICONS.value,    label: 'Home Valuation' },
  { icon: ICONS.invest,   label: 'Investment Property' },
  { icon: ICONS.relocate, label: 'Relocation' },
]

const TOTAL_STEPS = 3

export default function ContactPage() {
  const [step, setStep]         = useState(1)
  const [interest, setInterest] = useState('')
  const [form, setForm]         = useState({ first: '', last: '', email: '', phone: '', message: '' })
  const [sent, setSent]         = useState(false)
  const [direction, setDir]     = useState('forward')

  const go = (next) => {
    setDir(next > step ? 'forward' : 'back')
    setStep(next)
  }

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="cp-page">

      {/* ── LEFT: Editorial dark panel ──────────────────────── */}
      <div className="cp-left">
        <div className="cp-left__watermark">CONNECT</div>

        <div className="cp-left__photo-wrap">
          <img src={agent.photo} alt={agent.name} className="cp-left__photo" />
          <div className="cp-left__photo-fade" />
        </div>

        <div className="cp-left__content">
          <div className="cp-left__eyebrow">
            <span className="cp-left__rule" />
            <span>Your Agent</span>
          </div>
          <h2 className="cp-left__name">{agent.name}</h2>
          <p className="cp-left__title">{agent.title} · {agent.brokerage}</p>

          <div className="cp-left__divider" />

          <div className="cp-left__contacts">
            <a href={`tel:${agent.phoneRaw}`} className="cp-left__contact">
              <span className="cp-left__contact-icon">
                <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              </span>
              <span>{agent.phone}</span>
            </a>
            <a href={`mailto:${agent.email}`} className="cp-left__contact">
              <span className="cp-left__contact-icon">
                <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </span>
              <span>{agent.email}</span>
            </a>
            <div className="cp-left__contact">
              <span className="cp-left__contact-icon">
                <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </span>
              <span>{agent.address.street}, {agent.address.city} {agent.address.state}</span>
            </div>
          </div>

          <div className="cp-left__social">
            <SocialIcons links={agent.social} />
          </div>
        </div>
      </div>

      {/* ── RIGHT: Multi-step form ───────────────────────────── */}
      <div className="cp-right">
        {sent ? (

          <div className="cp-success">
            <div className="cp-success__ring">
              <div className="cp-success__check">✓</div>
            </div>
            <h2 className="cp-success__title">Message Sent!</h2>
            <p className="cp-success__sub">
              {agent.name.split(' ')[0]} personally reviews every inquiry and will be
              in touch within 24 hours.
            </p>
            <button className="cp-back-btn" onClick={() => { setSent(false); setStep(1); setInterest(''); setForm({ first:'', last:'', email:'', phone:'', message:'' }) }}>
              Send Another Message
            </button>
          </div>

        ) : (
          <>
            {/* Progress bar */}
            <div className="cp-progress">
              {Array.from({ length: TOTAL_STEPS }, (_, i) => (
                <div key={i} className={`cp-progress__dot ${i + 1 <= step ? 'cp-progress__dot--on' : ''}`} />
              ))}
              <div className="cp-progress__bar">
                <div className="cp-progress__fill" style={{ width: `${((step - 1) / (TOTAL_STEPS - 1)) * 100}%` }} />
              </div>
            </div>

            {/* Steps container — steps stack here only, not over progress bar */}
            <div className="cp-steps-wrap">

            {/* ── STEP 1: Interest ── */}
            <div className={`cp-step ${step === 1 ? 'cp-step--active' : direction === 'forward' ? 'cp-step--left' : 'cp-step--right'}`}>
              <p className="cp-step__num">01 / 03</p>
              <h2 className="cp-step__title">What can I<br />help you with?</h2>
              <p className="cp-step__hint">Select the option that best describes your needs.</p>

              <div className="cp-interests">
                {INTERESTS.map(opt => (
                  <button
                    key={opt.label}
                    type="button"
                    className={`cp-interest ${interest === opt.label ? 'cp-interest--on' : ''}`}
                    onClick={() => setInterest(opt.label)}
                  >
                    <span className="cp-interest__icon">{opt.icon}</span>
                    <span className="cp-interest__label">{opt.label}</span>
                  </button>
                ))}
              </div>

              <button
                className="cp-next"
                disabled={!interest}
                onClick={() => go(2)}
              >
                <span>Continue</span>
                <span className="cp-next__arrow">→</span>
              </button>
            </div>

            {/* ── STEP 2: Details ── */}
            <div className={`cp-step ${step === 2 ? 'cp-step--active' : step < 2 ? 'cp-step--right' : 'cp-step--left'}`}>
              <p className="cp-step__num">02 / 03</p>
              <h2 className="cp-step__title">Tell me about<br />yourself</h2>
              <p className="cp-step__hint">
                {interest && <><span className="cp-step__interest-tag">{interest}</span> · </>}
                I'll get back to you within 24 hours.
              </p>

              <div className="cp-fields">
                <div className="cp-row">
                  <div className="cpf">
                    <label htmlFor="first">First Name *</label>
                    <input id="first" name="first" placeholder="First" value={form.first} onChange={onChange} required />
                    <span className="cpf__line" />
                  </div>
                  <div className="cpf">
                    <label htmlFor="last">Last Name *</label>
                    <input id="last" name="last" placeholder="Last" value={form.last} onChange={onChange} required />
                    <span className="cpf__line" />
                  </div>
                </div>
                <div className="cp-row">
                  <div className="cpf">
                    <label htmlFor="email">Email Address *</label>
                    <input id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={onChange} required />
                    <span className="cpf__line" />
                  </div>
                  <div className="cpf">
                    <label htmlFor="phone">Phone (Optional)</label>
                    <input id="phone" name="phone" type="tel" placeholder="(000) 000-0000" value={form.phone} onChange={onChange} />
                    <span className="cpf__line" />
                  </div>
                </div>
              </div>

              <div className="cp-step__actions">
                <button className="cp-back" onClick={() => go(1)}>← Back</button>
                <button
                  className="cp-next"
                  disabled={!form.first || !form.last || !form.email}
                  onClick={() => go(3)}
                >
                  <span>Continue</span>
                  <span className="cp-next__arrow">→</span>
                </button>
              </div>
            </div>

            {/* ── STEP 3: Message ── */}
            <div className={`cp-step ${step === 3 ? 'cp-step--active' : 'cp-step--right'}`}>
              <p className="cp-step__num">03 / 03</p>
              <h2 className="cp-step__title">What's on<br />your mind?</h2>
              <p className="cp-step__hint">Share your goals, timeline, and any questions.</p>

              <form onSubmit={submit}>
                <div className="cpf cpf--full">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your goals, timeline, budget, or any questions you have…"
                    value={form.message}
                    onChange={onChange}
                    required
                  />
                  <span className="cpf__line" />
                </div>

                <div className="cp-step__actions">
                  <button type="button" className="cp-back" onClick={() => go(2)}>← Back</button>
                  <button type="submit" className="cp-submit" disabled={!form.message}>
                    <span>Send Message</span>
                    <span className="cp-next__arrow">✦</span>
                  </button>
                </div>

                <p className="cp-disclaimer">
                  🔒 Your information is private and never shared with third parties.
                </p>
              </form>
            </div>

            </div>{/* end cp-steps-wrap */}
          </>
        )}
      </div>
    </div>
  )
}
