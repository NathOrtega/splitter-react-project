import React from "react";
import ResultRow from "./ResultRow";

export default class ValuesCalculator extends React.Component {
  getTipAmountPerPerson = () => {
    const { billTotal, tipPercentage, numberOfPeople } = this.props

    if (billTotal && numberOfPeople){
      const percentage = (tipPercentage * billTotal) / 100
      return percentage/numberOfPeople
    } 
    return 0
  }

  getTotalPerPerson = () => {
    const { billTotal, numberOfPeople } = this.props

    if (billTotal && numberOfPeople){
      return (billTotal / numberOfPeople) + this.getTipAmountPerPerson()
    }
    return 0
  }

  render() {
    const { billTotal, numberOfPeople } = this.props
    const areValuesFilled = billTotal && numberOfPeople

    return (
      <React.Fragment>
        <div className="resultsContainer">
          <ResultRow concept="Tip Amount" subject="/ person" value={this.getTipAmountPerPerson().toFixed(2)} />
          <ResultRow concept="Total" subject="/ person" value={this.getTotalPerPerson().toFixed(2)} />
          < button 
            type="reset" className="resetButton" onClick={() => window.location.reload()} 
            disabled={areValuesFilled ? false : true}
            style={ areValuesFilled ? null : {backgroundColor: "#0D686D", color: "#00474B"}}
          >
            RESET
          </button>
        </div>
      </React.Fragment>
    )
  }
}

ValuesCalculator.defaultProps = {
  billTotal: 0,
  tipPercentage: 0,
  numberOfPeople: 0,
}