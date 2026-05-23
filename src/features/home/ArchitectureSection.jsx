import { Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react'
import { SectionIntro } from '../../components/ui/SectionIntro'
import { ArchitectureDiagram } from '../../components/visuals/ArchitectureDiagram'
export function ArchitectureSection(){return <section className="architecture-section content-section"><SectionIntro index="02" eyebrow="System architecture" title={<>A local network,<br/>not a cloud promise.</>} body="Patient nodes, one relay and a focused medic interface form the base system. Each layer can fail visibly and independently." inverse/><ArchitectureDiagram/><div className="architecture-copy"><p>The mesh carries small, time-stamped observations. Field Tab stores the local event history and exposes stale or low-quality data instead of smoothing it away.</p><Link to="/platform">Read the system concept <MoveRight/></Link></div></section>}
