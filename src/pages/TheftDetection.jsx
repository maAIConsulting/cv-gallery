import StoreTracker from '../components/StoreTracker'

export default function TheftDetection() {
  return (
    <>
      <div className="page-header">
        <div className="page-badge red">Complex Behavior — Short Duration</div>
        <h2>Complex Behavior — Short Duration</h2>
        <p>
          Agentic complex behavior recognition — an AI agent that autonomously
          identifies patterns and events unfolding within seconds from standard
          video feeds, without scenario-specific model training.
        </p>
      </div>

      <div className="section-title">Intelligent Multi-Camera Tracking</div>
      <p className="section-desc">
        Interactive simulation of a real-time agentic multi-camera tracking system.
        Multiple shoppers are monitored simultaneously across the store floor.
        When the AI agent detects concealment behavior, the suspect is flagged in
        real-time and tracked across all camera views — no pre-training required.
      </p>
      <StoreTracker />

      <div className="section-title">Detection Scenarios</div>
      <p className="section-desc">
        Our agentic system autonomously analyzes retail footage in real-time, recognizing
        a wide range of theft patterns — from rapid grab-and-go to subtle concealment
        techniques — all within seconds of occurrence, without scenario-specific training.
      </p>
      <div className="grid-2">
        <div className="card">
          <video controls muted preload="metadata">
            <source src="/media/Stealing1.mp4" type="video/mp4" />
          </video>
          <div className="card-body">
            <h3>Scenario 1 — Rapid Theft Detection</h3>
            <p>
              Fast-acting behavioral analysis identifies suspicious
              grab-and-go patterns within seconds of occurrence. The system
              distinguishes between normal browsing and theft-indicative
              movements using temporal action recognition.
            </p>
            <div className="tags">
              <span className="tag">Real-time</span>
              <span className="tag">Action Recognition</span>
              <span className="tag">Grab-and-Go</span>
            </div>
          </div>
        </div>

        <div className="card">
          <video controls muted preload="metadata">
            <source src="/media/Stealing2.mp4" type="video/mp4" />
          </video>
          <div className="card-body">
            <h3>Scenario 2 — Concealment Detection</h3>
            <p>
              Detects subtle concealment behaviors and hand-object
              interactions that indicate shoplifting attempts. The model tracks
              body pose, hand trajectories, and object visibility to
              identify concealment events with high confidence.
            </p>
            <div className="tags">
              <span className="tag">Anomaly Detection</span>
              <span className="tag">Gesture Analysis</span>
              <span className="tag">Concealment</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-title">Capabilities</div>
      <div className="grid-3">
        <div className="card">
          <div className="card-body">
            <div className="card-icon red">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h3>Short-Duration Analysis</h3>
            <p>
              Optimized for detecting rapid, complex behaviors that unfold
              within seconds — no long observation windows required. Latency
              from event to alert is under 2 seconds.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="card-icon red">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            </div>
            <h3>Real-Time Alerts</h3>
            <p>
              Instant notifications when suspicious behavior is detected,
              enabling immediate security response and intervention. Integrates
              with existing alarm and dispatch systems via API.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="card-icon red">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
            </div>
            <h3>Standard Cameras</h3>
            <p>
              Works with existing surveillance infrastructure — no special
              hardware or camera upgrades needed. Compatible with any IP camera
              outputting standard RTSP/ONVIF streams.
            </p>
          </div>
        </div>
      </div>

      <div className="section-title">Technical Specifications</div>
      <div className="specs-grid">
        <div className="spec-item">
          <div className="spec-value">&lt;2s</div>
          <div className="spec-label">Detection Latency</div>
        </div>
        <div className="spec-item">
          <div className="spec-value">94.7%</div>
          <div className="spec-label">Precision Rate</div>
        </div>
        <div className="spec-item">
          <div className="spec-value">30+</div>
          <div className="spec-label">Concurrent Streams</div>
        </div>
        <div className="spec-item">
          <div className="spec-value">24/7</div>
          <div className="spec-label">Continuous Monitoring</div>
        </div>
      </div>
    </>
  )
}
