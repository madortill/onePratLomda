import React from 'react'
import "../css/Corrections.css";

function JourneyCircles({ currentPage }) {
    const steps = ["פרט", "מפקד", "קצין משא״ן"];
  return (
    <div className="progress-wrapper">
      {steps.map((step, index) => {
        const isActive = index <= currentPage;

        return (
          <div className="step" key={step}>
            <div className={`circle ${isActive ? "active" : ""}`}>
              {step}
            </div>

            {index < steps.length - 1 && (
              <div className={`line ${index < currentPage ? "active" : ""}`} />
            )}
          </div>
        );
      })}
    </div>
  )
}

export default JourneyCircles
