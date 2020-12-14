import React, { useState } from "react";

const SearchBar = () => {
	const [value, setValue] = useState("");
	const [userName, setUserName] = useState("");

	const changeHandler = (e) => {
		setValue(e.target.value);
	};

	const enterPressed = (e) => {
		let keycode = e.keyCode || e.which;
		if (keycode === 13 && e.target.value !== "") {
			console.log(value);
			setUserName(value);
			e.target.value = "";

			// fetch(`https://api.github.com/users/${value}`)
			// 	.then((res) => res.json())
			// 	.then((data) => console.log(data));
		}
	};
	// console.log(userName);

	return (
		<div className="inputField">
			<input
				type="text"
				placeholder="Search for a user..."
				className="inputFieldIn"
				name=""
				id=""
				onChange={changeHandler}
				onKeyPress={enterPressed}
			/>
		</div>
	);
};

export default SearchBar;
