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

// <div className="IngredientList">
// 	{[props.location.data].map((elem, idx) => (
// 		<div className="IngredientList-container" key={idx}>
// 			<div className="ingredientList-image-container">
// 				<img src={elem.image} alt="" className="ingredient-image" />
// 			</div>
// 			<div className="IngredientList-ingredients">
// 				<h1>Ingredients</h1>
// 				<div className="IngredientList-cards">
// 					{elem.ingredients.map((el, ind) => (
// 						<div className="inner-card">
// 							<div className="inner-card-img">
// 								<img src={el.image} alt="" className="card-img" />
// 							</div>
// 							<div className="inner-card-details">
// 								<span className="text">{el.text}</span>
// 								<br/>
// 								<span className="weight">{el.weight}</span>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	))}
// </div>
