import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import { areaVibes } from '../data/areaVibes'
import { describeWeatherCode } from '../data/weatherCodes'
import { areaEvents } from '../data/areaEvents'
import './AreaVibePage.css'

const EVENTS_PAGE_SIZE = 6

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="5" width="17" height="16" rx="2" /><path d="M8 3v4M16 3v4M3.5 10h17" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

function eventCountdown(dateISO) {
  const now = new Date()
  const then = new Date(dateISO)
  const diffMs = then - now
  if (diffMs <= 0) return 'Happening now'
  const hours = Math.round(diffMs / 3600000)
  if (hours < 24) return `Starts in ${hours} hour${hours === 1 ? '' : 's'}`
  const days = Math.round(hours / 24)
  return `Starts in ${days} day${days === 1 ? '' : 's'}`
}

function eventWhen(ev) {
  if (ev.dateISO) {
    const countdown = eventCountdown(ev.dateISO)
    return ev.schedule ? `${countdown} · ${ev.schedule}` : countdown
  }
  return ev.schedule
}

function toInHg(hpa) {
  return (hpa * 0.0295299830714).toFixed(1)
}

function formatHour(dateStr) {
  return new Date(dateStr).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
}

function formatDayLabel(dateStr, idx) {
  if (idx === 0) return 'Today'
  if (idx === 1) return 'Tomorrow'
  return new Date(dateStr + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long' })
}

function formatMonthDay(dateStr) {
  return new Date(dateStr + 'T12:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric' })
}

