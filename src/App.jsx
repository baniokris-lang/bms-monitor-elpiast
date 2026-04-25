import { useState, useEffect } from 'react'
import './App.css'

function RoomCard() {
  const [temp, setTemp] = useState(21.5)
  const [humid, setHumid] = useState(48)
  const [hvac, setHvac] = useState(true)
  const [light, setLight] = useState(true)
  const [occ, setOcc] = useState(6)

  useEffect(() => {
    const interval = setInterval(() => {
      setTemp(prev => parseFloat((prev + (Math.random() - 0.48) * 0.3).toFixed(1)))
      setHumid(prev => Math.min(70, Math.max(30, prev + (Math.random() - 0.5) * 1.5)))
      setOcc(prev => Math.max(0, Math.min(20, prev + Math.round((Math.random() - 0.5) * 2))))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const tempAlert = temp > 24

  return (
    <div className="card">
      <div className="room-name">Sala konferencyjna</div>

      <div className="temp-big" style={{ color: tempAlert ? '#c0392b' : '#185FA5' }}>
        {temp.toFixed(1)} °C
      </div>

      <div className="metrics">
        <div className="metric-row">
          <span>Wilgotność</span>
          <span>{Math.round(humid)} %</span>
        </div>
        <div className="metric-row">
          <span>HVAC</span>
          <span
            className={'pill ' + (hvac ? 'pill-on' : 'pill-off')}
            onClick={() => setHvac(v => !v)}
          >
            {hvac ? 'aktywny' : 'wyłączony'}
          </span>
        </div>
        <div className="metric-row">
          <span>Oświetlenie</span>
          <span
            className={'pill ' + (light ? 'pill-on' : 'pill-off')}
            onClick={() => setLight(v => !v)}
          >
            {light ? 'włączone' : 'wyłączone'}
          </span>
        </div>
        <div className="metric-row">
          <span>Occupancy</span>
          <span>{occ} os.</span>
        </div>
      </div>

      {tempAlert && <div className="alert">⚠️ Temperatura przekroczyła próg 24°C</div>}
    </div>
  )
}

export default function App() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="app">
      <header className="header">
        <span className="logo">BMS Monitor</span>
        <span className="clock">{time.toLocaleTimeString('pl-PL')}</span>
      </header>
      <RoomCard />
    </div>
  )
}