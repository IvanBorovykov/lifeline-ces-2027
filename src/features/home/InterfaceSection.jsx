import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { FieldPreview } from '../../components/visuals/FieldPreview'
export function InterfaceSection(){const navigate=useNavigate();return <section className="interface-section"><div className="interface-section__copy"><span>FIELD TAB / SOFTWARE 0.7</span><h2>Less dashboard.<br/>More decision.</h2><p>The prototype keeps patient order, alert origin and data age visible in one view. Nothing is presented as a diagnosis.</p><Button onClick={()=>navigate('/demo/triage')} variant="light">Run the simulation</Button></div><div className="interface-section__screen"><FieldPreview/></div></section>}
