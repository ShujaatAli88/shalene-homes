import './PageHero.css'

export default function PageHero({ image, eyebrow, title, subtitle, overlay = 'dark', children }) {
  return (
    <section
      className={`page-hero parallax page-hero--overlay-${overlay}`}
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="container page-hero__body">
        {eyebrow && <div className="page-hero__eyebrow">{eyebrow}</div>}
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__sub">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
