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
      billTotal: Number(value)
    })
  }

  handleNumberOfPeopleOnChange = (value) => {
    this.setState({
      numberOfPeople: Number(value)
    })
  }

  handleTipSelectorOnChange = (value) => {
    this.setState({
      tipPercentage: Number(value)
    })
  }

  render() {
    return (
      <div className="splitterContainer">
        <div className="splitter">
          <div className="requestedInfo">
            <Input value={this.state.billTotal} label={"Bill"} placeholder={0} icon={FaUser} onChange={this.handleBillOnChange} />
            <TipSelector title="Select Tip %" onChange={this.handleTipSelectorOnChange} />
            <Input value={this.state.numberOfPeople} label={"Number of People"} placeholder={0} icon={FaDollarSign} onChange={this.handleNumberOfPeopleOnChange} />
          </div>
          <ValuesCalculator billTotal={this.state.billTotal} tipPercentage={this.state.tipPercentage} numberOfPeople={this.state.numberOfPeople}/>
        </div>
        <CopyRight />
      </div>
    )
  }
}