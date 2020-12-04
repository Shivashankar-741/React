import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import "./AppLayout.css";
import Loader from "react-loader-spinner";

const AppLayout = () => {
	const APP_ID = "4c8e9f7b";
	const APP_KEY = "e8f4960651f0c61be77bc1173093e860";

	const [change, setchange] = useState("");
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	const changeHandler = (e) => {
		setchange(e.target.value);
	};

	const enterPressed = (e) => {
		let keycode = e.keyCode || e.which;
		if (keycode === 13 && change !== "") {
			setData([]);
			setLoading(true);
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
					setLoading(false);
				})
				.catch((err) => {
					console.log(err);
					setLoading(false);
				});
		}
	};

	useEffect(() => {
		const URL = `https://api.edamam.com/search?q=mutton&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=12`;

		fetch(URL)
			.then((response) => {
				// console.log(response);
				return response.json();
			})
			.then((result) => {
				setData(result.hits);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	}, []);

	return (
		<div className="app-container">
			<div className="header-input">
				<div className="header">
					<h1>RecipeFinder</h1>
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

			{loading ? (
				<Loader
					className="loader"
					type="ThreeDots"
					color="#00BFFF"
					height={100}
					width={100}
				/>
			) : (
				<Cards inputValue={data} />
			)}
		</div>
	);
};

export default AppLayout;
