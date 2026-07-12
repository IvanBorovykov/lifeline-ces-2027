import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { primaryNavigation } from '../../data/site'
import { Brand } from './Brand'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [compact, setCompact] = useState(false)
  const location = useLocation()
  useEffect(() => {
    const update = () => setCompact(window.scrollY > 36)
    update(); window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  useEffect(() => { setOpen(false) }, [location.pathname])
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previous }
  }, [open])
  return <>
    <div className="utility-bar"><span>Research prototype / Kyiv, Ukraine</span><span>Public demonstrator in development</span><span>Not for clinical use</span></div>
    <header className={`site-header-new ${compact ? 'site-header-new--compact' : ''}`}>
      <Brand />
      <nav>{primaryNavigation.map(item => <NavLink key={item.to} to={item.to}>{item.label}</NavLink>)}</nav>
      <Link className="header-demo" to="/demo/triage">Enter field demo <span>↗</span></Link>
      <button className="menu-trigger" onClick={() => setOpen(true)} aria-label="Open menu"><Menu /></button>
    </header>
    <div className={`mobile-drawer ${open ? 'mobile-drawer--open' : ''}`} aria-hidden={!open}>
      <div><Brand inverse/><button onClick={() => setOpen(false)} aria-label="Close menu"><X /></button></div>
      <nav>{primaryNavigation.map((item, i) => <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}><span>0{i + 1}</span>{item.label}</NavLink>)}</nav>
      <Link to="/demo/triage" onClick={() => setOpen(false)}>Open field demo ↗</Link>
    </div>
  </>
}
