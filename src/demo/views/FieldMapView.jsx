import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { Crosshair, Layers, Navigation } from 'lucide-react'

export function FieldMapView(){
  const { patients } = useOutletContext(); const [active,setActive]=useState(patients[0])
  return <><div className="view-heading"><div><span>FIELD MAP</span><h1>Local node positions.</h1><p>Relative positions from the current operation origin.</p></div><button className="map-control"><Crosshair/>Recenter</button></div><div className="field-map"><div className="map-grid"/><div className="map-route r1"/><div className="map-route r2"/><div className="map-origin"><Navigation/><span>MEDIC / ORIGIN</span></div>{patients.map(p=><button key={p.id} onClick={()=>setActive(p)} className={`map-patient map-patient--${p.acuity} ${active.id===p.id?'active':''}`} style={{left:`${p.location[0]}%`,top:`${p.location[1]}%`}}><i>{p.priority}</i><span>{p.callSign}<small>{p.node} · {p.hr} bpm</small></span></button>)}<div className="map-scale">0 <i/> 10 <i/> 20 m</div><button className="map-layers"><Layers/>LAYERS</button></div><div className="map-detail"><span>SELECTED NODE</span><b>{active.callSign}</b><p>{active.node} · last update 1.8 sec · signal quality {active.quality}%</p></div></>
}
