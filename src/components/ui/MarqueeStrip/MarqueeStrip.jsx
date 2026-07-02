import './MarqueeStrip.css'

const BADGES = [
  {
    src: '/KellerWilliams_Reserve_Logo_CMYK-removebg-preview.png',
    alt: 'Keller Williams Reserve',
    style: 'img-logo',
  },
  {
    src: '/_BIZZ card  @ KW Reserve (3000 x 3000 px).png',
    alt: 'KW Reserve',
    style: 'img-card',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGq7jqmNu0xTI87MQTuyQA8PqTue3vNWb_coyBxk3uGQ&s=10',
    alt: 'Top Agent on Zillow',
    style: 'img-logo',
  },
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
