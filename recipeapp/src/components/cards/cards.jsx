import React from "react";

const Cards = (prop) => {
	console.log(prop.inputValue);

	return (
		<div>
			{prop.inputValue.map((el) => (
				<h1 style={{ color: "green", fontSize: 20 }}>{el.recipe.label}</h1>
			))}
		</div>
	);
};

export default Cards;
