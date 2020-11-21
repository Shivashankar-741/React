import React, { Component } from "react";
import "./controller.css";
import Data from "../data/data";

class Controller extends Component {
	state = {
		searchValue: "",
		dataValue: "",
		country: "",
		Date: "",
		Temperature: "",
		weatherAbbr: "",
		weatherName: "",
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
								console.log(
									data.consolidated_weather[0],
									data.title,
									data.parent.title
								);
								this.setState({
									// dataValue: data
									country: data.parent.title,
									Date: data.consolidated_weather[0].applicable_date,
									Temperature: data.consolidated_weather[0].the_temp,
									weatherAbbr: data.consolidated_weather[0].weather_state_abbr,
									weatherName: data.consolidated_weather[0].weather_state_name,
								});
							})
							.catch((error) => console.log(error));
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
					country={this.state.country}
					date={this.state.Date}
					temperature={this.state.Temperature}
					weatherabbr={this.state.weatherAbbr}
					weathername={this.state.weatherName}
				/>
				;
			</div>
		);
	}
}

export default Controller;
