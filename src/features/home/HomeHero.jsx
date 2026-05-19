import { Link } from 'react-router-dom'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { SensorNode } from '../../components/visuals/SensorNode'

export function HomeHero(){return <section className="editorial-hero"><div className="editorial-hero__copy"><p className="issue-line"><span>FIELD NOTE 001</span><span>TACTICAL TELEMEDICINE</span></p><h1>Triage<br/><em>without</em><br/>a signal.</h1><div className="editorial-hero__intro"><p>One local system for monitoring several casualties when infrastructure, attention and time are limited.</p><Link to="/demo/triage">Open working prototype <ArrowRight/></Link></div></div><div className="editorial-hero__object"><SensorNode/></div><div className="editorial-hero__footer"><span>R&D program / field note</span><span>Scroll to examine the system <ArrowDown/></span></div></section>}
