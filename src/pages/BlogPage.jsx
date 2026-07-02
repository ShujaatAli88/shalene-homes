import { useState }   from 'react'
import PageHero         from '../components/ui/PageHero'
import { posts }        from '../data/blog'
import './BlogPage.css'

const HERO = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1800&q=85'

const allCategories = ['All', ...Array.from(new Set(posts.map(p => p.category)))]

export default function BlogPage() {
  const [cat, setCat] = useState('All')

  const displayed = cat === 'All' ? posts : posts.filter(p => p.category === cat)

  return (
    <>
      <PageHero
        image={HERO}
        eyebrow="Market Insights"
        title="Real Estate News & Updates"
        subtitle="Stay informed on Palm Beach County market trends, buying tips, and neighborhood spotlights."
        overlay="left"
      />

      <section className="bp-section">
        <div className="container">
          <div className="bp-filters">
            {allCategories.map(c => (
              <button
                key={c}
                className={`bp-filter${cat === c ? ' bp-filter--active' : ''}`}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="bp-grid">
            {displayed.map(post => (
              <article key={post.id} className={`bp-card${post.featured ? ' bp-card--featured' : ''}`}>
                <div className="bp-card__img-wrap">
                  <img src={post.image} alt={post.title} className="bp-card__img" loading="lazy" />
                  <span className="bp-card__cat">{post.category}</span>
                </div>
                <div className="bp-card__body">
                  <p className="bp-card__meta">{post.date} · {post.readTime}</p>
                  <h2 className="bp-card__title">{post.title}</h2>
                  <p className="bp-card__excerpt">{post.excerpt}</p>
                  <a href="#" className="bp-card__cta">Read Article →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
