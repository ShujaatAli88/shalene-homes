import './Neighborhoods.css'
import SectionHeader from '../../ui/SectionHeader'
import { neighborhoods } from '../../../data/neighborhoods'
import useScrollReveal from '../../../hooks/useScrollReveal'

export default function Neighborhoods() {
  const ref = useScrollReveal()

  return (
    <section className="neighborhoods" id="neighborhoods" ref={ref}>
      <div className="container">
        <div className="fade">
          <SectionHeader
            eyebrow="Explore the Area"
            title="Neighborhoods I Serve"
            subtitle="From the exclusive estates of Palm Beach Island to the vibrant arts scene of Delray Beach, I have deep expertise across all of Palm Beach County's most desirable communities."
          />
        </div>

        <div className="nh-grid">
          {neighborhoods.map((n, i) => (
            <div
              key={n.id}
              className={`nh-card${n.featured ? ' nh-card--featured' : ''} fade d${Math.min(i, 3)}`}
            >
              <img src={n.image} alt={n.name} loading="lazy" />
              <div className="nh-card__overlay">
                <div className="nh-card__name">{n.name}</div>
                <div className="nh-card__meta">{n.meta}</div>
                <a href="#contact" className="nh-card__link">Explore →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
