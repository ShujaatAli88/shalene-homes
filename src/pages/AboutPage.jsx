import { useState } from 'react'
import { Link } from 'react-router-dom'
import { agent } from '../data/agent'
import './AboutPage.css'

const TIMELINE = [
  { year: '2009', title: 'Licensed in Florida',   desc: 'Obtained Florida Real Estate license and joined Coldwell Banker Realty, beginning a career defined by dedication.' },
  { year: '2012', title: 'Top 10% Palm Beach',    desc: 'Ranked in the top 10% of agents in Palm Beach County by closed volume — just three years into her career.' },
  { year: '2015', title: 'CLHMS Designation',     desc: 'Earned the Certified Luxury Home Marketing Specialist designation, opening the door to Palm Beach\'s finest estates.' },
  { year: '2018', title: '$500M Milestone',        desc: 'Surpassed $500M in career closed transactions — a testament to relentless client-first focus.' },
  { year: '2021', title: 'Top 1% Nationally',     desc: 'Recognized as a top 1% agent nationally by the National Association of REALTORS®.' },
  { year: '2024', title: '$2.4B Total Volume',    desc: 'Lifetime closed transaction volume surpasses $2.4 billion across all price points and neighborhoods.' },
]

const TABS = [
  {
    id: 'story',
    label: 'My Story',
    content: agent.bio[0] + ' ' + agent.bio[1],
    highlight: '15+',
    highlightLabel: 'Years in Palm Beach',
  },
  {
    id: 'approach',
    label: 'My Approach',
    content: 'Every transaction is treated as a strategic investment. Shalene\'s background in finance and corporate strategy means she evaluates risk, timing, and market conditions with the precision of a seasoned analyst — while always keeping your goals at the center of every decision.',
    highlight: '98%',
    highlightLabel: 'Client Satisfaction',
  },
  {
    id: 'community',
    label: 'My Community',
    content: agent.bio[2] + ' Shalene is deeply embedded in the social and philanthropic fabric of Palm Beach County — from charitable galas to local housing advocacy. Her roots run deep, and her clients benefit from a network built over two decades.',
    highlight: '20+',
    highlightLabel: 'Years as a Resident',
  },
]

