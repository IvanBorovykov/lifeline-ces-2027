export const initialPatients = [
  { id: 'A-01', callSign: 'Alpha 01', age: 31, priority: 1, acuity: 'immediate', hr: 136, spo2: 87, pi: 1.1, trend: -34, alert: 'Perfusion trend declining', node: 'N04', battery: 86, quality: 94, location: [36, 37] },
  { id: 'B-07', callSign: 'Bravo 07', age: 26, priority: 2, acuity: 'urgent', hr: 118, spo2: 92, pi: 1.8, trend: -12, alert: 'Oxygen saturation falling', node: 'N02', battery: 74, quality: 91, location: [61, 54] },
  { id: 'C-12', callSign: 'Charlie 12', age: 38, priority: 3, acuity: 'observe', hr: 102, spo2: 95, pi: 2.7, trend: -4, alert: 'Persistent tachycardia', node: 'N07', battery: 93, quality: 88, location: [74, 28] },
  { id: 'D-03', callSign: 'Delta 03', age: 29, priority: 4, acuity: 'stable', hr: 84, spo2: 98, pi: 4.2, trend: 2, alert: 'Within set thresholds', node: 'N01', battery: 81, quality: 97, location: [48, 72] },
  { id: 'E-09', callSign: 'Echo 09', age: 42, priority: 5, acuity: 'stable', hr: 79, spo2: 97, pi: 3.9, trend: 0, alert: 'Within set thresholds', node: 'N06', battery: 68, quality: 93, location: [25, 65] },
  { id: 'F-15', callSign: 'Foxtrot 15', age: 34, priority: 6, acuity: 'stable', hr: 88, spo2: 98, pi: 4.4, trend: 1, alert: 'Within set thresholds', node: 'N03', battery: 89, quality: 96, location: [82, 76] },
]

export const eventLog = [
  { time: '14:26:41', level: 'high', patient: 'Alpha 01', event: 'Priority changed: urgent → immediate', source: 'Ruleset 0.7' },
  { time: '14:26:39', level: 'high', patient: 'Alpha 01', event: 'Perfusion trend crossed configured threshold', source: 'N04' },
  { time: '14:24:12', level: 'medium', patient: 'Bravo 07', event: 'SpO₂ below 93% for 60 seconds', source: 'N02' },
  { time: '14:21:04', level: 'info', patient: 'Charlie 12', event: 'Node reassigned to patient', source: 'Field Tab' },
  { time: '14:18:33', level: 'info', patient: 'System', event: 'Relay R01 joined local network', source: 'Mesh' },
  { time: '14:16:08', level: 'info', patient: 'System', event: 'Operation Northstar started', source: 'Field Tab' },
]
