import { useEffect, useRef } from 'react'
import { X, HeartPulse, Waves, Gauge, Battery, Radio, Check } from 'lucide-react'
import { SignalTrace } from './SignalTrace'

export function PatientDrawer({ patient, tick, onClose }) {
  const closeRef = useRef(null)
  useEffect(() => {
    if (!patient) return
    const onKeyDown = event => { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKeyDown)
    closeRef.current?.focus()
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [patient, onClose])
  if (!patient) return null
  return <div className="drawer-scrim" onMouseDown={onClose}><aside className="patient-drawer" role="dialog" aria-modal="true" aria-label={`Patient record ${patient.callSign}`} onMouseDown={e=>e.stopPropagation()}>
    <header><div><span>PATIENT RECORD / {patient.id}</span><h2>{patient.callSign}</h2><p>Temporary field identifier · age {patient.age}</p></div><button ref={closeRef} onClick={onClose} aria-label="Close patient record"><X/></button></header>
    <section className={`drawer-priority drawer-priority--${patient.acuity}`}><div><span>PRIORITY {String(patient.priority).padStart(2,'0')}</span><h3>{patient.acuity}</h3></div><p>{patient.alert}<small>{patient.trend}% change over four minutes</small></p></section>
    <section className="drawer-trace"><div><span>LIVE SIGNAL</span><span>QUALITY {patient.quality}%</span></div><SignalTrace acuity={patient.acuity} tick={tick}/><small>Simulated waveform · last sample now</small></section>
    <section className="drawer-metrics">{[[HeartPulse,'Heart rate',patient.hr,'bpm'],[Waves,'Oxygen saturation',patient.spo2,'%'],[Gauge,'Perfusion index',patient.pi.toFixed(1),'%']].map(([Icon,l,v,u])=><div key={l}><Icon/><span>{l}</span><b>{v}<small>{u}</small></b></div>)}</section>
    <section className="drawer-reason"><span>WHY THIS PATIENT MOVED</span><ol><li><Check/>Three valid perfusion samples received</li><li><Check/>Change crossed rule PERF-04</li><li><Check/>Signal quality remained above 85%</li></ol><p>This is a configured decision-support rule, not a diagnosis.</p></section>
    <section className="drawer-device"><div><Radio/><span>NODE</span><b>{patient.node}</b></div><div><Battery/><span>BATTERY</span><b>{patient.battery}%</b></div><div><span>LAST PACKET</span><b>1.8 s ago</b></div></section>
    <button className="drawer-ack" onClick={onClose}>Acknowledge review</button>
  </aside></div>
}