export default function AboutPage() {
  const [activeTab, setActiveTab]         = useState('story')
  const [activeYear, setActiveYear]       = useState('2024')

  const tab     = TABS.find(t => t.id === activeTab)
  const milestone = TIMELINE.find(t => t.year === activeYear)

  return (
    <div className="ap-page">

      {/* ══════════════════════════════════════════
          SECTION 1 — CINEMATIC FULL-VIEWPORT HERO
      ══════════════════════════════════════════ */}
      <section className="ap-hero">
        <div className="ap-hero__bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1800&q=85')" }} />
        <div className="ap-hero__overlay" />

        {/* Agent photo — right side */}
        <div className="ap-hero__photo-wrap">
          <img src={agent.photo} alt={agent.name} className="ap-hero__photo" />
          <div className="ap-hero__photo-fade" />
        </div>

        {/* Left content */}
        <div className="ap-hero__content">
          <div className="ap-hero__eyebrow">
            <span className="ap-hero__eyebrow-rule" />
            <span>Palm Beach County, Florida</span>
          </div>

          <h1 className="ap-hero__name">
            <span className="ap-hero__name-first">Shalene</span>
            <span className="ap-hero__name-mid">KJ</span>
            <span className="ap-hero__name-last">Brostek</span>
          </h1>

          <div className="ap-hero__title-row">
            <span className="ap-hero__title-badge">{agent.title}</span>
            <span className="ap-hero__title-sep">·</span>
            <span className="ap-hero__title-brok">{agent.brokerage}</span>
          </div>
        </div>

        {/* Stats strip at bottom */}
        <div className="ap-hero__stats">
          {agent.stats.map((s, i) => (
            <div key={s.label} className="ap-hero__stat">
              <span className="ap-hero__stat-num">{s.num}</span>
              <span className="ap-hero__stat-lbl">{s.label}</span>
              {i < agent.stats.length - 1 && <span className="ap-hero__stat-sep" />}
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="ap-hero__scroll">
          <div className="ap-hero__scroll-mouse"><div className="ap-hero__scroll-dot" /></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 — INTERACTIVE STORY TABS
      ══════════════════════════════════════════ */}
      <section className="ap-story">
        <div className="container">

          {/* Tab nav */}
          <div className="ap-tabs">
            {TABS.map(t => (
              <button
                key={t.id}
                className={`ap-tab ${activeTab === t.id ? 'ap-tab--on' : ''}`}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="ap-story__grid">
            {/* Big decorative number */}
            <div className="ap-story__num-wrap">
              <span className="ap-story__big-num">{tab.highlight}</span>
              <span className="ap-story__big-lbl">{tab.highlightLabel}</span>
              <div className="ap-story__num-line" />
            </div>

            {/* Tab content */}
            <div className="ap-story__body" key={activeTab}>
              <div className="ap-story__eyebrow">
                <span className="ap-story__eyebrow-line" />
                <span>{tab.label}</span>
              </div>
              <p className="ap-story__text">{tab.content}</p>

              {activeTab === 'story' && (
                <div className="ap-story__creds">
                  {agent.credentials.map(c => (
                    <div key={c} className="ap-story__cred">
                      <svg className="ap-story__cred-icon" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M6 10l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {c}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Agent photo card */}
            <div className="ap-story__photo-col">
              <div className="ap-story__photo-frame">
                <img src={agent.photo} alt={agent.name} className="ap-story__photo" />
                <div className="ap-story__photo-card">
                  <img src="/KellerWilliams_Reserve_Logo_CMYK-removebg-preview.png" alt="KW Reserve" className="ap-story__kw" />
                  <p className="ap-story__photo-name">{agent.name}</p>
                  <p className="ap-story__photo-lic">Lic. #{agent.license}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — INTERACTIVE TIMELINE
      ══════════════════════════════════════════ */}
      <section className="ap-timeline">
        <div className="ap-timeline__bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80')" }} />
        <div className="ap-timeline__overlay" />

        <div className="container ap-timeline__inner">
          <div className="ap-timeline__header">
            <div className="ap-tl-eyebrow">
              <span className="ap-tl-rule" />
              <span>Career Milestones</span>
              <span className="ap-tl-rule" />
            </div>
            <h2 className="ap-timeline__title">A Track Record of<br /><em>Excellence</em></h2>
          </div>

          {/* Year selector */}
          <div className="ap-tl-years">
            {TIMELINE.map((t, i) => (
              <button
                key={t.year}
                className={`ap-tl-year ${activeYear === t.year ? 'ap-tl-year--on' : ''}`}
                onClick={() => setActiveYear(t.year)}
              >
                <span className="ap-tl-year__num">{t.year}</span>
                <span className="ap-tl-year__dot" />
                {i < TIMELINE.length - 1 && <span className="ap-tl-year__line" />}
              </button>
            ))}
          </div>

          {/* Active milestone detail */}
          <div className="ap-tl-detail" key={activeYear}>
            <div className="ap-tl-detail__year">{milestone.year}</div>
            <div className="ap-tl-detail__body">
              <h3 className="ap-tl-detail__title">{milestone.title}</h3>
              <p className="ap-tl-detail__desc">{milestone.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4 — DARK CTA
      ══════════════════════════════════════════ */}
      <section className="ap-cta">
        <div className="ap-cta__photo-wrap">
          <img src={agent.photo} alt={agent.name} className="ap-cta__photo" />
          <div className="ap-cta__photo-fade" />
        </div>
        <div className="container ap-cta__inner">
          <div className="ap-cta__content">
            <div className="ap-cta__eyebrow">
              <span className="ap-cta__rule" />
              <span>Ready to get started?</span>
              <span className="ap-cta__rule" />
            </div>
            <h2 className="ap-cta__heading">
              Let's Find Your<br />Perfect Home
            </h2>
            <p className="ap-cta__sub">
              Whether buying, selling, or investing — Shalene's expertise and local knowledge are your greatest advantage in Palm Beach County.
            </p>
            <div className="ap-cta__btns">
              <Link to="/contact" className="ap-cta__btn ap-cta__btn--gold">Start the Conversation</Link>
              <Link to="/listings" className="ap-cta__btn ap-cta__btn--outline">Browse Listings</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
