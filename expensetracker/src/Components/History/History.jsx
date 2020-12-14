import React from "react";

const History = ({ text, number }) => {
	return (
		<div className="History">
			<h1>{text}</h1>
			<h1>{number}</h1>
		</div>
	);
};

export default History;
