import React, { Component } from "react";

class Counter1 extends Component {
  state = {
    count: 0,
    name: ""
  };

  componentDidMount() {
    document.title = `${this.state.name} has clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `${this.state.name} has clicked ${this.state.count} times`;
  }

  componentWillUnmount() {
    console.log("CLEAN UP");
  }

  handleIncrement = () =>
    this.setState(prevState => ({
      count: prevState.count + 1
    }));

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => this.setState({ name: e.target.value })}
        />
        <div>
          {this.state.name} has clicked {this.state.count} times
        </div>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default Counter1;
