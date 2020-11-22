import React from "react";
import "./data.css";

const Data = (props) => {
	console.log(props);

	return (
		<div className="Output">
			{props.data.map((el, index) => {
				return (
					<div key={index + 1}>
						<h2>{props.notfound}</h2>
						<h2>Country:{props.country}</h2>
						<h2>City:{props.title}</h2>
						<h2 key={index + 2}>Weather :{el.weather_state_name}</h2>
						<h2 key={index + 3}> Date :{el.applicable_date}</h2>
						<h2 key={index + 4}>Temperature :{el.the_temp} 'C</h2>
					</div>
				);
			})}
		</div>
	);
};

export default Data;
