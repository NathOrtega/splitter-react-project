import React from "react";
import Toggle from "./Toggle";
import Input from "./Input";
import { togglesInfo } from "../constants";

export default class TipSelector extends React.Component {
  state = {
    tip: 0,
    customTip: "",
  }

  handleOnClick = (id) => {
    this.setState({
      tip: this.state.tip === id ? 0 : id,
      customTip: ""
    },() => {this.props.onChange(this.state.tip)})
  }

  isSelected = (id) => {
    return this.state.tip === id
  }

  handleOnChange = (value) => {
    this.setState({
      tip: value,
      customTip: value
    }, () => {this.props.onChange(this.state.tip)})
  }

  render() {
    return (
      <React.Fragment>
        {this.props.title && <p className="label">{this.props.title}</p>}
        <div className="togglesContainer">
          {togglesInfo.map(toggle => {
              const { label, id } = toggle
              return (
                <Toggle id={id} label={label} onClick={this.handleOnClick} isSelected={this.isSelected(id)} />
              )
            })}
          <Input  value={this.state.customTip} placeholder="Custom" onChange={this.handleOnChange}/>
        </div>
      </React.Fragment>
    )
  }
}