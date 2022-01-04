import React from "react";

export default class Input extends React.Component {
  state = {
    value: "",
  }

  handleOnChange = (e) => {
    this.setState({
      value: Number(e.target.value)
    }, () => {
      this.props.onChange(this.state.value)
    })
  }

  render() {
    const { label, placeholder, icon: Icon } = this.props
    return (
      <React.Fragment>
        { (label && Icon) 
          ?
            <div className="inputContainer">
              <label htmlFor={label} className="label">
                {label}
              </label>
              <div className="input">
                <label htmlFor={label}>
                  <Icon className="inputIcon" />
                </label>
                  <input value={this.state.value} onChange={this.handleOnChange} type="number" id={label} placeholder={placeholder} />
              </div>
            </div>
          :
          <input value={this.state.value} onChange={this.handleOnChange} type="number" placeholder={placeholder} className="smallInput" />
        }
      </React.Fragment>
    )
  }
}