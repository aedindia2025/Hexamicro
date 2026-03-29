// Process — centred header, staggered circle steps with teal badges,
// and curved SVG connector arrows between each step.
import { Fragment } from 'react'
import { processSteps } from '../../data/process'
import './Process.css'

export default function Process() {
  return (
    <section id="process">

      {/* Centred header */}
      <div className="process-header">
        <div className="process-badge"><span className="process-badge-dot">✦</span> How We Work</div>
        <h2 className="section-title">From Brief to Deployment</h2>
      </div>

      {/* Steps row with inline connectors */}
      <div className="process-steps">
        {processSteps.map(({ id, num, name, desc }, index) => (
          <Fragment key={id}>

            {/* Step card */}
            <div className={`step fade-in${index % 2 === 1 ? ' step--low' : ''}`}>

              {/* Circle visual */}
              <div className="step-visual">
                <div className="step-circle">
                  <span className="step-circle-num">{num}</span>
                  {/* Decorative hex mark */}
                  <svg className="step-circle-hex" viewBox="0 0 120 120" fill="none">
                    <polygon
                      points="60,8 104,32 104,88 60,112 16,88 16,32"
                      stroke="rgba(14,48,46,0.12)" strokeWidth="1.2" fill="none"
                    />
                    <polygon
                      points="60,24 90,40 90,80 60,96 30,80 30,40"
                      stroke="rgba(14,48,46,0.07)" strokeWidth="0.8" fill="none"
                    />
                  </svg>
                </div>

                {/* Step badge */}
                <div className="step-pill">✦ Step {num}</div>
              </div>

              {/* Text */}
              <div className="step-name">{name}</div>
              <p className="step-desc">{desc}</p>
            </div>

            {/* Curved connector arrow (between steps) */}
            {index < processSteps.length - 1 && (
              <div className={`step-connector${index % 2 === 0 ? ' step-connector--down' : ' step-connector--up'}`}>
                <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {index % 2 === 0 ? (
                    /* Curve going down-right */
                    <path
                      d="M4 12 C30 12 50 48 76 48"
                      stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="5 4"
                    />
                  ) : (
                    /* Curve going up-right */
                    <path
                      d="M4 48 C30 48 50 12 76 12"
                      stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="5 4"
                    />
                  )}
                  {/* Arrowhead */}
                  {index % 2 === 0 ? (
                    <path d="M71 43 L76 48 L72 53" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  ) : (
                    <path d="M71 17 L76 12 L72 7" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  )}
                </svg>
              </div>
            )}

          </Fragment>
        ))}
      </div>

    </section>
  )
}
