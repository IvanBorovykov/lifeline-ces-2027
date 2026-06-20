import { AlertCircle, ArrowRight, FileText } from 'lucide-react'
import { SectionIntro } from '../components/ui/SectionIntro'
import { documents } from '../data/site'
import { principles, researchTracks } from '../data/research'

export function ResearchPage() {
  return <main className="inner-page research-page">
    <section className="research-hero"><span>RESEARCH PROGRAM / 2026–2027</span><h1>Evidence before claims.</h1><p>Lifeline is a design and engineering investigation. The program separates what is demonstrated in software from what must still be measured, reviewed and validated.</p><div><b>04</b><span>active research<br/>tracks</span><b>00</b><span>clinical claims<br/>made</span><b>01</b><span>integrated public<br/>demonstrator</span></div></section>
    <section className="research-tracks content-section"><SectionIntro index="01" eyebrow="Workstreams" title="Questions the prototype must answer."/><div>{researchTracks.map(track=><article key={track.number}><span>{track.number}</span><div><h3>{track.title}</h3><p>{track.question}</p></div><ul>{track.outputs.map(x=><li key={x}>{x}</li>)}</ul></article>)}</div></section>
    <section className="claim-boundary"><div><AlertCircle/><span>CLAIM BOUNDARY / CURRENT REVISION</span></div><h2>The prototype can demonstrate information flow. It cannot demonstrate clinical benefit.</h2><p>Until suitable hardware studies, human-factors work and an appropriate regulatory pathway exist, all biometric data remains synthetic and all system specifications remain design targets.</p></section>
    <section className="content-section principles-section"><SectionIntro index="02" eyebrow="Program principles" title="The rules we use while building."/><div>{principles.map((p,i)=><article key={p[0]}><span>{String(i+1).padStart(2,'0')}</span><h3>{p[0]}</h3><p>{p[1]}</p></article>)}</div></section>
    <section className="document-register content-section"><div><SectionIntro index="03" eyebrow="Document register" title="A product has a paper trail."/><p>Representative internal documents used to organize the demonstrator program.</p></div><div>{documents.map(doc=><article key={doc.code}><FileText/><span>{doc.code}</span><div><b>{doc.title}</b><small>{doc.type}</small></div><em>{doc.revision}</em><ArrowRight/></article>)}</div></section>
  </main>
}
