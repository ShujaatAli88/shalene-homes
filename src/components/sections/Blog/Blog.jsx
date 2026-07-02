import './Blog.css'
import SectionHeader from '../../ui/SectionHeader'
import { Link } from 'react-router-dom'
import { posts } from '../../../data/blog'
import useScrollReveal from '../../../hooks/useScrollReveal'

const IMG = 'https://images.pexels.com/photos/19075389/pexels-photo-19075389.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80'

export default function Blog() {
  const ref = useScrollReveal()

  return (
    <section
      className="blog parallax"
      id="blog"
      ref={ref}
      style={{ backgroundImage: `url('${IMG}')` }}
    >
      <div className="container">
        <div className="fade">
          <SectionHeader
            eyebrow="Stay Informed"
            title="Market Updates & Local Insights"
            subtitle="Hyperlocal market analysis, development news, and real estate insights for Palm Beach County buyers and sellers."
            light
          />
        </div>

        <div className="blog__grid">
          {posts.map((p, i) => (
            <article
              key={p.id}
              className={`blog-card${p.featured ? ' blog-card--featured' : ''} fade d${Math.min(i, 3)}`}
            >
              <div className="blog-card__img-wrap">
                <img src={p.image} alt={p.title} className="blog-card__img" loading="lazy" />
              </div>
              <div className="blog-card__body">
                <div className="blog-card__cat">{p.category}</div>
                <h3 className="blog-card__title">{p.title}</h3>
                <p className="blog-card__excerpt">{p.excerpt}</p>
                <div className="blog-card__meta">
                  {p.author && <span>{p.author}</span>}
                  {p.author && <span className="blog-card__dot" />}
                  <span>{p.date}</span>
                  <span className="blog-card__dot" />
                  <span>{p.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="blog__more">
          <Link to="/blog" className="btn btn--outline blog__more-btn">View All Market Updates</Link>
        </div>
      </div>
    </section>
  )
}
