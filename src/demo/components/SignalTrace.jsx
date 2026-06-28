export function SignalTrace({ acuity = 'stable', tick = 0 }) {
  const variant = (tick % 3) * 2
  const path = `M0 28 L20 28 L25 26 L31 29 L38 ${8+variant} L47 47 L56 19 L65 28 L90 28 L98 25 L108 29 L117 ${12+variant} L125 42 L134 22 L143 28 L180 28 L188 26 L198 29 L207 9 L216 46 L225 20 L234 28 L260 28`
  return <svg className={`signal-trace signal-trace--${acuity}`} viewBox="0 0 260 54" preserveAspectRatio="none"><path d={path}/></svg>
}
