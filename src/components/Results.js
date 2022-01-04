import React from "react";
import ValuesCalculator from "./ValuesCalculator";

export default class Results extends React.Component {
  getTipAmountPerPerson = () => {
    if (this.props.billTotal && this.props.numberOfPeople){
      const percentage = (this.props.tipPercentage * this.props.billTotal) / 100
      return percentage/this.props.numberOfPeople
    } 
    return 0
  }

  getTotalPerPerson = () => {
    if (this.props.billTotal && this.props.numberOfPeople){
      return (this.props.billTotal / this.props.numberOfPeople) + this.getTipAmountPerPerson()
    }
    return 0
  }

  render() {
    return (
      <React.Fragment>
        <div className="resultsContainer">
          <ValuesCalculator concept="Tip Amount" subject="/ person" value={this.getTipAmountPerPerson().toFixed(2)} />
          <ValuesCalculator concept="Total" subject="/ person" value={this.getTotalPerPerson().toFixed(2)} />
          < button 
            type="reset" className="resetButton" onClick={() => window.location.reload()} 
            disabled={(this.props.billTotal && this.props.tipPercentage && this.props.numberOfPeople) ? false : true}
            style={
              (this.props.billTotal && this.props.tipPercentage && this.props.numberOfPeople) 
              ? 
              null
              :
              {backgroundColor: "#0D686D", color: "#00474B"}
            }
          >
            RESET
          </button>
        </div>
      </React.Fragment>
    )
  }
}