import React from "react";

const activeStyle = {
  color: "var(--dark300)",
  backgroundColor: "var(--light400)",
}

export default class Toggle extends React.Component {
  handleOnClick = () => {
    this.props.onClick(this.props.id)
  }

  render() {
    const { label, isSelected } = this.props

    return(
      <React.Fragment>
        <button className="toggle" onClick={this.handleOnClick} style={isSelected ? activeStyle : null}>
          {label}
        </button>
      </React.Fragment>
    )
  }
}