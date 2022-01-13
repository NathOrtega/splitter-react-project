import React from "react";

export default class ResultRow extends React.Component {
  render() {
    const { concept, subject, value } = this.props

    return (
      <React.Fragment>
        <div className="valuesCalculator">
          <div className="valueLabel">
            <p className="concept">{concept}</p>
            <p className="subject">{subject}</p>
          </div>
          <span className="value">
            {`$${value}`}
          </span>
        </div>
      </React.Fragment>
    )
  }
}