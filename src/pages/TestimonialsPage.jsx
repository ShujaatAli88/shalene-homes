import PageHero       from '../components/ui/PageHero'
import { testimonials } from '../data/testimonials'
import './TestimonialsPage.css'

const HERO = 'https://images.unsplash.com/photo-1464082354059-27db6ce50048?w=1800&q=85'

const PLATFORMS = [
  { name: 'Zillow', rating: '5.0', reviews: '127', icon: 'Z' },
  { name: 'Google', rating: '4.9', reviews: '84', icon: 'G' },
  { name: 'Realtor.com', rating: '5.0', reviews: '63', icon: 'R' },
]

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        image={HERO}
        eyebrow="Client Reviews"
        title="What Clients Are Saying"
        subtitle="Hundreds of families across Palm Beach County have trusted Shalene with their most important real estate decisions."
        overlay="dark"
      />

      <section className="tp-platforms">
        <div className="container">
          <div className="tp-platform-row">
            {PLATFORMS.map(p => (
              <div key={p.name} className="tp-platform">
                <div className="tp-platform__icon">{p.icon}</div>
                <div>
                  <p className="tp-platform__name">{p.name}</p>
                  <p className="tp-platform__rating">★★★★★ {p.rating}</p>
                  <p className="tp-platform__count">{p.reviews} Reviews</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tp-reviews">
        <div className="container">
          <div className="tp-grid">
            {testimonials.map(t => (
              <article key={t.id} className="tp-card">
                <div className="tp-card__stars">★★★★★</div>
                <blockquote className="tp-card__text">"{t.text}"</blockquote>
                <footer className="tp-card__footer">
                  <div className="tp-card__avatar">{t.initials}</div>
                  <div>
                    <p className="tp-card__name">{t.name}</p>
                    <p className="tp-card__role">{t.role}</p>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
