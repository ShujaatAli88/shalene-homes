import PageHero    from '../components/ui/PageHero'
import { neighborhoods } from '../data/neighborhoods'
import './NeighborhoodsPage.css'

const HERO = 'https://images.unsplash.com/photo-1589083130544-0d6a2926e519?w=1800&q=85'

export default function NeighborhoodsPage() {
  return (
    <>
      <PageHero
        image={HERO}
        eyebrow="Communities We Serve"
        title="Explore Our Neighborhoods"
        subtitle="Each community in Palm Beach County offers a unique lifestyle. Discover the one that's right for you."
        overlay="left"
      />

      <section className="np-section">
        <div className="container">
          <div className="np-grid">
            {neighborhoods.map(n => (
              <article key={n.id} className={`np-card${n.featured ? ' np-card--featured' : ''}`}>
                <div className="np-card__img-wrap">
                  <img src={n.image} alt={n.name} className="np-card__img" loading="lazy" />
                  <div className="np-card__overlay">
                    <h2 className="np-card__name">{n.name}</h2>
                    <p className="np-card__tagline">{n.tagline}</p>
                  </div>
                </div>
                <div className="np-card__body">
                  <p className="np-card__desc">{n.description}</p>
                  <ul className="np-card__highlights">
                    {n.highlights.map(h => <li key={h}>{h}</li>)}
                  </ul>
                  <div className="np-card__stats">
                    <div className="np-stat"><span>{n.medianPrice}</span>Median Price</div>
                    <div className="np-stat"><span>{n.avgDOM}</span>Avg Days on Market</div>
                  </div>
                  <a href="/contact" className="btn btn--outline">Explore {n.name}</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
