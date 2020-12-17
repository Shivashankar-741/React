import * as React from "react";

import { AppContext } from "./context";

const { useState } = React;

export const AppProvider = (props) => {
	const [value, setValue] = useState("");
	// const data = { setValue, value: value };
	return (
		<AppContext.Provider value={{ setValue, value: value }}>
			{props.children}
		</AppContext.Provider>
	);
};
