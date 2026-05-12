export const researchTracks = [
  { number: '01', title: 'Signal feasibility', question: 'Can the selected optical sensor configuration preserve useful trend data under motion and variable contact?', outputs: ['Benchtop signal characterization', 'Motion-artifact dataset', 'Quality-index definition'] },
  { number: '02', title: 'Human factors', question: 'Can one operator identify the next patient requiring attention without losing situational context?', outputs: ['Simulated-use protocol', 'Task-time measures', 'Use-error catalogue'] },
  { number: '03', title: 'Network resilience', question: 'How does the local network degrade when nodes move, lose power or temporarily leave range?', outputs: ['Packet-loss model', 'Store-and-forward tests', 'Failure-state interface'] },
  { number: '04', title: 'Clinical framing', question: 'Which trend combinations may be appropriate for decision support without presenting a diagnostic claim?', outputs: ['Advisory review', 'Claim boundary', 'Risk analysis inputs'] },
]

export const principles = [
  ['No hidden inference', 'Every change in priority must expose the contributing signals and the configured rule.'],
  ['Useful failure', 'The interface must say what is missing, stale or low quality instead of presenting false certainty.'],
  ['Local by default', 'Core monitoring and event history should remain available without a cloud connection.'],
  ['Human remains responsible', 'The product supports reassessment. It does not diagnose, prescribe or replace clinical judgment.'],
]
