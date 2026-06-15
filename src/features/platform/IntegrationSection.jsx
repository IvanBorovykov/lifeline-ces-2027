import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
export function IntegrationSection(){return <section className="integration-band" id="integration"><div><span>INTEROPERABILITY DIRECTION</span><h2>Built to exchange data,<br/>not own the entire workflow.</h2></div><div><p>Planned research interfaces</p><ul><li>Local structured event export</li><li>Sensor adapter layer</li><li>Configurable rulesets</li><li>Read-only operations handoff</li></ul><Link to="/roadmap">View technical roadmap <ArrowRight/></Link></div></section>}
