import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout.jsx";
import IngredientList from "./components/IngredientList/IngredientList.jsx";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={AppLayout} />
				<Route path="/ingredients" exact component={IngredientList} />
			</Switch>
		</Router>
	);
}

export default App;
