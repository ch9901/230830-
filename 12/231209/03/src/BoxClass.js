import React, { Component } from "react";

export default class BoxClass extends Component {
  render() {
    console.log(this.props);
    return <div>Box{this.props.value}</div>;
  }
}
