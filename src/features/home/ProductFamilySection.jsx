import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SectionIntro } from '../../components/ui/SectionIntro'
import { SensorNode } from '../../components/visuals/SensorNode'
import { FieldPreview } from '../../components/visuals/FieldPreview'
import { systemLayers } from '../../data/site'
export function ProductFamilySection(){return <section className="product-family content-section"><SectionIntro index="03" eyebrow="Product family" title="Three pieces, one operational picture." body="The hardware direction is intentionally limited: fewer controls, replaceable parts and a shared visual language across every surface."/><div className="product-family__grid">{systemLayers.map((item,i)=><Link to={i===2?'/platform':'/hardware'} key={item.name} className={`product-tile product-tile--${i+1}`}><div className="product-tile__head"><span>{item.index}</span><small>{item.kind}</small></div><div className="product-tile__visual">{i===0?<SensorNode compact/>:i===1?<div className="relay-object"><i/><b>R1</b><span>LOCAL RELAY</span></div>:<FieldPreview/>}</div><h3>{item.name}</h3><p>{item.description}</p><ul>{item.meta.map(x=><li key={x}>{x}</li>)}</ul><span className="product-tile__link">View product <ArrowRight/></span></Link>)}</div></section>}
