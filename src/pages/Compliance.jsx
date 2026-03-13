export default function Compliance() {
  return (
    <>
      <div className="page-header">
        <div className="page-badge blue">Complex Behavior — Long Duration</div>
        <h2>Complex Behavior — Long Duration</h2>
        <p>
          Agentic long-duration behavior analysis — an AI agent that autonomously
          decomposes complex activities into sequential steps and verifies each one
          against configurable rule sets in real-time, without scenario-specific training.
        </p>
      </div>

      <div className="section-title">Demo — Step-by-Step Verification</div>
      <p className="section-desc">
        Watch the agentic system autonomously decompose a multi-step operational
        procedure in real-time. Each step is independently detected, timed, and
        validated against configurable compliance rules — violations are flagged
        instantly with step-level granularity, no custom model training needed.
      </p>
      <div className="grid-1">
        <div className="card card-featured">
          <video controls muted preload="metadata">
            <source src="/media/Compliance1.mp4" type="video/mp4" />
          </video>
          <div className="card-body">
            <h3>Automated Compliance Verification</h3>
            <p>
              Monitors extended activities by breaking them into discrete
              procedural steps — each step is independently validated against
              compliance rules. The system handles activities spanning minutes
              to hours with consistent accuracy.
            </p>
            <ul className="features-list">
              <li>Automatic activity decomposition into steps</li>
              <li>Per-step validation against configurable rule sets</li>
              <li>Long-duration temporal reasoning (minutes to hours)</li>
              <li>Violation alerts with step-level granularity</li>
              <li>Applicable to safety, SOPs, and operational audits</li>
            </ul>
            <div className="tags">
              <span className="tag">Behavior Analysis</span>
              <span className="tag">Temporal Reasoning</span>
              <span className="tag">Rule Verification</span>
              <span className="tag">SOP Compliance</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-title">How It Works</div>
      <div className="grid-3">
        <div className="card">
          <div className="card-body">
            <div className="card-step">1</div>
            <h3>Activity Detection</h3>
            <p>
              The system identifies when a monitored activity begins and
              starts tracking the subject through the defined workflow. Entry
              triggers are configurable — zone-based, object-based, or
              action-based.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="card-step">2</div>
            <h3>Step Decomposition</h3>
            <p>
              Complex behaviors are automatically broken into individual
              sequential steps, each mapped to expected actions and timings.
              The model understands ordering, dependencies, and acceptable
              time windows for each step.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="card-step">3</div>
            <h3>Rule Validation</h3>
            <p>
              Each step is verified against predefined rules — missing steps,
              wrong order, or timing violations trigger real-time alerts.
              Results are logged with full audit trail for review and reporting.
            </p>
          </div>
        </div>
      </div>

      <div className="section-title">Use Cases</div>
      <div className="grid-3">
        <div className="card">
          <div className="card-body">
            <div className="card-icon blue">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            </div>
            <h3>Manufacturing QA</h3>
            <p>
              Verify that assembly line operators follow prescribed procedures
              in the correct order. Detect skipped steps, wrong tooling, or
              timing deviations before defective products leave the line.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="card-icon blue">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
            </div>
            <h3>Workplace Safety</h3>
            <p>
              Ensure PPE compliance, proper equipment handling, and safety
              protocol adherence. The system monitors continuously without
              fatigue, covering every shift and every worker.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="card-icon blue">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <h3>Operational Audits</h3>
            <p>
              Replace manual spot-check auditing with continuous automated
              monitoring. Generate compliance reports with timestamped evidence
              for every observed procedure.
            </p>
          </div>
        </div>
      </div>

      <div className="section-title">Technical Specifications</div>
      <div className="specs-grid">
        <div className="spec-item">
          <div className="spec-value">Hours</div>
          <div className="spec-label">Activity Duration Support</div>
        </div>
        <div className="spec-item">
          <div className="spec-value">50+</div>
          <div className="spec-label">Steps per Workflow</div>
        </div>
        <div className="spec-item">
          <div className="spec-value">97.2%</div>
          <div className="spec-label">Step Detection Accuracy</div>
        </div>
        <div className="spec-item">
          <div className="spec-value">REST</div>
          <div className="spec-label">API Integration</div>
        </div>
      </div>
    </>
  )
}
