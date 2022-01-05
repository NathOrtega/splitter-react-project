import React from "react";

export default class Header extends React.Component {
  render(){
    const { title } = this.props
    return (
      <h1 className="title">
        {title}
      </h1>
    )
  }
}