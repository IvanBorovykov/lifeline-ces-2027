import { PlatformHero } from '../features/platform/PlatformHero'
import { WorkflowSection } from '../features/platform/WorkflowSection'
import { PriorityModelSection } from '../features/platform/PriorityModelSection'
import { OperationalStatesSection } from '../features/platform/OperationalStatesSection'
import { IntegrationSection } from '../features/platform/IntegrationSection'

export function PlatformPage(){return <main className="inner-page">
  <PlatformHero/>
  <nav className="jump-nav"><span>On this page</span><a href="#workflow">Workflow</a><a href="#priority">Priority model</a><a href="#states">Failure states</a><a href="#integration">Integration</a></nav>
  <WorkflowSection/>
  <PriorityModelSection/>
  <OperationalStatesSection/>
  <IntegrationSection/>
</main>}
