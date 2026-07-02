import './Stats.css'
import { agent } from '../../../data/agent'
import useScrollReveal from '../../../hooks/useScrollReveal'

const IMG = 'https://images.pexels.com/photos/29123790/pexels-photo-29123790.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80'

export default function Stats() {
  const ref = useScrollReveal()

  return (
    <section
      className="stats parallax"
      id="stats"
      style={{ backgroundImage: `url('${IMG}')` }}
      ref={ref}
    >
      <div className="container">
        <div className="stats__grid">
          {agent.stats.map((s, i) => (
            <div key={s.label} className={`stats__item fade d${i}`}>
              <div className="stats__num">{s.num}</div>
              <div className="stats__lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
