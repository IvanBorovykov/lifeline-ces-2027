import { AlertTriangle } from 'lucide-react'
import { initialPatients } from '../../data/patients'

export function FieldPreview() {
  return <div className="field-preview">
    <div className="field-preview__top"><span>OP NORTHSTAR / 04</span><b>LOCAL 14:27</b></div>
    <div className="field-preview__alert"><AlertTriangle/><span><small>PRIORITY CHANGED</small><b>Alpha 01 · perfusion trend</b></span><em>Review</em></div>
    <div className="field-preview__grid">{initialPatients.slice(0,4).map(p => <div className={`preview-patient preview-patient--${p.acuity}`} key={p.id}>
      <span>0{p.priority}</span><div><b>{p.callSign}</b><small>{p.node} / {p.alert}</small></div><p><b>{p.hr}</b><small>HR</small></p><p><b>{p.spo2}</b><small>SpO₂</small></p>
    </div>)}</div>
    <div className="field-preview__foot">SIMULATED TELEMETRY <span>•</span> 8 NODES CONNECTED <span>•</span> CLOUD UNAVAILABLE</div>
  </div>
}
