import './Listings.css'
import SectionHeader from '../../ui/SectionHeader'
import { Link } from 'react-router-dom'
import { listings } from '../../../data/listings'
import useScrollReveal from '../../../hooks/useScrollReveal'

const STATUS_COLOR = {
  active:  { bg: '#00C4CC', label: 'Active' },
  pending: { bg: '#1c2940', label: 'Pending' },
  sold:    { bg: '#3a5a40', label: 'Sold' },
}

export default function Listings() {
  const ref = useScrollReveal()

  return (
    <section className="listings" id="listings" ref={ref}>
      <div className="container">
        <div className="fade">
          <SectionHeader
            eyebrow="Featured Listings"
            title="Homes Currently on the Market"
            subtitle="A curated selection of exceptional properties available across Palm Beach County."
            light
          />
        </div>

        <div className="listings__grid">
          {listings.map((l, i) => {
            const status = STATUS_COLOR[l.status] || STATUS_COLOR.active
            return (
              <div key={l.id} className={`listing-card fade d${i}`}>
                <div className="listing-card__img-wrap">
                  <img src={l.image} alt={l.address} className="listing-card__img" loading="lazy" />

                  {/* Hover overlay */}
                  <div className="listing-card__overlay">
                    <div className="listing-card__overlay-specs">
                      <span>{l.beds} Beds</span>
                      <span className="listing-card__overlay-sep">·</span>
                      <span>{l.baths} Baths</span>
                      <span className="listing-card__overlay-sep">·</span>
                      <span>{l.sqft.toLocaleString()} sqft</span>
                    </div>
                    <Link to="/listings" className="listing-card__overlay-btn">
                      View Property
                      <span>→</span>
                    </Link>
                  </div>

                  {/* Status badge */}
                  <span
                    className="listing-card__badge"
                    style={{ background: status.bg }}
                  >
                    {status.label}
                  </span>
                </div>

                <div className="listing-card__body">
                  <div className="listing-card__city">{l.city}</div>
                  <h3 className="listing-card__address">{l.address}</h3>
                  <div className="listing-card__footer">
                    <span className="listing-card__price">{l.price}</span>
                    <div className="listing-card__specs">
                      <span>{l.beds}bd</span>
                      <span>{l.baths}ba</span>
                      <span>{l.sqft?.toLocaleString()} sf</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="listings__more">
          <Link to="/listings" className="listings__more-btn">
            View All Listings
            <span className="listings__more-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
