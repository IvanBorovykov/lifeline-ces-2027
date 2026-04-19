import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { primaryNavigation } from '../../data/site'
import { Brand } from './Brand'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [compact, setCompact] = useState(false)
  useEffect(() => {
    const update = () => setCompact(window.scrollY > 36)
    update(); window.addEventListener('scroll', update)
    return () => window.removeEventListener('scroll', update)
  }, [])
  return <>
    <div className="utility-bar"><span>Research prototype / Kyiv, Ukraine</span><span>Public demonstrator in development</span><span>Not for clinical use</span></div>
    <header className={`site-header-new ${compact ? 'site-header-new--compact' : ''}`}>
      <Brand />
      <nav>{primaryNavigation.map(item => <NavLink key={item.to} to={item.to}>{item.label}</NavLink>)}</nav>
      <Link className="header-demo" to="/demo/triage">Enter field demo <span>↗</span></Link>
      <button className="menu-trigger" onClick={() => setOpen(true)} aria-label="Open menu"><Menu /></button>
    </header>
    <div className={`mobile-drawer ${open ? 'mobile-drawer--open' : ''}`}>
      <div><Brand inverse/><button onClick={() => setOpen(false)}><X /></button></div>
      <nav>{primaryNavigation.map((item, i) => <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}><span>0{i + 1}</span>{item.label}</NavLink>)}</nav>
      <Link to="/demo/triage" onClick={() => setOpen(false)}>Open field demo ↗</Link>
    </div>
  </>
}
