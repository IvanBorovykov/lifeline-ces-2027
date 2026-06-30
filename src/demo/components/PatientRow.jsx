import { AlertTriangle, ChevronRight } from 'lucide-react'
import { SignalTrace } from './SignalTrace'

export function PatientRow({ patient, tick, onOpen }) {
  return <button className={`patient-row patient-row--${patient.acuity}`} onClick={() => onOpen(patient)}>
    <div className="patient-row__rank">{String(patient.priority).padStart(2,'0')}</div>
    <div className="patient-row__identity"><b>{patient.callSign}</b><span>{patient.id} · Node {patient.node}</span></div>
    <div className="patient-row__signal"><SignalTrace acuity={patient.acuity} tick={tick}/></div>
    <div className="patient-row__metric"><span>HR</span><b>{patient.hr}</b><small>bpm</small></div>
    <div className="patient-row__metric"><span>SpO₂</span><b>{patient.spo2}</b><small>%</small></div>
    <div className="patient-row__metric"><span>PI</span><b>{patient.pi.toFixed(1)}</b><small>%</small></div>
    <div className="patient-row__reason">{patient.acuity === 'immediate' && <AlertTriangle/>}<span>{patient.alert}</span><small>{patient.trend > 0 ? '+' : ''}{patient.trend}% / 4m</small></div>
    <ChevronRight className="patient-row__open"/>
  </button>
}
