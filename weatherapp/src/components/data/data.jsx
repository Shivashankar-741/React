import React from "react";

// i have to pass over the array of objects as props and do map in below func.
// seperate props changing the ui only
const Data = (props) => {
	return (
		<div>
			<h2>country:{props.country}</h2>
			<h2>data:{props.date}</h2>
			<h2>temperature:{props.temperature}</h2>
			<h2>Abbreviation:{props.weatherabbr}</h2>
			<h2>weather:{props.weathername}</h2>
		</div>
	);
};

export default Data;
