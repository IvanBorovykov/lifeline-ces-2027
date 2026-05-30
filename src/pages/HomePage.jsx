import { HomeHero } from '../features/home/HomeHero'
import { FieldProblemSection } from '../features/home/FieldProblemSection'
import { ScenarioSection } from '../features/home/ScenarioSection'
import { ArchitectureSection } from '../features/home/ArchitectureSection'
import { ProductFamilySection } from '../features/home/ProductFamilySection'
import { InterfaceSection } from '../features/home/InterfaceSection'
import { ProgramStatusSection } from '../features/home/ProgramStatusSection'
import { ClosingStatement } from '../features/home/ClosingStatement'

export function HomePage(){return <main>
  <HomeHero/>
  <FieldProblemSection/>
  <ScenarioSection/>
  <ArchitectureSection/>
  <ProductFamilySection/>
  <InterfaceSection/>
  <ProgramStatusSection/>
  <ClosingStatement/>
</main>}
