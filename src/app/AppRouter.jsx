import { HashRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { SiteLayout } from '../components/layout/SiteLayout'
import { HomePage } from '../pages/HomePage'
import { PlatformPage } from '../pages/PlatformPage'
import { HardwarePage } from '../pages/HardwarePage'
import { ResearchPage } from '../pages/ResearchPage'
import { RoadmapPage } from '../pages/RoadmapPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { DemoShell } from '../demo/DemoShell'
import { TriageView } from '../demo/views/TriageView'
import { FieldMapView } from '../demo/views/FieldMapView'
import { NetworkView } from '../demo/views/NetworkView'
import { EventsView } from '../demo/views/EventsView'
import { SystemView } from '../demo/views/SystemView'

function ScrollManager(){const {pathname}=useLocation();useEffect(()=>{window.scrollTo(0,0)},[pathname]);return null}

export function AppRouter(){return <HashRouter><ScrollManager/><Routes>
  <Route element={<SiteLayout/>}><Route index element={<HomePage/>}/><Route path="platform" element={<PlatformPage/>}/><Route path="hardware" element={<HardwarePage/>}/><Route path="research" element={<ResearchPage/>}/><Route path="roadmap" element={<RoadmapPage/>}/></Route>
  <Route path="demo" element={<DemoShell/>}><Route index element={<Navigate to="triage" replace/>}/><Route path="triage" element={<TriageView/>}/><Route path="map" element={<FieldMapView/>}/><Route path="network" element={<NetworkView/>}/><Route path="events" element={<EventsView/>}/><Route path="settings" element={<SystemView/>}/></Route>
  <Route path="*" element={<NotFoundPage/>}/>
</Routes></HashRouter>}
