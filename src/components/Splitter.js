import React, { useState } from "react";
import Input from "./Input";
import { FaUser, FaDollarSign } from "react-icons/fa"
import TipSelector from "./TipSelector";
import CopyRight from "./CopyRight";
import ValuesCalculator from "./ValuesCalculator";

export default function Splitter() {
  const [ billTotal, setBillTotal ] = useState("");
  const [ tipPercentage, setTipPercentage ] = useState("");
  const [ numberOfPeople, setNumberOfPeople ] = useState("");

  const handleBillOnChange = (value) => {
    setBillTotal(value)
  }

  const handleNumberOfPeopleOnChange = (value) => {
    setNumberOfPeople(value)
  }

  const handleTipSelectorOnChange = (value) => {
    setTipPercentage(value)
  }

  const handleOnReset = () => {
    setBillTotal("")
    setTipPercentage("")
    setNumberOfPeople("")
  }

  return (
    <div className="splitterContainer">
      <div className="splitter">
        <div className="requestedInfo">
          <Input 
            value={billTotal} label={"Bill"} placeholder={0} icon={FaUser} 
            onChange={handleBillOnChange} errorMessage="Can't be zero"
            isValid={billTotal !== "0"}
          />
          <TipSelector title="Select Tip %" onChange={handleTipSelectorOnChange} />
          <Input 
            value={numberOfPeople} label={"Number of People"} placeholder={0} icon={FaDollarSign} 
            onChange={handleNumberOfPeopleOnChange} errorMessage="Can't be zero"
            isValid={numberOfPeople !== "0"}
          />
        </div>
        <ValuesCalculator 
          billTotal={Number(billTotal)} tipPercentage={Number(tipPercentage)} 
          numberOfPeople={Number(numberOfPeople)} onReset={handleOnReset}
        />
      </div>
      <CopyRight />
    </div>
  )
}