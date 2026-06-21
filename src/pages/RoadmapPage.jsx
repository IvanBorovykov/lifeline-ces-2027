import { milestones } from '../data/site'
import { SectionIntro } from '../components/ui/SectionIntro'
import { StatusPill } from '../components/ui/StatusPill'

export function RoadmapPage() {
  return <main className="inner-page roadmap-page">
    <section className="roadmap-hero"><p>DEVELOPMENT PLAN / REVISION 05</p><h1>From interface concept<br/>to testable system.</h1><span>A staged program that keeps software demonstration, hardware feasibility and clinical evidence separate.</span></section>
    <section className="roadmap-list content-section"><SectionIntro index="01" eyebrow="Program timeline" title="Five gates. No shortcuts."/><div>{milestones.map((m,i)=><article key={m.stage}><span className="roadmap-list__index">0{i+1}</span><div><small>{m.date}</small><h2>{m.stage}</h2></div><p>{m.detail}</p><StatusPill tone={m.status==='current'?'green':m.status==='next'?'orange':'neutral'}>{m.status}</StatusPill></article>)}</div></section>
    <section className="commit-map content-section"><SectionIntro index="02" eyebrow="Build architecture" title="Designed to grow in public, one reviewable change at a time."/><div className="commit-map__grid">{[['Foundation','Tokens, typography, routing, accessibility'],['Marketing','Platform, hardware, research, program pages'],['Simulation','Telemetry engine, rules, scenarios, playback'],['Field UI','Triage, patient detail, map, events, settings'],['Hardware data','Node registry, battery, signal quality, pairing'],['Evidence','Protocols, document register, revision history'],['Quality','Unit tests, visual tests, responsive states'],['Delivery','Build pipeline, previews, release notes']].map((x,i)=><article key={x[0]}><span>{String(i+1).padStart(2,'0')}</span><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></section>
  </main>
}
