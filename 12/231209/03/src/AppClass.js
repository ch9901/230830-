import React, { Component } from "react";
import BoxClass from "./BoxClass";
import "./AppClass.css";

export default class AppClass extends Component {
  componentWillUnmount() {
    console.log("byebye");
  }
  constructor(props) {
    super(props);
    this.state = {
      counter2: 0,
      value: 0,
    };
    console.log("constructure");
  }
  increase = () => {
    this.setState({
      counter2: this.state.counter2 + 1,
      value: this.state.value + 1,
    });
  };

  componentDidMount() {
    console.log("component did mount");
  }

  //useEffect
  componentDidUpdate() {
    console.log("componenet did update", this.state);
  }

  render() {
    console.log("render");
    console.log(this.props);
    return (
      <div className="AppClass">
        <div>{this.state.counter2}</div>
        <button onClick={this.increase}>Click</button>
        {this.state.counter2 < 3 && <BoxClass num={this.props.num} />}
      </div>
    );
  }
}
