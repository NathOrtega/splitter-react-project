import React from "react";
import ValuesCalculator from "./ValuesCalculator";

export default class Results extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="resultsContainer">
          <ValuesCalculator concept="Tip Amount" subject="/ person" value="0.00" />
          <ValuesCalculator concept="Total" subject="/ person" value="0.00" />
          <button type="reset" className="resetButton">
            RESET
          </button>
        </div>
      </React.Fragment>
    )
  }
}