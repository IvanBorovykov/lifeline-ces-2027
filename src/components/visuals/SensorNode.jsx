export function SensorNode({ compact = false, active = true }) {
  return <div className={`sensor-node ${compact ? 'sensor-node--compact' : ''}`} aria-label="Node One wearable sensor concept">
    <div className="sensor-node__strap sensor-node__strap--top" />
    <div className="sensor-node__body">
      <span className="sensor-node__label">TCCC / N1</span>
      <div className="sensor-node__well"><i className={active ? 'active' : ''}/><span>01</span></div>
      <div className="sensor-node__marks"><i/><i/><i/><i/><i/></div>
    </div>
    <div className="sensor-node__strap sensor-node__strap--bottom" />
  </div>
}
