import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
export function ClosingStatement(){return <section className="closing-statement content-section"><span>WHY THIS EXISTS</span><blockquote>“The goal is not to automate the medic. It is to make sure a quiet patient does not disappear from view.”</blockquote><div><p>Lifeline is an independent R&D project exploring client architecture, human factors and hardware integration for offline multi-patient monitoring.</p><Link to="/research">How we plan to validate it <ArrowRight/></Link></div></section>}
