import React from "react";
import Input from "./Input";
import { FaUser, FaDollarSign } from "react-icons/fa"
import TipSelector from "./TipSelector";
import CopyRight from "./CopyRight";
import ValuesCalculator from "./ValuesCalculator";

export default class Splitter extends React.Component {
  state = {
    billTotal: "",
    tipPercentage: "",
    numberOfPeople: "",
  }

  handleBillOnChange = (value) => {
    this.setState({
      billTotal: value
    })
  }

  handleNumberOfPeopleOnChange = (value) => {
    this.setState({
      numberOfPeople: value
    })
  }

  handleTipSelectorOnChange = (value) => {
    this.setState({
      tipPercentage: value
    })
  }

  render() {
    const { billTotal, tipPercentage, numberOfPeople } = this.state

    return (
      <div className="splitterContainer">
        <div className="splitter">
          <div className="requestedInfo">
            <Input value={billTotal} label={"Bill"} placeholder={0} icon={FaUser} onChange={this.handleBillOnChange} />
            <TipSelector title="Select Tip %" onChange={this.handleTipSelectorOnChange} />
            <Input value={numberOfPeople} label={"Number of People"} placeholder={0} icon={FaDollarSign} onChange={this.handleNumberOfPeopleOnChange} />
          </div>
          <ValuesCalculator billTotal={Number(billTotal)} tipPercentage={Number(tipPercentage)} numberOfPeople={Number(numberOfPeople)}/>
        </div>
        <CopyRight />
      </div>
    )
  }
}