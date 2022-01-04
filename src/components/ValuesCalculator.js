import React from "react";

export default class ValuesCalculator extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="valuesCalculator">
          <div className="valueLabel">
            <p className="concept">{this.props.concept}</p>
            <p className="subject">{this.props.subject}</p>
          </div>
          <span className="value">
            {`$${this.props.value}`}
          </span>
        </div>
      </React.Fragment>
    )
  }
}