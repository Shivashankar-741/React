import React from "react";
import "./cards.css";

const Cards = (prop) => {
	console.log(prop.inputValue);

	return (
		<ul className="cards">
			{prop.inputValue.map((el, ind) => (
				<li className="cards_item" key={ind}>
					<div className="card">
						<div className="card_image">
							<img className="card_imageIn" src={el.recipe.image} alt="" />
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};

export default Cards;
