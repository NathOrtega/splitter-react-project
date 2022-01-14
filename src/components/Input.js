import React from "react";

export default function Input({ value, placeholder, label, icon: Icon, errorMessage, isValid, onChange }) {
  const isDecorated = label || Icon
  
  const handleOnChange = (e) => {
    onChange(e.target.value)
  }

  return (
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
          <input value={value} onChange={handleOnChange} id={label} placeholder={placeholder} type="number"/>
      </div>
    </div>
  )
}

Input.defaultProps = {
  value: "",
  placeholder: "",
}