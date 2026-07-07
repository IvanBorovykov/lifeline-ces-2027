import { useMemo, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { AlertTriangle, ArrowUpRight, Filter } from 'lucide-react'
import { PatientRow } from '../components/PatientRow'
import { PatientDrawer } from '../components/PatientDrawer'

const order = { immediate:0, urgent:1, observe:2, stable:3 }

export function TriageView(){
  const { patients, tick } = useOutletContext()
  const [selected,setSelected] = useState(null)
  const [filter,setFilter] = useState('all')
  const visible = useMemo(()=>patients.filter(p=>filter==='all'||p.acuity===filter).sort((a,b)=>order[a.acuity]-order[b.acuity]),[patients,filter])
  return <>
    <div className="view-heading"><div><span>LIVE TRIAGE</span><h1>Six patients under watch.</h1><p>Ordered by configured clinical attention rules.</p></div><div className="view-totals"><div><b>01</b><span>Immediate</span></div><div><b>01</b><span>Urgent</span></div><div><b>04</b><span>Monitor</span></div></div></div>
    <button className="demo-alert" onClick={()=>setSelected(patients[0])}><AlertTriangle/><div><span>PRIORITY CHANGED · 38 SEC AGO</span><b>Alpha 01 moved to Immediate</b><p>Perfusion trend crossed rule PERF-04.</p></div><em>Review patient <ArrowUpRight/></em></button>
    <div className="triage-toolbar"><div><Filter/>{['all','immediate','urgent','observe','stable'].map(x=><button className={filter===x?'active':''} onClick={()=>setFilter(x)} key={x}>{x}</button>)}</div><span>Updated continuously · simulated data</span></div>
    <div className="patient-table"><header><span>Priority</span><span>Patient</span><span>Signal / 10 sec</span><span>Heart rate</span><span>Oxygen</span><span>Perfusion</span><span>Reason</span><span/></header>{visible.map(p=><PatientRow key={p.id} patient={p} tick={tick} onOpen={setSelected}/>)}</div>
    <PatientDrawer patient={selected} tick={tick} onClose={()=>setSelected(null)}/>
  </>
}
