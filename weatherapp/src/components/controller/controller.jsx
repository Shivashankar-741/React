import React, { Component } from "react";
import "./controller.css";

class Controller extends Component {
	state = {
		searchValue: "",
	};

	changeValue = (e) => {
		this.setState({
			searchValue: e.target.value,
		});
	};

	enterPressed = (e) => {
		var code = e.keyCode || e.which;
		if (code === 13 && this.state.searchValue.length >= 2) {
			console.log(this.state.searchValue);
			e.target.value = "";
		}
	};

	render() {
		return (
			<div>
				<input
					placeholder="search for a city/country"
					className="inputField"
					type="text"
					onChange={this.changeValue}
					onKeyPress={this.enterPressed}
				/>
			</div>
		);
	}
}

export default Controller;
