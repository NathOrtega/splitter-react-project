import React from "react";
import Toggle from "./Toggle";
import Input from "./Input";

export default class TipSelector extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p className="label">
          {this.props.title}
        </p>
        <div className="togglesContainer">
          <Toggle label="5%" />
          <Toggle label="10%" />
          <Toggle label="15%" />
          <Toggle label="25%" />
          <Toggle label="50%" />
          <Input placeholder="Custom" />
        </div>
      </React.Fragment>
    )
  }
}