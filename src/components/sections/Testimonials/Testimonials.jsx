import { useState, useEffect } from 'react'
import './Testimonials.css'
import SectionHeader from '../../ui/SectionHeader'
import { testimonials } from '../../../data/testimonials'
import useScrollReveal from '../../../hooks/useScrollReveal'

const POOL_IMG = 'https://images.pexels.com/photos/33404118/pexels-photo-33404118.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80'
const PER_SLIDE = 3

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const total = Math.ceil(testimonials.length / PER_SLIDE)
  const ref = useScrollReveal()

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % total), 6500)
    return () => clearInterval(timer)
  }, [total])

  const go   = (dir) => setCurrent((c) => (c + dir + total) % total)
  const goTo = (i)   => setCurrent(i)

  return (
    <section
      className="testimonials parallax"
      id="testimonials"
      ref={ref}
      style={{ backgroundImage: `url('${POOL_IMG}')` }}
    >
      <div className="container">
        <div className="fade">
          <SectionHeader
            eyebrow="Client Stories"
            title="What My Clients Say"
            subtitle="Don't just take my word for it — hear from the buyers and sellers I've had the privilege of serving across Palm Beach County."
            light
          />
        </div>

        {/* Track */}
        <div className="t-carousel__wrap">
          <div
            className="t-carousel__track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {Array.from({ length: total }).map((_, slideIdx) => (
              <div key={slideIdx} className="t-slide">
                {testimonials
                  .slice(slideIdx * PER_SLIDE, slideIdx * PER_SLIDE + PER_SLIDE)
                  .map((t) => (
                    <div key={t.id} className="t-card">
                      <div className="t-card__quote">"</div>
                      <div className="t-card__stars">★★★★★</div>
                      <p className="t-card__text">{t.text}</p>
                      <div className="t-card__author">
                        <div className="t-card__avatar">{t.initials}</div>
                        <div>
                          <div className="t-card__name">{t.name}</div>
                          <div className="t-card__role">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="t-carousel__ctrl">
          <button className="t-carousel__btn" onClick={() => go(-1)} aria-label="Previous">‹</button>
          <div className="t-carousel__dots">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                className={`t-carousel__dot${i === current ? ' t-carousel__dot--on' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button className="t-carousel__btn" onClick={() => go(1)} aria-label="Next">›</button>
        </div>
      </div>
    </section>
  )
}
