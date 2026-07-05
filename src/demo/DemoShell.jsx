import { NavLink, Outlet, Link } from 'react-router-dom'
import { Activity, Battery, BookOpen, Map, Network, Pause, Play, RotateCcw, Settings, WifiOff, X } from 'lucide-react'
import { Brand } from '../components/layout/Brand'
import { useTelemetry } from '../hooks/useTelemetry'

const routes = [
  ['/demo/triage', Activity, 'Triage'], ['/demo/map', Map, 'Field map'], ['/demo/network', Network, 'Network'], ['/demo/events', BookOpen, 'Event log'], ['/demo/settings', Settings, 'System']
]

export function DemoShell() {
  const telemetry = useTelemetry()
  return <main className="demo-shell-new">
    <aside className="demo-rail"><Brand inverse/><nav>{routes.map(([to,Icon,label])=><NavLink key={to} to={to} title={label}><Icon/><span>{label}</span></NavLink>)}</nav><Link to="/" className="demo-exit"><X/><span>Exit</span></Link></aside>
    <section className="demo-workspace">
      <header className="demo-topbar"><div><span className="operation-code">OP NORTHSTAR / SECTOR 04</span><b>Local monitoring session</b></div><div className="demo-session-actions"><span><WifiOff/>No external network</span><span><Battery/>Field Tab 82%</span><button onClick={()=>telemetry.setRunning(!telemetry.running)}>{telemetry.running?<Pause/>:<Play/>}{telemetry.running?'Pause':'Resume'}</button><button onClick={telemetry.reset}><RotateCcw/>Reset</button><time>14:{String(27 + Math.floor(telemetry.tick/27)).padStart(2,'0')}:{String(telemetry.tick%60).padStart(2,'0')}</time></div></header>
      <div className="demo-page"><Outlet context={telemetry}/></div>
    </section>
  </main>
}