export default function AreaVibePage() {
  const { slug } = useParams()
  const county = areaVibes.find(c => c.slug === slug)
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState(false)
  const [eventsOpen, setEventsOpen] = useState(false)
  const [eventsShown, setEventsShown] = useState(EVENTS_PAGE_SIZE)

  useEffect(() => {
    if (!county) return
    setWeather(null)
    setError(false)
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${county.lat}&longitude=${county.lon}&current_weather=true&hourly=temperature_2m,weathercode,relative_humidity_2m,surface_pressure&daily=weathercode,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&windspeed_unit=mph&timezone=America%2FNew_York`

    fetch(url)
      .then(r => {
        if (!r.ok) throw new Error('bad response')
        return r.json()
      })
      .then(setWeather)
      .catch(() => setError(true))
  }, [county?.slug])

  useEffect(() => {
    setEventsOpen(false)
    setEventsShown(EVENTS_PAGE_SIZE)
  }, [county?.slug])

  if (!county) {
    return (
      <div className="container av-notfound">
        <h1>Area not found</h1>
        <Link to="/" className="btn btn--primary">Back Home</Link>
      </div>
    )
  }

  const events = areaEvents
    .filter(e => e.county === county.slug)
    .sort((a, b) => (a.dateISO || '9999').localeCompare(b.dateISO || '9999'))
  const visibleEvents = events.slice(0, eventsShown)

  let current = null
  let hourly = []
  let daily = []

  if (weather) {
    const curTime = weather.current_weather.time
    const idx = weather.hourly.time.indexOf(curTime)
    const safeIdx = idx === -1 ? 0 : idx

    current = {
      temp: Math.round(weather.current_weather.temperature),
      wind: Math.round(weather.current_weather.windspeed * 10) / 10,
      humidity: weather.hourly.relative_humidity_2m[safeIdx],
      pressure: toInHg(weather.hourly.surface_pressure[safeIdx]),
      ...describeWeatherCode(weather.current_weather.weathercode),
    }

    for (let i = 0; i < 8; i++) {
      const hi = safeIdx + i * 3
      if (weather.hourly.time[hi] === undefined) break
      hourly.push({
        time: weather.hourly.time[hi],
        temp: Math.round(weather.hourly.temperature_2m[hi]),
        ...describeWeatherCode(weather.hourly.weathercode[hi]),
      })
    }

    daily = weather.daily.time.map((d, i) => ({
      date: d,
      hi: Math.round(weather.daily.temperature_2m_max[i]),
      lo: Math.round(weather.daily.temperature_2m_min[i]),
      ...describeWeatherCode(weather.daily.weathercode[i]),
    }))
  }

  return (
    <>
      <PageHero
        image={county.heroImage}
        eyebrow={county.region}
        title={`${county.name}, Florida`}
        subtitle={`Current conditions, forecast, and local highlights for ${county.name}.`}
        overlay="left"
      />

      <section className="av-weather-section">
        <div className="container">
          {error && (
            <p className="av-weather__status">Weather data is temporarily unavailable. Please check back shortly.</p>
          )}
          {!error && !current && (
            <p className="av-weather__status">Loading current conditions…</p>
          )}

          {current && (
            <div className="av-weather">
              <div className="av-weather__current">
                <div className="av-weather__place">{county.name}</div>
                <div className="av-weather__temp">{current.temp}°</div>
                <div className="av-weather__desc">{current.label}</div>
                <div className="av-weather__stats">
                  <div><span>{current.wind} mph</span>Wind</div>
                  <div><span>{current.pressure} inHg</span>Pressure</div>
                  <div><span>{current.humidity} %</span>Humidity</div>
                </div>
              </div>

              <div className="av-weather__hourly">
                {hourly.map(h => (
                  <div key={h.time} className="av-hour">
                    <span className="av-hour__temp">{h.temp}°</span>
                    <h.Icon />
                    <span className="av-hour__time">{formatHour(h.time)}</span>
                  </div>
                ))}
              </div>

              <div className="av-weather__daily">
                {daily.map((d, i) => (
                  <div key={d.date} className="av-day">
                    <span className="av-day__date">{formatMonthDay(d.date)}</span>
                    <span className="av-day__label">{formatDayLabel(d.date, i)}</span>
                    <d.Icon />
                    <span className="av-day__hi">{d.hi}°</span>
                    <span className="av-day__lo">{d.lo}°</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {county.about ? (
        <section className="av-about">
          <div className="container">
            <h2 className="av-about__title">About {county.name}</h2>
            {county.about.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </section>
      ) : (
        <section className="av-about">
          <div className="container">
            <h2 className="av-about__title">About {county.name}</h2>
            <p>A detailed guide to {county.name} is coming soon.</p>
            <Link to="/contact" className="btn btn--outline">Ask Shalene About This Area</Link>
          </div>
        </section>
      )}

      {events.length > 0 && (
        <section className="av-events">
          <div className="container">
            <div className="av-events__head">
              <h2 className="av-about__title">What's Happening in {county.name}</h2>
              <button
                type="button"
                className="btn btn--ghost av-events__toggle"
                onClick={() => setEventsOpen(o => !o)}
                aria-expanded={eventsOpen}
              >
                {eventsOpen ? 'Hide Events' : 'See Local Events'}
              </button>
            </div>

            {eventsOpen && (
              <>
                <p className="av-events__count">{visibleEvents.length} of {events.length} events</p>

                <div className="av-events__grid">
                  {visibleEvents.map(ev => (
                    <div key={ev.title} className="av-event-card">
                      <div className="av-event-card__media" style={{ backgroundImage: `url('${ev.image}')` }}>
                        <div className="av-event-card__date">
                          {ev.dateISO ? (
                            <>
                              <span className="av-event-card__month">{new Date(ev.dateISO).toLocaleDateString('en-US', { month: 'short' })}</span>
                              <span className="av-event-card__day">{new Date(ev.dateISO).getDate()}</span>
                            </>
                          ) : (
                            <span className="av-event-card__month">{ev.badgeLabel}</span>
                          )}
                        </div>
                        <span className="av-event-card__city">{ev.city}</span>
                      </div>
                      <div className="av-event-card__body">
                        <h3 className="av-event-card__title">{ev.title}</h3>
                        <p className="av-event-card__desc">{ev.description}</p>
                        <div className="av-event-card__meta">
                          <span><CalendarIcon />{eventWhen(ev)}</span>
                          <span><PinIcon />{ev.venue}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {eventsShown < events.length && (
                  <button
                    type="button"
                    className="btn btn--primary av-events__more"
                    onClick={() => setEventsShown(n => n + EVENTS_PAGE_SIZE)}
                  >
                    Load More Events
                  </button>
                )}
              </>
            )}
          </div>
        </section>
      )}
    </>
  )
}
