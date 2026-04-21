import { Link } from 'react-router-dom'
import { Brand } from './Brand'

export function SiteFooter() {
  return <footer className="site-footer-new">
    <div className="site-footer-new__lead"><Brand inverse/><h2>Monitoring should not stop<br/>when the network does.</h2></div>
    <div className="site-footer-new__cols">
      <div><span>Product</span><Link to="/platform">Platform</Link><Link to="/hardware">Hardware</Link><Link to="/demo/triage">Live prototype</Link></div>
      <div><span>Program</span><Link to="/research">Research</Link><Link to="/roadmap">Roadmap</Link><a href="mailto:hello@lifeline.example">Contact</a></div>
      <div><span>Location</span><p>Kyiv, Ukraine<br/>Independent<br/>R&D program</p></div>
    </div>
    <div className="site-footer-new__bottom"><span>© 2026 Lifeline R&D</span><span>All patient data in this prototype is synthetic.</span><span>Concept build 0.8.0</span></div>
  </footer>
}
