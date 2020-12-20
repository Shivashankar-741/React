import React, { useState, createContext, useContext } from "react";

const AppContext = createContext();

export const AppProvider = (props) => {
	const [value, setValue] = useState("");
	return (
		<AppContext.Provider value={{ value, setValue }}>
			{props.children}
		</AppContext.Provider>
	);
};

export const useApp = () => {
	const { value, setValue } = useContext(AppContext);
	return [value, setValue];
};
