import { Outlet } from 'react-router-dom'
import { SiteHeader } from './SiteHeader'
import { SiteFooter } from './SiteFooter'

export function SiteLayout() {
  return <div className="marketing-site"><SiteHeader/><Outlet/><SiteFooter/></div>
}
