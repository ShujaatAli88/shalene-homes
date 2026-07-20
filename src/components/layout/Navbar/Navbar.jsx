import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import { agent } from '../../../data/agent'

const NAV_ITEMS = [
  { label: 'Portfolio',      path: '/portfolio' },
  { label: 'Neighborhoods',  path: '/neighborhoods' },
  {
    label: 'Area Vibes',
    path: '/area-vibes/martin-county',
    children: [
      { label: 'Martin County',        path: '/area-vibes/martin-county' },
      { label: 'Okeechobee County',    path: '/area-vibes/okeechobee-county' },
      { label: 'Palm Beaches County',  path: '/area-vibes/palm-beach-county' },
      { label: 'St. Lucie County',     path: '/area-vibes/st-lucie-county' },
    ],
  },
  { label: 'Home Search',    path: '/listings' },
  { label: 'Home Valuation', path: '/valuation' },
  { label: 'About', path: '/about' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [mobileSubmenu, setMobileSubmenu] = useState(null)
  const location = useLocation()

  const isHome      = location.pathname === '/'
  const transparent = isHome && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false); setMobileSubmenu(null) }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (item) => {
    if (item.children) return item.children.some((c) => location.pathname === c.path)
    return location.pathname === item.path
  }

  return (
    <>
      <nav className={[
        'navbar',
        transparent ? 'navbar--glass' : 'navbar--solid',
        scrolled    ? 'navbar--scrolled' : '',
      ].filter(Boolean).join(' ')}>
        <div className="container">
          <div className="navbar__inner">

            {/* Logo */}
            <Link to="/" className="navbar__logo">
              <img
                src="/shalene-logo.png"
                alt={agent.name}
                className="navbar__logo-img"
              />
            </Link>

            {/* Vertical divider */}
            <div className="navbar__divider" />

            {/* Desktop links */}
            <ul className="navbar__links">
              {NAV_ITEMS.map((item) => (
                <li key={item.label} className="navbar__item">
                  <Link
                    to={item.path}
                    className={`navbar__link${isActive(item) ? ' navbar__link--active' : ''}`}
                  >
                    {item.label}
                    {item.children && (
                      <svg
                        className="navbar__chevron"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    )}
                  </Link>
                  {item.children && (
                    <ul className="navbar__dropdown">
                      {item.children.map((c) => (
                        <li key={c.label}>
                          <Link
                            to={c.path}
                            className={`navbar__dropdown-link${location.pathname === c.path ? ' navbar__dropdown-link--active' : ''}`}
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <Link to="/contact" className="navbar__cta">Let's Connect</Link>

            <button
              className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-nav${menuOpen ? ' mobile-nav--open' : ''}`} aria-hidden={!menuOpen}>
        <button className="mobile-nav__close" onClick={() => setMenuOpen(false)}>✕</button>

        {mobileSubmenu ? (
          <div className="mobile-nav__panel">
            <button className="mobile-nav__back" onClick={() => setMobileSubmenu(null)}>
              <span className="mobile-nav__back-arrow">‹</span> {mobileSubmenu.label}
            </button>
            {mobileSubmenu.children.map((c) => (
              <Link
                key={c.label}
                to={c.path}
                className="mobile-nav__link mobile-nav__link--sub"
                onClick={() => setMenuOpen(false)}
              >
                {c.label}
              </Link>
            ))}
          </div>
        ) : (
          <div className="mobile-nav__panel">
            <Link to="/" className="mobile-nav__link" onClick={() => setMenuOpen(false)}>Home</Link>
            {NAV_ITEMS.map((item) => (
              item.children ? (
                <button
                  key={item.label}
                  className="mobile-nav__link mobile-nav__link--expand"
                  onClick={() => setMobileSubmenu(item)}
                >
                  {item.label} <span className="mobile-nav__expand-arrow">›</span>
                </button>
              ) : (
                <Link key={item.label} to={item.path} className="mobile-nav__link" onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              )
            ))}
            <Link to="/contact" className="mobile-nav__cta" onClick={() => setMenuOpen(false)}>
              Let's Connect
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
