import React, { Component } from "react";
import "./App.css";
import ButtonStyle from "./ButtonStyle";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styling: {
        bold: false,
        italic: false,
        underline: false
      },
      color: "black"

    };
    this.setStyle = this.setStyle.bind(this);
    this.chooseColor = this.chooseColor.bind(this);
  }

  setStyle(style) {
    const styling = { ...this.state.styling };
    styling[style] = !styling[style];
    this.setState({ styling: styling });
  }

  chooseColor(color) {
    this.setState({ color: color });
  }

  createStyleObject() {
    let style = {}
    if (this.state.styling['bold']) {
      style = {...style, ...styles.bold}
    }

    if (this.state.styling['italic']) {
      style = {...style, ...styles.italic}
    }

    if (this.state.styling['underline']) {
      style = {...style, ...styles.underline}
    }

    return style
  }

  render() {
    let stylings = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = stylings.map(style => {
      return (
        <button style={styles[style]} key={style}>
          {style}
        </button>
      );
    });


    // this.colors = ["yellow", "blue", "red", "black", "purple"];
    //

    let colorBoxes = colors.map(color => {
      return <button key={color} onClick={() => this.chooseColor(color)} style={{ backgroundColor: color, height: 30, width: 30 }} />;
    });

    return (
      <div className="App">
        <br />
        <ButtonStyle select={this.setStyle} name="bold" />
        <ButtonStyle select={this.setStyle} name="italic" />
        <ButtonStyle select={this.setStyle} name="underline" />
        <br />
        <br />
        <textarea style={{ color: this.state.color, ...this.createStyleObject() }}/>
        <br />
        {colorBoxes}
      </div>
    );
  }

}


export default App;
