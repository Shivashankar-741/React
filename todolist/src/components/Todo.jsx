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
    const changeValue = this.state.items;
    if (changeValue.value !== "") {
      const item = [...this.state.item, changeValue];
      this.setState({
        item: item,
        items: {
          value: "",
          key: "",
        },
      });
      this.input.current.focus();
    }
  };

  deleteHandler = (keyValue) => {
    console.log("this list is deleted");
    const changeItem = this.state.item.filter((item) => item.key !== keyValue);
    this.setState({ item: changeItem });
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
            ref={this.input}
          />
          <button id="inputButton" onClick={this.clickHandler}>
            Add todo
          </button>
          <Listitems item={this.state.item} delete={this.deleteHandler} />
        </div>
      </div>
    );
  }
}

export default Todo;
