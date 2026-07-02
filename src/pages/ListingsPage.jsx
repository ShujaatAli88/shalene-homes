import { useState } from 'react'
import PageHero  from '../components/ui/PageHero'
import { listings } from '../data/listings'
import './ListingsPage.css'

const STATUS_LABELS = { active: 'For Sale', pending: 'Pending', sold: 'Sold' }

const HERO = 'https://images.unsplash.com/photo-1565402170291-8491f14678db?w=1800&q=85'

export default function ListingsPage() {
  const [filter, setFilter] = useState('all')

  const displayed = filter === 'all' ? listings : listings.filter(l => l.status === filter)

  return (
    <>
      <PageHero
        image={HERO}
        eyebrow="Property Search"
        title="Browse Available Listings"
        subtitle="Explore curated properties across Palm Beach County — from beachfront estates to modern villas."
        overlay="left"
      />

      <section className="lp-section">
        <div className="container">
          <div className="lp-filters">
            {['all', 'active', 'pending', 'sold'].map(f => (
              <button
                key={f}
                className={`lp-filter${filter === f ? ' lp-filter--active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f === 'all' ? 'All Listings' : STATUS_LABELS[f]}
              </button>
            ))}
          </div>

          <div className="lp-grid">
            {displayed.map(l => (
              <article key={l.id} className="lp-card">
                <div className="lp-card__img-wrap">
                  <img src={l.image} alt={l.address} className="lp-card__img" loading="lazy" />
                  <span className={`lp-card__badge lp-card__badge--${l.status}`}>{STATUS_LABELS[l.status]}</span>
                </div>
                <div className="lp-card__body">
                  <p className="lp-card__price">{l.price}</p>
                  <p className="lp-card__address">{l.address}</p>
                  <p className="lp-card__city">{l.city}</p>
                  <ul className="lp-card__specs">
                    <li><span>{l.beds}</span> Beds</li>
                    <li><span>{l.baths}</span> Baths</li>
                    <li><span>{l.sqft.toLocaleString()}</span> Sq Ft</li>
                  </ul>
                  <a href="#contact" className="btn btn--primary btn--sm">Schedule Tour</a>
                </div>
              </article>
            ))}
          </div>

          {displayed.length === 0 && (
            <p className="lp-empty">No listings match the selected filter.</p>
          )}
        </div>
      </section>
    </>
  )
}
