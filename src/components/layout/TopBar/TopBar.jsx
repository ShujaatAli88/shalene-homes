import { useState, useEffect } from 'react'
import './TopBar.css'
import { agent } from '../../../data/agent'

export default function TopBar() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`topbar${hidden ? ' topbar--hidden' : ''}`}>
      <div className="container">
        <div className="topbar__left">
          <a href={`tel:${agent.phoneRaw}`}>{agent.phone}</a>
          <span className="topbar__sep">|</span>
          <a href={`mailto:${agent.email}`}>{agent.email}</a>
        </div>
        <div className="topbar__right">
          <a href="/listings">Search Portal</a>
          <span className="topbar__sep">|</span>
          <a href="/valuation">Seller Resources</a>
          <span className="topbar__sep">|</span>
          <a href="/listings">Buyer Resources</a>
        </div>
      </div>
    </div>
  )
}
