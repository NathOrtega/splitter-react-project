import React from "react";

export default class Input extends React.Component {
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
                  <input type="number" id={label} placeholder={placeholder} />
              </div>
            </div>
          :
          <input type="number" placeholder={placeholder} className="smallInput" />
        }
      </React.Fragment>
    )
  }
}