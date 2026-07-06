import './Footer.css'
import { Link } from 'react-router-dom'
import { agent } from '../../../data/agent'
import SocialIcons from '../../ui/SocialIcons'

const NAV_LINKS = [
  { label: 'Portfolio',      to: '/portfolio' },
  { label: 'Neighborhoods',  to: '/neighborhoods' },
  { label: 'Home Search',    to: '/listings' },
  { label: 'Home Valuation', to: '/valuation' },
  { label: "Let's Connect",  to: '/contact' },
]

const USEFUL_LINKS = [
  { label: 'About Shalene',  to: '/about' },
  { label: "Buyer's Guide",  to: '/blog' },
  { label: "Seller's Guide", to: '/blog' },
  { label: 'Testimonials',   to: '/testimonials' },
]

const CONTACTS = [
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>,
    label: 'Call Direct',
    value: agent.phone,
    href: `tel:${agent.phoneRaw}`,
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>,
    label: 'Email',
    value: agent.email,
    href: `mailto:${agent.email}`,
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>,
    label: 'Office',
    value: `${agent.address.street}, ${agent.address.city} ${agent.address.state}`,
    href: null,
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>,
    label: 'Hours',
    value: 'Mon–Sat 8AM–7PM',
    href: null,
  },
]

export default function Footer() {
  return (
    <footer className="footer">

      {/* ── Watermark ───────────────────────────────────── */}
      <div className="footer__watermark" aria-hidden="true">SKB</div>

      <div className="container">

        {/* ── Brand row ────────────────────────────────── */}
        <div className="footer__brand-row">
          <div className="footer__brand-left">
            <div className="footer__brand-eyebrow">
              <span className="footer__brand-rule" />
              <span>Licensed REALTOR®</span>
            </div>
            <h2 className="footer__brand-name">{agent.name}</h2>
            <p className="footer__brand-tag">{agent.brokerage} &nbsp;·&nbsp; Palm Beach County, Florida</p>
            <div className="footer__social">
              <SocialIcons links={agent.social} />
            </div>
          </div>
          <div className="footer__brand-right">
            <img
              src="/KellerWilliams_Reserve_Logo_CMYK-removebg-preview.png"
              alt="KW Reserve"
              className="footer__kw-logo"
            />
          </div>
        </div>

        {/* ── Gold divider ─────────────────────────────── */}
        <div className="footer__gold-hr" />

        {/* ── Contact strip ────────────────────────────── */}
        <div className="footer__contacts">
          {CONTACTS.map(c => (
            <div key={c.label} className="footer__contact-item">
              <div className="footer__contact-icon">{c.icon}</div>
              <div>
                <p className="footer__contact-lbl">{c.label}</p>
                {c.href
                  ? <a href={c.href} className="footer__contact-val">{c.value}</a>
                  : <p className="footer__contact-val">{c.value}</p>
                }
              </div>
            </div>
          ))}
        </div>

        {/* ── Gold divider ─────────────────────────────── */}
        <div className="footer__gold-hr footer__gold-hr--dim" />

        {/* ── Nav rows ─────────────────────────────────── */}
        <div className="footer__nav-grid">
          <div className="footer__nav-col">
            <p className="footer__nav-heading">Navigation</p>
            <nav className="footer__nav-list">
              {NAV_LINKS.map(l => (
                <Link key={l.label} to={l.to} className="footer__nav-link">{l.label}</Link>
              ))}
            </nav>
          </div>
          <div className="footer__nav-col">
            <p className="footer__nav-heading">Quick Links</p>
            <nav className="footer__nav-list">
              {USEFUL_LINKS.map(l => (
                <Link key={l.label} to={l.to} className="footer__nav-link">{l.label}</Link>
              ))}
            </nav>
          </div>
          <div className="footer__nav-col footer__nav-col--cert">
            <img
              src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/g5qzbyky8ifp5w0ex0ik/realtor-eho-logo-07232021-update-dark"
              alt="REALTOR® Equal Housing"
              className="footer__cert-img"
            />
            <p className="footer__legal-mini">
              © 2026 {agent.name}. Licensed REALTOR® in Florida.<br />
              License #{agent.license}. Each office independently owned.
            </p>
          </div>
        </div>

      </div>

      {/* ── Bottom bar ───────────────────────────────────── */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <div className="footer__bottom-brand">
            <span className="footer__bottom-name">{agent.name}</span>
            <span className="footer__bottom-brokerage">{agent.brokerage}</span>
          </div>
          <div className="footer__bottom-links">
            <span>Copyright © 2026</span>
            <span className="footer__bottom-sep" />
            <a href="#">Privacy Policy</a>
            <span className="footer__bottom-sep" />
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>

    </footer>
  )
}
