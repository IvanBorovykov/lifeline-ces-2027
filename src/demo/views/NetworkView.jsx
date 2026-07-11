import { useOutletContext } from 'react-router-dom'
import { Radio, Router, ShieldCheck } from 'lucide-react'

const topology = [
  { x: 12, y: 18 }, { x: 28, y: 79 }, { x: 40, y: 18 },
  { x: 55, y: 79 }, { x: 70, y: 18 }, { x: 86, y: 79 },
]

export function NetworkView(){
  const { patients } = useOutletContext()
  return <>
    <div className="view-heading"><div><span>LOCAL NETWORK</span><h1>Eight nodes. One isolated mesh.</h1><p>Topology and packet health for the current monitoring session.</p></div></div>
    <div className="network-overview">
      <div className="network-canvas">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><g>{patients.map((patient,index)=><line key={patient.id} x1="50" y1="50" x2={topology[index].x} y2={topology[index].y}/>)}</g></svg>
        <div className="network-hub"><Router/><b>R01</b><span>RELAY</span></div>
        {patients.map((patient,index)=><div className={`network-node network-node--${patient.acuity}`} style={{left:`${topology[index].x}%`,top:`${topology[index].y}%`}} key={patient.id}><Radio/><b>{patient.node}</b><span>{patient.quality}%</span></div>)}
      </div>
      <aside><h2>Network health</h2><div className="network-stat"><b>08</b><span>Nodes online</span></div><div className="network-stat"><b>0.08%</b><span>Packet loss / 5 min</span></div><div className="network-stat"><b>42 ms</b><span>Median relay latency</span></div><div className="network-security"><ShieldCheck/><div><b>Local encryption active</b><span>Session keys rotated 12 min ago</span></div></div></aside>
    </div>
    <div className="node-register"><header><span>Node</span><span>Assignment</span><span>Signal</span><span>Battery</span><span>Last packet</span></header>{patients.map(patient=><div key={patient.node}><b>{patient.node}</b><span>{patient.callSign}</span><span>{patient.quality}%</span><span>{patient.battery}%</span><span>1.8 sec</span></div>)}</div>
  </>
}
