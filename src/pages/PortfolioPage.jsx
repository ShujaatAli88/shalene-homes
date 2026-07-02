import PageHero from '../components/ui/PageHero'
import { agent }  from '../data/agent'
import './PortfolioPage.css'

const HERO = 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1800&q=85'

const SOLD_PROPERTIES = [
  { address: '12 Ocean Way', city: 'Palm Beach, FL', price: '$8,200,000', beds: 5, baths: 6, sqft: 6800, image: 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=700&q=80', tag: 'Sold' },
  { address: '305 Worth Ave', city: 'Palm Beach, FL', price: '$5,750,000', beds: 4, baths: 4, sqft: 4200, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80', tag: 'Sold' },
  { address: '88 Lighthouse Dr', city: 'Jupiter, FL', price: '$3,100,000', beds: 4, baths: 3.5, sqft: 3600, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6f349de5?w=700&q=80', tag: 'Sold' },
  { address: '1420 S Ocean Blvd', city: 'Boca Raton, FL', price: '$4,400,000', beds: 5, baths: 5, sqft: 5100, image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80', tag: 'Sold' },
  { address: '22 Palm Circle', city: 'Wellington, FL', price: '$2,650,000', beds: 4, baths: 3, sqft: 3800, image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=700&q=80', tag: 'Sold' },
  { address: '710 Palmetto Park', city: 'Delray Beach, FL', price: '$1,975,000', beds: 3, baths: 2.5, sqft: 2800, image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&q=80', tag: 'Sold' },
]

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        image={HERO}
        eyebrow="Track Record"
        title="A Portfolio of Excellence"
        subtitle="Featured transactions representing exceptional results for buyers and sellers across Palm Beach County."
        overlay="left"
      />

      <section className="pp-stats">
        <div className="container">
          <div className="pp-stat-row">
            {agent.stats.map(s => (
              <div key={s.label} className="pp-stat">
                <span className="pp-stat__num">{s.num}</span>
                <span className="pp-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pp-grid-section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Recent Closings</div>
            <h2 className="section-title">Notable Transactions</h2>
          </div>
          <div className="pp-grid">
            {SOLD_PROPERTIES.map((p, i) => (
              <article key={i} className="pp-card">
                <div className="pp-card__img-wrap">
                  <img src={p.image} alt={p.address} className="pp-card__img" loading="lazy" />
                  <span className="pp-card__tag">{p.tag}</span>
                </div>
                <div className="pp-card__body">
                  <p className="pp-card__price">{p.price}</p>
                  <p className="pp-card__address">{p.address}</p>
                  <p className="pp-card__city">{p.city}</p>
                  <ul className="pp-card__specs">
                    <li><span>{p.beds}</span> Beds</li>
                    <li><span>{p.baths}</span> Baths</li>
                    <li><span>{p.sqft.toLocaleString()}</span> Sq Ft</li>
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
