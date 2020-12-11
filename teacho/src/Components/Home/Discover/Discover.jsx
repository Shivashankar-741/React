import React from "react";
import "./Discover.css";
import Art from "../../../assets/illustration/Illustration Art Card.png";
import Business from "../../../assets/illustration/Illustration Business Card.png";
import Food from "../../../assets/illustration/Illustration Food Card.png";
const Discover = () => {
	return (
		<div className="Discover">
			<div className="Discover--header">
				<h2>Discover!</h2>
			</div>
			<div className="Discover--cards">
				<div className="Discover--cards__details">
					<img src={Art} alt="" className="Discover--img" />
					<h3 className="Discover--tag">Art</h3>
					<p className="Discover--description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
						soluta tenetur aliquam quam placeat numquam maxime quidem modi
						reprehenderit ratione.
					</p>
				</div>
				<div className="Discover--cards__details">
					<img src={Business} alt="" className="Discover--img" />
					<h3 className="Discover--tag">Business</h3>
					<p className="Discover--description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
						soluta tenetur aliquam quam placeat numquam maxime quidem modi
						reprehenderit ratione.
					</p>
				</div>
				<div className="Discover--cards__details">
					<img src={Food} alt="" className="Discover--img" />
					<h3 className="Discover--tag">Food</h3>
					<p className="Discover--description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
						soluta tenetur aliquam quam placeat numquam maxime quidem modi
						reprehenderit ratione.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Discover;
