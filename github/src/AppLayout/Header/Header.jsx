import React, { useState } from "react";
import "./Header.css";
export const Header = () => {
	const [name, setName] = useState("");

	const changeHandler = (e) => {
		setName(e.target.value);
	};

	const enterPressed = (e) => {
		let keycode = e.keyCode || e.which;
		if (keycode === 13 && e.target.value !== "") {
			console.log(name);
			setName(name);
			e.target.value = "";
		}
	};

	return (
		<div className="Header">
			<div className="inputField">
				<input
					type="text"
					placeholder="Search a github user..."
					className="inputFieldIn"
					onChange={changeHandler}
					onKeyPress={enterPressed}
				/>
			</div>
		</div>
	);
};
