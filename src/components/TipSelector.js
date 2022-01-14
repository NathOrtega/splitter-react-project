import React, { useState, useEffect } from "react";
import Toggle from "./Toggle";
import Input from "./Input";
import { togglesInfo } from "../constants";

export default function TipSelector({ title, onChange }) {
  const [ tip, setTip ] = useState(0);
  const [ customTip, setCustomTip ] = useState("");

  useEffect(() => {
    onChange(tip)
  }, [tip])

  const handleOnClick = (id) => {
    setTip((prevTip) => prevTip === id ? 0 : id)
    setCustomTip("")
  }

  const isSelected = (id) => {
    return tip === id
  }

  const handleOnChange = (value) => {
    setTip(value)
    setCustomTip(value)
  }

  return (
    <React.Fragment>
      {title && <p className="label">{title}</p>}
      <div className="togglesContainer">
        {togglesInfo.map(({ label, id }) => {
            return (
              <Toggle id={id} label={label} onClick={handleOnClick} isSelected={isSelected(id)} />
            )
          })}
        <Input  value={customTip} placeholder="Custom" onChange={handleOnChange} isValid={true}/>
      </div>
    </React.Fragment>
  )
}