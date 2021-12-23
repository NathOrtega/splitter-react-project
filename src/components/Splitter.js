import React from "react";
import Input from "./Input";
import { FaUser, FaDollarSign } from "react-icons/fa"
import TipSelector from "./TipSelector";
import Results from "./Results";
import CopyRight from "./CopyRight";

export default class Splitter extends React.Component {
  render() {
    return (
      <div className="splitterContainer">
        <Input label={"Bill"} placeholder={0} icon={FaUser} />
        <TipSelector title="Select Tip %" />
        <Input label={"Number of People"} placeholder={0} icon={FaDollarSign} />
        <Results />
        <CopyRight />
      </div>
    )
  }
}