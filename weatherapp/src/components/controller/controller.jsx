import React, { Component } from "react";
import "./controller.css";

class Controller extends Component {
	state = {
		searchValue: "",
	};

	getWeather = (woeid) => {
		fetch(
			`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${woeid}`
		)
			.then((result) => {
				// console.log(result);
				return result.json();
			})
			.then((data) => {
				// console.log(data);
				if (data.length) {
					data.forEach((el) => {
						console.log(el.title, el.woeid);
					});
				} else {
					console.log("data not found");
				}
			})
			.catch((error) => console.log(error));
	};

	changeValue = (e) => {
		this.setState({
			searchValue: e.target.value,
		});
	};

	enterPressed = (e) => {
		var code = e.keyCode || e.which;
		if (code === 13 && this.state.searchValue.length >= 2) {
			let countryName = this.state.searchValue;
			console.log(countryName);
			e.target.value = "";
			this.getWeather(countryName);
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
