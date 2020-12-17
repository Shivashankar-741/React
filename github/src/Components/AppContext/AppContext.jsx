import React, { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
	return (
		<AppContext.Provider value={"hellowsdss"}>
			{props.children}
		</AppContext.Provider>
	);
};
