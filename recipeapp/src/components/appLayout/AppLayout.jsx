import React, { useState } from "react";
import Cards from "../cards/cards";
import "./AppLayout.css";

const AppLayout = () => {
	const [change, setchange] = useState("");
	const [data, setData] = useState([]);

	const changeHandler = (e) => {
		setchange(e.target.value);
	};

	const enterPressed = (e) => {
		let keycode = e.keyCode || e.which;
		if (keycode === 13) {
			console.log(change);
			e.target.value = "";

			const APP_ID = "4c8e9f7b";
			const APP_KEY = "e8f4960651f0c61be77bc1173093e860";

			const URL = `https://api.edamam.com/search?q=${change}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10`;

			fetch(URL)
				.then((response) => {
					console.log(response);
					return response.json();
				})
				.then((result) => {
					console.log(result);
					console.log(result.hits);
					setData(result.hits);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	return (
		<div className="app-container">
			<div className="header">
				<h1>Recipe</h1>
			</div>
			<input
				className="search-recipe"
				type="text"
				onChange={changeHandler}
				onKeyPress={enterPressed}
			/>
			<div className="cards">
				<Cards inputValue={data} />
			</div>
		</div>
	);
};

export default AppLayout;
