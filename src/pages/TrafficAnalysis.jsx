export default function TrafficAnalysis() {
  return (
    <>
      <div className="page-header">
        <div className="page-badge green">Segmentation</div>
        <h2>Segmentation</h2>
        <p>
          Agentic multi-layered scene analysis — an AI agent that autonomously
          combines object detection, semantic segmentation, heatmap analytics,
          and contextual event understanding from standard video feeds.
        </p>
      </div>

      <div className="section-title">Source Footage</div>
      <p className="section-desc">
        A single camera feed from a complex urban intersection serves as input for
        all analysis modes below — demonstrating the depth of insight extractable
        from a single standard video source.
      </p>
      <div className="grid-1">
        <div className="card card-featured">
          <video
            controls
            muted
            preload="metadata"
            poster="/media/Romana_Trafic_Segmentation.png"
          >
            <source src="/media/Romana.mp4" type="video/mp4" />
          </video>
          <div className="card-body">
            <h3>Original Recording</h3>
            <p>
              The source video used for all the segmentation analyses below —
              a complex urban intersection with multiple vehicle types and
              pedestrians. No preprocessing or special camera setup required.
            </p>
          </div>
        </div>
      </div>

      <div className="section-title">Analysis Results</div>
      <p className="section-desc">
        From a single video source, the system generates multiple parallel
        analysis layers — each providing different operational insights that
        can be used independently or combined for comprehensive scene understanding.
      </p>
      <div className="grid-3">
        <div className="card">
          <img
            src="/media/Romana_Trafic_Segmentation.png"
            alt="Traffic Segmentation"
          />
          <div className="card-body">
            <h3>Traffic Segmentation</h3>
            <p>
              Per-class bounding box detection with color-coded categories —
              buses, cars, pedestrians — with live counting and statistics.
              Real-time object tracking maintains identity across frames.
            </p>
            <div className="tags">
              <span className="tag">Object Detection</span>
              <span className="tag">Tracking</span>
              <span className="tag">Classification</span>
            </div>
          </div>
        </div>

        <div className="card">
          <img
            src="/media/Romana_Semantic_segmentation.png"
            alt="Semantic Segmentation"
          />
          <div className="card-body">
            <h3>Semantic Segmentation</h3>
            <p>
              Pixel-level scene understanding with full color-mask overlay —
              every vehicle classified and segmented at instance level. Enables
              precise area-based analytics and spatial reasoning.
            </p>
            <div className="tags">
              <span className="tag">Pixel-level</span>
              <span className="tag">Instance Segmentation</span>
            </div>
          </div>
        </div>

        <div className="card">
          <img
            src="/media/Romana_PopUP_Bus_Stop.png"
            alt="Bus Stop Analysis"
          />
          <div className="card-body">
            <h3>Bus Stop Analytics</h3>
            <p>
              Contextual event detection for public transport — identifying
              stopped buses, boarding zones, and dwell-time analysis. Automated
              reporting for transit operations.
            </p>
            <div className="tags">
              <span className="tag">Event Detection</span>
              <span className="tag">Public Transport</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-title">Heatmap Analytics</div>
      <div className="grid-1">
        <div className="card card-featured">
          <img src="/media/Romana_HeatMap.png" alt="Traffic Heatmap" />
          <div className="card-body">
            <h3>Traffic Density Heatmap</h3>
            <p>
              Accumulated movement data visualized as a heat overlay on the
              live detection feed, with a mini-map for spatial context.
            </p>
            <ul className="features-list">
              <li>Temporal accumulation of vehicle paths</li>
              <li>Hotspot identification for congestion</li>
              <li>Combined with real-time object detection</li>
              <li>Mini-map overlay for spatial orientation</li>
            </ul>
            <div className="tags">
              <span className="tag">Heatmap</span>
              <span className="tag">Density Analysis</span>
              <span className="tag">Pattern Recognition</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-title">Capabilities</div>
      <div className="grid-3">
        <div className="card">
          <div className="card-body">
            <div className="card-icon green">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
            </div>
            <h3>Multi-Layer Analysis</h3>
            <p>
              Run detection, segmentation, heatmapping, and event detection
              simultaneously on the same feed — each layer provides
              independent operational insights.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="card-icon green">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <h3>Real-Time Processing</h3>
            <p>
              All analysis runs at video frame rate with no perceptible delay.
              Results stream directly to dashboards, APIs, or alerting
              systems for immediate consumption.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="card-icon green">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
            </div>
            <h3>Dashboard Ready</h3>
            <p>
              Output formatted for direct integration with monitoring
              dashboards. JSON/REST APIs, WebSocket streams, and
              webhook callbacks supported out of the box.
            </p>
          </div>
        </div>
      </div>

      <div className="section-title">Technical Specifications</div>
      <div className="specs-grid">
        <div className="spec-item">
          <div className="spec-value">30fps</div>
          <div className="spec-label">Processing Speed</div>
        </div>
        <div className="spec-item">
          <div className="spec-value">15+</div>
          <div className="spec-label">Object Classes</div>
        </div>
        <div className="spec-item">
          <div className="spec-value">Pixel</div>
          <div className="spec-label">Segmentation Level</div>
        </div>
        <div className="spec-item">
          <div className="spec-value">4K</div>
          <div className="spec-label">Max Resolution</div>
        </div>
      </div>
    </>
  )
}
