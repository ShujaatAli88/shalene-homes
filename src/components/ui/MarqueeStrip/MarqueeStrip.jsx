import './MarqueeStrip.css'

const BADGES = [
  {
    src: '/KellerWilliams_Reserve_Logo_CMYK-removebg-preview.png',
    alt: 'Keller Williams Reserve',
    style: 'img-logo',
  },
  { style: 'badge',        top: 'GRI',    btm: 'Graduate REALTOR® Institute' },
  { style: 'serif-stack',  top: 'ABR®',   btm: "Accredited Buyer's Rep" },
  { style: 'cert',         top: 'CLHMS',  btm: 'Certified Luxury Specialist' },
  { style: 'realtor',      top: 'REALTOR®' },
  { style: 'serif-stack',  top: 'Top 1%', btm: 'Palm Beach County Agents' },
  { style: 'badge',        top: '15+',    btm: 'Years of Experience' },
  { style: 'cert',         top: 'FL',     btm: 'License #BK3421897' },
]

export default function MarqueeStrip() {
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-strip__track">
        {[...BADGES, ...BADGES, ...BADGES, ...BADGES, ...BADGES, ...BADGES, ...BADGES, ...BADGES].map((b, i) => (
          <div key={i} className="marquee-strip__item">
            {b.style === 'img-logo' ? (
              <div className="marquee-badge marquee-badge--img-logo">
                <img src={b.src} alt={b.alt} className="marquee-badge__img" />
              </div>
            ) : b.style === 'img-card' ? (
              <div className="marquee-badge marquee-badge--img-card">
                <img src={b.src} alt={b.alt} className="marquee-badge__card-img" />
              </div>
            ) : (
              <div className={`marquee-badge marquee-badge--${b.style}`}>
                <span className="marquee-badge__top">{b.top}</span>
                {b.btm && <span className="marquee-badge__btm">{b.btm}</span>}
              </div>
            )}
            <div className="marquee-strip__sep" />
          </div>
        ))}
      </div>
    </div>
  )
}
