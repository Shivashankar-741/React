import React, { Component } from "react";
import "./controller.css";
import Data from "../data/data";

class Controller extends Component {
	state = {
		dataValue: [],
		country: "",
		title: "",
		notfound: "",
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
				if (data.length) {
					data.forEach((el) => {
						fetch(
							`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${el.woeid}`
						)
							.then((result) => {
								return result.json();
							})
							.then((data) => {
								console.log(data);
								this.setState({
									dataValue: data.consolidated_weather,
									title: data.title,
									country: data.parent.title,
									notfound: "",
								});
							})
							.catch((error) => console.log(error));
					});
				} else {
					console.log("data not found");
					this.setState({
						dataValue: [],
						country: "",
						title: "",
						notfound: "Data not found try another country/city",
					});
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
		console.log(this.state.dataValue);

		return (
			<div>
				<input
					placeholder="search for a city/country"
					className="inputField"
					type="text"
					onChange={this.changeValue}
					onKeyPress={this.enterPressed}
				/>
				<Data
					data={this.state.dataValue}
					title={this.state.title}
					country={this.state.country}
					notfound={this.state.notfound}
				/>
			</div>
		);
	}
}

export default Controller;
