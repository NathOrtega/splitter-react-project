import React, { useState, useEffect } from "react";
import Toggle from "./Toggle";
import Input from "./Input";
import { togglesInfo } from "../constants";

export default function TipSelector({ title, onTipChange, onCustomTipChange, tip, customTip }) {
  const handleOnClick = (id) => {
    onTipChange(id)
  }

  const isSelected = (id) => {
    return tip === id
  }

  const handleOnChange = (value) => {
    onCustomTipChange(value)
  }

  return (
    <React.Fragment>
      {title && <p className="label">{title}</p>}
      <div className="togglesContainer">
        {togglesInfo.map(({ label, id }) => {
            return (
              <Toggle key={id} id={id} label={label} onClick={handleOnClick} isSelected={isSelected(id)} />
            )
          })}
        <Input  value={customTip} placeholder="Custom" onChange={handleOnChange} isValid={true}/>
      </div>
    </React.Fragment>
  )
}