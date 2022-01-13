import React from "react";

export default class Input extends React.Component {
  handleOnChange = (e) => {
    const { onChange } = this.props
    onChange(e.target.value)
  }

  render() {
    const { label, placeholder, icon: Icon, value, errorMessage, isValid } = this.props
    const isDecorated = label || Icon

    return (
      <React.Fragment>
        <div className={isDecorated ? "inputContainer" : "smallInput"}>
          { label && 
            <label htmlFor={label} className="label">
              {label}
              {!isValid && <span className="warning">{errorMessage}</span>}
            </label>
          }
          <div className={isDecorated ? "input" : null} style={!isValid ? {border: "2px solid #E17457"} : null}>
            { Icon && 
              <label htmlFor={label}>
                <Icon className="inputIcon" />
              </label>
            }
              <input value={value} onChange={this.handleOnChange} id={label} placeholder={placeholder} type="number"/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

Input.defaultProps = {
  value: "",
  placeholder: "",
}