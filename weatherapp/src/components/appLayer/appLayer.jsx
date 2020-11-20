import "./appLayer.css";
import React from "react";
import Controller from "../controller/controller";
import img from "../../images/weatherimage.jpg";

const AppLayer = () => {
	return (
		<div className="AppLayer">
			<div className="AppLayer__layer">
				<img src={img} alt="weatherImage" className="image" />
				<div className="Inputform">
					<Controller />
				</div>
			</div>
		</div>
	);
};

export default AppLayer;
