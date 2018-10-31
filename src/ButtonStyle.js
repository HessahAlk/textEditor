import React, { Component } from "react";

class ButtonStyle extends Component {
  render() {
    return (
      <button onClick={() => this.props.select(this.props.name)}>
        {this.props.name}
      </button>
    );
  }
}

export default ButtonStyle;
