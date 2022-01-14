import React from "react";

export default function ResultRow({ concept, subject, value }) {
  return (
    <div className="valuesCalculator">
      <div className="valueLabel">
        <p className="concept">{concept}</p>
        <p className="subject">{subject}</p>
      </div>
      <span className="value">
        {`$${value}`}
      </span>
    </div>
  )
}