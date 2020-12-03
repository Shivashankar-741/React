import React, { useState } from "react";
import Cards from "../cards/cards";
import "./AppLayout.css";

const AppLayout = () => {
	const APP_ID = "4c8e9f7b";
	const APP_KEY = "e8f4960651f0c61be77bc1173093e860";

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

			const URL = `https://api.edamam.com/search?q=${change}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`;

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

	React.useEffect(() => {
		const URL = `https://api.edamam.com/search?q=mutton&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`;

		fetch(URL)
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((result) => {
				setData(result.hits);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="app-container">
			<div className="header-input">
				<div className="header">
					<h1>Recipe</h1>
				</div>
				<div className="input-field">
					<input
						className="search-recipe"
						type="text"
						onChange={changeHandler}
						onKeyPress={enterPressed}
						placeholder="Search your recipe..."
					/>
				</div>
			</div>

			<Cards inputValue={data} />
		</div>
	);
};

export default AppLayout;
