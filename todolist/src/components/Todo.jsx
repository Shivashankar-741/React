import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Listitems from "./Listitems";

class Todo extends Component {
  state = {
    item: [],
    items: {
      value: "",
      key: "",
    },
  };

  changeHandler = (e) => {
    this.setState({
      items: {
        value: e.target.value,
        key: uuidv4(),
      },
    });
  };

  clickHandler = () => {
    const changeValue = this.state.items.value;
    const item = [...this.state.item, changeValue];

    this.setState({
      item: item,
      items: {
        value: "",
        key: "",
      },
    });

    console.log(this.state.items.value, this.state.item);
  };

  render() {
    return (
      <div className="container">
        <div className="todo">
          <input
            type="text"
            name=""
            id="inputText"
            onChange={this.changeHandler}
            value={this.state.items.value}
          />
          <button id="inputButton" onClick={this.clickHandler}>
            Add todo
          </button>
          <Listitems />
        </div>
      </div>
    );
  }
}

export default Todo;
