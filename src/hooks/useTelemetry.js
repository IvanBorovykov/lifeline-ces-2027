import { useEffect, useRef, useState } from 'react'
import { initialPatients } from '../data/patients'

const hrPattern = [0, 1, 0, -1, 0, 1, -1, 0]
const oxygenPattern = [0, 0, 0, -1, 0, 1, 0, 0]

export function useTelemetry() {
  const [patients, setPatients] = useState(initialPatients)
  const [running, setRunning] = useState(true)
  const [tick, setTick] = useState(0)
  const tickRef = useRef(0)

  useEffect(() => {
    if (!running) return
    const timer = setInterval(() => {
      const next = tickRef.current + 1
      tickRef.current = next
      setTick(next)
      setPatients(list => list.map((patient, index) => ({
        ...patient,
        hr: Math.max(50, patient.hr + hrPattern[(next + index) % hrPattern.length]),
        spo2: Math.min(100, Math.max(80, patient.spo2 + oxygenPattern[(next + index * 2) % oxygenPattern.length])),
      })))
    }, 2200)
    return () => clearInterval(timer)
  }, [running])

  const reset = () => { tickRef.current = 0; setTick(0); setPatients(initialPatients) }
  return { patients, setPatients, running, setRunning, tick, reset }
}
