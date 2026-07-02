import './About.css'
import { Link } from 'react-router-dom'
import { agent } from '../../../data/agent'
import SocialIcons from '../../ui/SocialIcons'
import useScrollReveal from '../../../hooks/useScrollReveal'

const BG = 'https://images.pexels.com/photos/6957108/pexels-photo-6957108.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section
      className="about parallax"
      id="about"
      style={{ backgroundImage: `url('${BG}')` }}
      ref={ref}
    >
      {/* Decorative serif watermark */}
      <div className="about__watermark" aria-hidden="true">ABOUT</div>

      <div className="container">
        <div className="about__grid">

          {/* ── LEFT: Text ───────────────────────────────── */}
          <div className="about__text fade">

            <div className="about__eyebrow-row">
              <span className="about__eyebrow-line" />
              <span className="about__eyebrow-label">About Shalene</span>
            </div>

            <h2 className="about__headline">
              {agent.name.split(' ').slice(0, 2).join(' ')}<br />
              <span className="about__headline-accent">{agent.name.split(' ').slice(2).join(' ')}</span>
            </h2>

            {/* Pull quote */}
            <div className="about__pull-quote">
              <span className="about__pull-quote-mark">"</span>
              <p>Exceptional results through market expertise, strategic thinking, and an unwavering commitment to every client.</p>
            </div>

            {/* Bio */}
            <div className="about__bio">
              {agent.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Stats row */}
            <div className="about__stats">
              {agent.stats.map(s => (
                <div key={s.label} className="about__stat">
                  <span className="about__stat-num">{s.num}</span>
                  <span className="about__stat-lbl">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Credentials — abbreviated 2-col grid */}
            <div className="about__creds">
              {[
                { short: 'Licensed REALTOR®',      sub: 'State of Florida' },
                { short: 'CLHMS',                  sub: 'Certified Luxury Specialist' },
                { short: 'ABR®',                   sub: "Accredited Buyer's Rep" },
                { short: 'Top 1%',                 sub: 'Palm Beach County' },
              ].map(c => (
                <div key={c.short} className="about__cred-item">
                  <span className="about__cred-check">✓</span>
                  <div>
                    <span className="about__cred-title">{c.short}</span>
                    <span className="about__cred-sub">{c.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="about__btns">
              <Link to="/contact" className="btn btn--primary">Work With Shalene</Link>
              <Link to="/testimonials" className="btn btn--outline">Read Reviews</Link>
            </div>
          </div>

          {/* ── RIGHT: Photo card ────────────────────────── */}
          <div className="about__card-wrap fade d1">

            {/* Decorative corner frames */}
            <div className="about__frame-tl" />
            <div className="about__frame-br" />

            {/* Photo */}
            <div className="about__photo-frame">
              <img src={agent.photo} alt={agent.name} className="about__photo" />
              <div className="about__photo-overlay" />

              {/* "Meet" navy overlay card */}
              <div className="about__name-card">
                <div className="about__name-card-meet">
                  <span className="about__name-card-rule" />
                  <span className="about__name-card-label">Meet</span>
                </div>
                <p className="about__name-card-name">{agent.name.toUpperCase()}</p>
                <p className="about__name-card-title">{agent.title} · {agent.brokerage}</p>
              </div>
            </div>

            {/* KW logo badge */}
            <div className="about__kw-logo">
              <img
                src="/KellerWilliams_Reserve_Logo_CMYK-removebg-preview.png"
                alt="Keller Williams Reserve"
                className="about__kw-logo-img"
              />
            </div>

            {/* BIZZ card */}
            <div className="about__bizz-wrap">
              <img
                src="/_BIZZ card  @ KW Reserve (3000 x 3000 px).png"
                alt="KW Reserve Business Card"
                className="about__bizz-card"
              />
            </div>

            {/* License + social */}
            <div className="about__info-row">
              <div className="about__info-lic">
                <span className="about__info-lbl">License</span>
                <span className="about__info-val">#{agent.license}</span>
              </div>
              <div className="about__info-social">
                <SocialIcons links={agent.social} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
