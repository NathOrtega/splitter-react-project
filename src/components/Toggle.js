import React from "react";

const activeStyle = {
  color: "var(--dark300)",
  backgroundColor: "var(--light400)",
}

export default class Toggle extends React.Component {
  handleOnClick = () => {
    const id = this.props.id
    this.props.onClick(id)
  }

  render() {
    return(
      <React.Fragment>
        <button className="toggle" onClick={this.handleOnClick} style={this.props.isSelected ? activeStyle : null}>
          {this.props.label}
        </button>
      </React.Fragment>
    )
  }
}