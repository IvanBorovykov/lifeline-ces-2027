import { Activity, Radio, Tablet } from 'lucide-react'

export function ArchitectureDiagram() {
  const nodes = [
    { label: 'N01', x: 12, y: 22, state: 'ok' },{ label: 'N02', x: 24, y: 70, state: 'warn' },
    { label: 'N03', x: 43, y: 36, state: 'ok' },{ label: 'N04', x: 58, y: 78, state: 'alert' },
    { label: 'N05', x: 70, y: 18, state: 'ok' },{ label: 'N06', x: 84, y: 53, state: 'ok' },
  ]
  return <div className="architecture-diagram">
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      {nodes.map(node => <line key={node.label} x1="50" y1="50" x2={node.x} y2={node.y}/>) }
      <line x1="50" y1="50" x2="86" y2="17" />
    </svg>
    {nodes.map(n => <div className={`architecture-node architecture-node--${n.state}`} style={{ left:`${n.x}%`, top:`${n.y}%` }} key={n.label}><Activity/><span>{n.label}</span></div>)}
    <div className="architecture-relay"><Radio/><span>R01 / RELAY</span></div>
    <div className="architecture-tablet"><Tablet/><span>FIELD TAB</span><b>6 PATIENTS</b></div>
    <div className="architecture-legend"><span><i className="ok"/>Nominal</span><span><i className="warn"/>Review</span><span><i className="alert"/>Immediate</span></div>
  </div>
}
