import React from "react";
import "./IngredientList.css";

const IngredientList = (props) => {
	return (
		<div className="IngredientList">
			{[props.location.data].map((el, ind) => (
				<div className="IngredientList-container">
					<div className="IngredientList--image">
						<img
							src={el.image}
							alt="banner"
							className="IngredientList--image__inner"
						/>
					</div>
					<ul className="ingredient-cards">
						{el.ingredients.map((el, ind) => (
							<li className="ingredients-li">
								<div className="card-imageone">
									<img src={el.image} alt="" className="card-image" />
								</div>
								<span>{el.text}</span>
								<h4>{el.weight}g</h4>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default IngredientList;
