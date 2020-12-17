import React from "react";
import { AppProvider } from "./Components/AppContext/AppContext.jsx";
import Body from "./AppLayout/Body/Body.jsx";
import { Header } from "./AppLayout/Header/Header.jsx";

function App() {
	return (
		<div className="App">
			<AppProvider>
				<Header />
				<Body />
			</AppProvider>
		</div>
	);
}

export default App;
