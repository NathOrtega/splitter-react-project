import React from "react";

export default class Toggle extends React.Component {
  render() {
    return(
      <React.Fragment>
        <button className="toggle">
          {this.props.label}
        </button>
      </React.Fragment>
    )
  }
}