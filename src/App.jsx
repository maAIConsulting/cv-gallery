import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import TrafficAnalysis from './pages/TrafficAnalysis'
import Compliance from './pages/Compliance'
import TheftDetection from './pages/TheftDetection'
import DroneDetection from './pages/DroneDetection'

const navItems = [
  { to: '/complex-behavior-short', label: 'Complex Behavior — Short', desc: 'Real-time theft detection', icon: 'red' },
  { to: '/complex-behavior-long', label: 'Complex Behavior — Long', desc: 'Compliance verification', icon: 'blue' },
  { to: '/segmentation', label: 'Segmentation', desc: 'Multi-layer scene analysis', icon: 'green' },
  { to: '/custom-detection', label: 'Custom Object Detection', desc: 'Low-cost edge deployment', icon: 'purple' },
]

export default function App() {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="sidebar-logo">
            <div className="sidebar-logo-mark">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12l5-3v6l-5-3z"/>
                <rect x="7" y="8" width="10" height="8" rx="1"/>
                <path d="M17 12h2a2 2 0 0 0 2-2V7"/>
                <circle cx="21" cy="5" r="1.5"/>
                <path d="M12 16v3"/>
                <path d="M8 19h8"/>
              </svg>
            </div>
            <div>
              <h1><span className="brand-ma">ma</span><span className="brand-ai">AI</span> Consulting</h1>
              <span className="sidebar-subtitle">Computer Vision Solutions</span>
            </div>
          </div>
        </div>
        <div className="sidebar-divider" />
        <div className="sidebar-label">Solutions</div>
        <nav className="sidebar-nav">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `sidebar-link${isActive ? ' active' : ''}`
              }
            >
              <span className={`icon ${item.icon}`} />
              <div className="sidebar-link-text">
                <span className="sidebar-link-title">{item.label}</span>
                <span className="sidebar-link-desc">{item.desc}</span>
              </div>
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-footer">
          maAI Consulting &copy; {new Date().getFullYear()}
        </div>
      </aside>

      <main className="main-content">
        <div className="main-content-inner">
          <Routes>
            <Route path="/" element={<Navigate to="/complex-behavior-short" replace />} />
            <Route path="/segmentation" element={<TrafficAnalysis />} />
            <Route path="/complex-behavior-long" element={<Compliance />} />
            <Route path="/complex-behavior-short" element={<TheftDetection />} />
            <Route path="/custom-detection" element={<DroneDetection />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}
