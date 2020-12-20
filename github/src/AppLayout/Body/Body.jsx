import React, { useState } from "react";
import { useApp } from "../../Components/AppContext/AppContext";

const Body = () => {
	// const [data, setData] = useState([]);
	const [value, setValue] = useApp();
	console.log(value);
	fetch(`https://api.github.com/users/${value}`)
		.then((response) => response.json())
		.then((result) => console.log(result));

	return (
		<div className="body">
			<h2>{value}</h2>
		</div>
	);
};
export default Body;
