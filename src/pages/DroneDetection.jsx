export default function DroneDetection() {
  return (
    <>
      <div className="page-header">
        <div className="page-badge purple">Custom Object Detection</div>
        <h2>Custom Object Detection — Low Cost</h2>
        <p>
          Custom-trained detection models built for your specific use case and
          optimized for cost-effective hardware — from aerial footage to any
          deployment scenario. We handle the full training pipeline so you get
          production-grade accuracy on devices as small as a Raspberry Pi.
        </p>
      </div>

      <div className="section-title">Live Demo</div>
      <p className="section-desc">
        Real-time object detection running on drone-captured aerial footage.
        The model was custom-trained for this specific use case and optimized to
        run on low-power embedded hardware without sacrificing detection accuracy.
      </p>
      <div className="grid-1">
        <div className="card card-featured">
          <video controls muted preload="metadata">
            <source src="/media/Drone.mp4" type="video/mp4" />
          </video>
          <div className="card-body">
            <h3>Aerial Object Detection</h3>
            <p>
              Custom-trained detection models running on drone-captured
              footage — optimized for low-cost hardware while maintaining
              high accuracy on aerial perspectives. The model handles varying
              altitudes, angles, and lighting conditions.
            </p>
            <ul className="features-list">
              <li>Custom object detection from aerial view</li>
              <li>Runs on Raspberry Pi, Jetson, and mobile phones</li>
              <li>Handles altitude and angle variations</li>
              <li>Lightweight models for edge deployment</li>
              <li>Real-time inference on embedded devices</li>
            </ul>
            <div className="tags">
              <span className="tag">Drone</span>
              <span className="tag">Edge AI</span>
              <span className="tag">Custom Models</span>
              <span className="tag">Low-Cost</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-title">Key Advantages</div>
      <div className="grid-3">
        <div className="card">
          <div className="card-body">
            <div className="card-icon purple">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3>Cost-Effective</h3>
            <p>
              Runs on a Raspberry Pi, consumer-grade drones, or even mobile
              phones — making computer vision accessible for any budget.
              No GPU servers required, all inference runs on-device.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="card-icon purple">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            </div>
            <h3>Custom Training</h3>
            <p>
              Models trained specifically for your target objects and
              environments — agriculture, infrastructure, security, and more.
              We handle the full pipeline: data collection, annotation,
              training, and optimization.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="card-icon purple">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
            </div>
            <h3>Edge Deployment</h3>
            <p>
              Optimized for on-device inference — no cloud dependency, low
              latency, works in areas with limited connectivity. Models
              are quantized and compiled for target hardware.
            </p>
          </div>
        </div>
      </div>

      <div className="section-title">Deployment Options</div>
      <div className="grid-3">
        <div className="card">
          <div className="card-body">
            <div className="card-icon purple">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
            </div>
            <h3>Raspberry Pi / Jetson</h3>
            <p>
              Runs natively on Raspberry Pi 4/5, NVIDIA Jetson (Nano, Xavier,
              Orin), and Google Coral Edge TPU. Full inference pipeline included
              with hardware-specific optimizations.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="card-icon purple">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
            </div>
            <h3>Mobile Phones</h3>
            <p>
              Deploy directly on iOS and Android devices. Models are optimized
              for mobile NPUs and GPUs, enabling real-time detection through
              the phone camera with no server connection needed.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="card-icon purple">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
            </div>
            <h3>Cloud / Hybrid</h3>
            <p>
              Deploy the same models on cloud GPU instances for centralized
              processing, or use a hybrid approach with edge pre-filtering
              and cloud-based deep analysis.
            </p>
          </div>
        </div>
      </div>

      <div className="section-title">Technical Specifications</div>
      <div className="specs-grid">
        <div className="spec-item">
          <div className="spec-value">30+ fps</div>
          <div className="spec-label">Inference Speed</div>
        </div>
        <div className="spec-item">
          <div className="spec-value">RPi 4+</div>
          <div className="spec-label">Min. Hardware</div>
        </div>
        <div className="spec-item">
          <div className="spec-value">Custom</div>
          <div className="spec-label">Object Classes</div>
        </div>
        <div className="spec-item">
          <div className="spec-value">ONNX</div>
          <div className="spec-label">Model Format</div>
        </div>
      </div>
    </>
  )
}
