import React from "react";
import ResultRow from "./ResultRow";

export default function ValuesCalculator({ billTotal, tipPercentage, numberOfPeople, onReset }) {
  const areValuesFilled = billTotal && numberOfPeople

  const getTipAmountPerPerson = () => {
    if (areValuesFilled){
      const percentage = (tipPercentage * billTotal) / 100
      return percentage/numberOfPeople
    } 
    return 0
  }

  const getTotalPerPerson = () => {
    if (areValuesFilled){
      return (billTotal / numberOfPeople) + getTipAmountPerPerson()
    }
    return 0
  }

  return (
    <div className="resultsContainer">
      <ResultRow concept="Tip Amount" subject="/ person" value={getTipAmountPerPerson().toFixed(2)} />
      <ResultRow concept="Total" subject="/ person" value={getTotalPerPerson().toFixed(2)} />
      < button 
        type="reset" className="resetButton" onClick={onReset} 
        disabled={areValuesFilled ? false : true}
        style={ areValuesFilled ? null : {backgroundColor: "#0D686D", color: "#00474B"}}
      >
        RESET
      </button>
    </div>
  )
}

ValuesCalculator.defaultProps = {
  billTotal: 0,
  tipPercentage: 0,
  numberOfPeople: 0,
}