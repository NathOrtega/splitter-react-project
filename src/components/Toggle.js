import React from "react";

const activeStyle = {
  color: "var(--dark300)",
  backgroundColor: "var(--light400)",
}

export default function Toggle({ id, label, isSelected, onClick }) {
  const handleOnClick = () => {
    onClick(id)
  }

  return(
    <button className="toggle" onClick={handleOnClick} style={isSelected ? activeStyle : null}>
      {label}
    </button>
  )
}