import React from "react";
import "./cards.css";

const Cards = (prop) => {
	console.log(prop.inputValue);

	return (
		<ul className="cards">
			{prop.inputValue.map((el) => (
				<li className="cards_item">
					<div className="card">
						<div className="card_image">
							<img src={el.recipe.image} alt="" />
						</div>
						<div className="card_content">
							<h2 className="card_title">{el.recipe.label}</h2>
							<p className="card_text">{el.recipe.label}</p>
							<button className="btn card_btn">Read More</button>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};

export default Cards;
