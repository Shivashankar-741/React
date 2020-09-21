import React, { Component } from "react";
import ButtonComponent from "./buttonComponent";

class MainDisplay extends Component {
  state = {
    value: "",
    valuetwo: "",
    valueOutput: "",
  };

  changeHandler = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  changeHandlerTwo = (e) => {
    this.setState({
      valuetwo: e.target.value,
    });
  };

  ButtonComponentHandler = (valueone, valuetwo) => {
    console.log(valueone, valuetwo);

    const valueOutput = Math.floor(
      Math.random() * (valuetwo - valueone + 1) + valueone
    );
    console.log(valueOutput);
    this.setState({
      valueOutput,
    });
  };

  render() {
    return (
      <div className="displayApp">
        <div className="inApp">
          <h2>
            Random number <span>{this.state.valueOutput}</span>
          </h2>
          <div className="inputButtons">
            <label>Min</label>
            <input
              type="number"
              name=""
              id="minButton"
              //   value="10"
              onChange={this.changeHandler}
            />
            <label>Max</label>
            <input
              type="number"
              name=""
              id="maxButton"
              onChange={this.changeHandlerTwo}
            />
          </div>
          <ButtonComponent
            statevalue={this.state}
            btnHandler={this.ButtonComponentHandler}
          />
        </div>
      </div>
    );
  }
}

export default MainDisplay;
