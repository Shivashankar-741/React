import React, { useContext } from "react";
import { AppContext } from "../../Components/AppContext/AppContext";

const Body = () => {
	const value = useContext(AppContext);
	console.log(value);

	// if (value !== "") {
	// 	fetch(`https://api.github.com/users/${value}`)
	// 		.then((res) => res.json())
	// 		.then((data) => console.log(data));
	// }
	return (
		<div className="body">
			<h1>Body</h1>
			<h2>{value}</h2>
		</div>
	);
};
export default Body;
