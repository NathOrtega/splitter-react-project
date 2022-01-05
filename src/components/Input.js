import React from "react";

export default class Input extends React.Component {
  handleOnChange = (e) => {
    const { onChange } = this.props
    onChange(e.target.value)
  }

  render() {
    const { label, placeholder, icon: Icon, value } = this.props
    return (
      <React.Fragment>
        { (label && Icon) 
          ?
            <div className="inputContainer">
              <label htmlFor={label} className="label">
                {label}
                {value === "0" && <span className="warning">Can't be zero</span>}
              </label>
              <div className="input" style={value === 0 ? {border: "2px solid #E17457"} : null}>
                <label htmlFor={label}>
                  <Icon className="inputIcon" />
                </label>
                  <input value={value} onChange={this.handleOnChange} type="number" id={label} placeholder={placeholder} />
              </div>
            </div>
          :
          <input value={value} onChange={this.handleOnChange} type="number" placeholder={placeholder} className="smallInput" />
        }
      </React.Fragment>
    )
  }
}

Input.defaultProps = {
  value: "",
  placeholder: "",
}