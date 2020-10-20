import React, { Component } from "react";

class ClasscalUI extends Component {
  state = {
    arrVal: [],
    resarr: "",
    totVal: "",
  };

  secondFunc = (v) => {
    const funcarr = v.split("");
    for (let i = 0; i < funcarr.length; i++) {
      if (funcarr[i] === "+" || "-" || "/" || "*") {
        const indexSym = funcarr.indexOf(funcarr[i]);
        const one = parseInt(
          funcarr.slice(0, indexSym).reduce((a, b) => a + b, 0)
        );
        const two = parseInt(
          funcarr.slice(indexSym + 1).reduce((a, b) => a + b, 0)
        );
        if (funcarr[i] === "+") {
          console.log(one + two);
          this.setState({
            totVal: one + two,
          });
        } else if (funcarr[i] === "-") {
          console.log(one - two);
          this.setState({
            totVal: one - two,
          });
        } else if (funcarr[i] === "*") {
          console.log(one * two);
          this.setState({
            totVal: one * two,
          });
        } else if (funcarr[i] === "/") {
          console.log(one / two);
          this.setState({
            totVal: one / two,
          });
        }
      }
    }
  };

  addValue = (value) => {
    if (value !== "=") {
      this.setState({
        arrVal: this.state.arrVal.concat(value),
      });
    } else {
      let value = "";
      for (let i = 0; i < this.state.arrVal.length; i++) {
        value = value + this.state.arrVal[i];
      }
      this.setState({
        arrVal: [],
        resarr: value,
      });

      this.secondFunc(value);
    }
  };

  render() {
    console.log(this.state.arrVal);
    return (
      <div className="h-screen w-screen flex justify-center items-center ">
        <div className="grid h-auto grid-rows-10 grid-columns-8 gap-10 bg-red-200 ">
          <span className=" flex justify-center items-center bg-gray-600 border-solid border-4 border-gray-600 bg-black">
            {this.state.resarr}={this.state.totVal}
          </span>
          <span
            className="cursor-pointer flex justify-center items-center bg-gray-600 border-solid border-4 border-gray-600 bg-black  "
            onClick={() => this.addValue(0)}
          >
            0
          </span>
          <span
            className="cursor-pointer  flex justify-center items-center bg-gray-600 border-solid border-4 border-gray-600 bg-black "
            onClick={() => this.addValue(1)}
          >
            1
          </span>
          <span
            className="cursor-pointer flex justify-center items-center bg-gray-600 border-solid border-4 border-gray-600 bg-black"
            onClick={() => this.addValue(2)}
          >
            2
          </span>
          <span
            className="cursor-pointer  flex justify-center items-center bg-gray-600 border-solid border-4 border-gray-600 bg-black"
            onClick={() => this.addValue(3)}
          >
            3
          </span>
          <span
            className="cursor-pointer  flex justify-center items-center bg-gray-600 border-solid border-4 border-gray-600 bg-black"
            onClick={() => this.addValue(4)}
          >
            4
          </span>
          <span
            className="cursor-pointer  flex justify-center items-center bg-gray-600 border-solid border-4 border-gray-600 bg-black"
            onClick={() => this.addValue(5)}
          >
            5
          </span>
          <span
            className="cursor-pointer  flex justify-center items-center bg-gray-600 border-solid border-4 border-gray-600 bg-black"
            onClick={() => this.addValue(6)}
          >
            6
          </span>
          <span
            className="cursor-pointer  flex justify-center items-center bg-gray-600 border-solid border-4 border-gray-600 bg-black"
            onClick={() => this.addValue(7)}
          >
            7
          </span>
          <span
            className="cursor-pointer flex justify-center items-center bg-gray-600 border-solid border-4 border-gray-600 bg-black "
            onClick={() => this.addValue(8)}
          >
            8
          </span>
          <span
            className="cursor-pointer flex justify-center items-center bg-gray-600 border-solid border-4 border-gray-600 bg-black"
            onClick={() => this.addValue(9)}
          >
            9
          </span>
          <span
            className="cursor-pointer flex justify-center items-center bg-gray-600 border-solid border-4 border-gray-600 bg-black "
            onClick={() => this.addValue("+")}
          >
            +
          </span>
          <span
            className="cursor-pointer flex justify-center items-center bg-gray-600 border-solid border-4 border-gray-600 bg-black "
            onClick={() => this.addValue("-")}
          >
            -
          </span>
          <span
            className="cursor-pointer flex justify-center items-center bg-gray-600 border-solid border-4 border-gray-600 bg-black "
            onClick={() => this.addValue("*")}
          >
            *
          </span>
          <span
            className="cursor-pointer flex justify-center items-center bg-gray-600 border-solid border-4 border-gray-600 bg-black "
            onClick={() => this.addValue("/")}
          >
            /
          </span>
          <span
            className="cursor-pointer flex justify-center items-center bg-gray-600 border-solid border-4 border-gray-600 bg-black"
            onClick={() => this.addValue("=")}
          >
            =
          </span>
        </div>
      </div>
    );
  }
}

export default ClasscalUI;
