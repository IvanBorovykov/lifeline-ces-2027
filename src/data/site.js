export const primaryNavigation = [
  { label: 'Platform', to: '/platform' },
  { label: 'Hardware', to: '/hardware' },
  { label: 'Research', to: '/research' },
  { label: 'Roadmap', to: '/roadmap' },
]

export const systemLayers = [
  { index: '01', name: 'Node One', kind: 'Wearable', description: 'A low-power patient node designed to collect pulse, oxygen saturation and perfusion trend data at the point of care.', meta: ['PPG sensor', '24 h target', 'IP67 target'] },
  { index: '02', name: 'Relay', kind: 'Network', description: 'A pocket relay that keeps local data moving between patients and the medic station when public infrastructure is unavailable.', meta: ['Local mesh', 'Store & forward', 'Encrypted'] },
  { index: '03', name: 'Field Tab', kind: 'Interface', description: 'A focused workspace that orders the group by attention required and keeps the reason for each priority change visible.', meta: ['6+ patients', 'Sunlight mode', 'Glove input'] },
]

export const milestones = [
  { date: 'APR–JUN 2026', stage: 'Interface alpha', status: 'current', detail: 'Interaction model, synthetic telemetry and human-factors review.' },
  { date: 'JUL–SEP 2026', stage: 'Engineering samples', status: 'next', detail: 'Sensor enclosure, radio integration and benchtop characterization.' },
  { date: 'OCT–DEC 2026', stage: 'Scenario evaluation', status: 'planned', detail: 'Scripted simulations with trained medical advisors.' },
  { date: 'JAN 2027', stage: 'Public demonstrator', status: 'planned', detail: 'Integrated, non-clinical public demonstration.' },
  { date: '2027+', stage: 'Design controls', status: 'future', detail: 'Requirements, risk management and regulatory strategy.' },
]

export const documents = [
  { code: 'SYS-001', title: 'System concept', revision: 'Rev 0.4', type: 'Architecture' },
  { code: 'UX-014', title: 'Triage interaction model', revision: 'Rev 0.7', type: 'Human factors' },
  { code: 'HW-008', title: 'Node enclosure direction', revision: 'Rev 0.2', type: 'Industrial design' },
  { code: 'VAL-003', title: 'Simulation protocol', revision: 'Draft', type: 'Validation' },
]
