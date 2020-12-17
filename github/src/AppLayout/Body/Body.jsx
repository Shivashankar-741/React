import React, { useContext } from "react";
import { useApp } from "../../Components/AppContext/context";

const Body = () => {
	const [value] = useApp();
	console.log(value);

	return (
		<div className="body">
			<h1>Body</h1>
			<h2>{value}</h2>
		</div>
	);
};
export default Body;
