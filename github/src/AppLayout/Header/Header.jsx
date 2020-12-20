import React from "react";

import { useApp } from "../../Components/AppContext/AppContext";
import "./Header.css";

export const Header = () => {
	// const [name, setName] = useApp();
	const [, setName] = useApp();

	const enterPressed = (e) => {
		let keycode = e.keyCode || e.which;
		if (keycode === 13 && e.target.value !== "") {
			setName(e.target.value);
			console.log(e.target.value);
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
					onKeyPress={enterPressed}
				/>
			</div>
		</div>
	);
};
