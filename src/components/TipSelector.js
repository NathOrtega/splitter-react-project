import React from "react";
import Toggle from "./Toggle";
import Input from "./Input";

export default class TipSelector extends React.Component {
  state = {
    tip: 0,
    customTip: "",
  }

  handleOnClick = (id) => {
    this.setState({
      customTip: ""
    }, () => {
      this.state.tip === id 
      ?
      this.setState({
        tip: 0
      }, () => {this.props.onChange(this.state.tip)})
      :
      this.setState({
        tip: id
      }, () => {this.props.onChange(this.state.tip)})
    })
  }

  isSelected = (id) => {
    return this.state.tip === id ? true : false
  }

  handleOnChange = (value) => {
    this.setState({
      customTip: value
    }, () => {
      this.setState({
        tip: this.state.customTip
      }, () => {this.props.onChange(this.state.tip)})
    })
  }

  render() {
    return (
      <React.Fragment>
        {this.props.title && <p className="label">{this.props.title}</p>}
        <div className="togglesContainer">
          <Toggle id={5} label="5%" onClick={this.handleOnClick} isSelected={this.isSelected(5)} />
          <Toggle id={10} label="10%" onClick={this.handleOnClick} isSelected={this.isSelected(10)} />
          <Toggle id={15} label="15%" onClick={this.handleOnClick} isSelected={this.isSelected(15)} />
          <Toggle id={25} label="25%" onClick={this.handleOnClick} isSelected={this.isSelected(25)} />
          <Toggle id={50} label="50%" onClick={this.handleOnClick} isSelected={this.isSelected(50)} />
          <Input  value={this.state.customTip} placeholder="Custom" onChange={this.handleOnChange}/>
        </div>
      </React.Fragment>
    )
  }
}