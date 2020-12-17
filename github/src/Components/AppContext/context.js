import { createContext, useContext } from "react";

export const AppContext = createContext({ value: "", setValue: () => {} });

export const useApp = () => {
	const { value, setValue } = useContext(AppContext);
	return [value, setValue];
};
