import React from "react";
import Input from "./Input";
import { FaUser, FaDollarSign } from "react-icons/fa"
import TipSelector from "./TipSelector";
import Results from "./Results";
import CopyRight from "./CopyRight";

export default class Splitter extends React.Component {
  state = {
    billTotal: 0,
    tipPercentage: 0,
    numberOfPeople: 0,
  }

  handleBillOnChange = (value) => {
    this.setState({
      billTotal: value
    }, () => {console.log("bill: " + this.state.billTotal)})
  }

  handleNumberOfPeopleOnChange = (value) => {
    this.setState({
      numberOfPeople: value
    }, () => {console.log("people: " + this.state.numberOfPeople)})
  }

  handleTipSelectorOnChange = (value) => {
    this.setState({
      tipPercentage: value
    }, () => {console.log("tip: " + this.state.tipPercentage)})
  }

  render() {
    return (
      <div className="splitterContainer">
        <div className="splitter">
          <div className="requestedInfo">
            <Input label={"Bill"} placeholder={0} icon={FaUser} onChange={this.handleBillOnChange} />
            <TipSelector title="Select Tip %" onChange={this.handleTipSelectorOnChange} />
            <Input label={"Number of People"} placeholder={0} icon={FaDollarSign} onChange={this.handleNumberOfPeopleOnChange} />
          </div>
          <Results />
        </div>
        <CopyRight />
      </div>
    )
  }
}