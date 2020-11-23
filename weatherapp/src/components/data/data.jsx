import React from "react";
import "./data.css";

const Data = (props) => {
	props.data.length = 1;
	console.log(props.notfound);

	return (
		<div className="Output">
			{props.data.map((el, index) => {
				return (
					<div div key={index + 1} className="box">
						<h2 key={index + 5}>
							Weather for today <small>{el.applicable_date}</small>
						</h2>
						<h3>
							<span>Country :</span>
							{props.country}
						</h3>
						<h3>
							<span>City:</span>
							{props.title}
						</h3>
						<h3 key={index + 2}>
							<span>Weather :</span>
							{el.weather_state_name}
						</h3>
						<h3 key={index + 3}>
							{" "}
							<span>Date :</span>
							{el.applicable_date}
						</h3>
						<h3 key={index + 4}>
							<span>Temperature :</span>
							{el.the_temp} 'C
						</h3>
					</div>
				);
			})}
			<h1 className="notfound">{props.notfound}</h1>
		</div>
	);
};

export default Data;
