import React from "react";
import "./JoinUs.css";
import JoinUs1 from "../../../assets/icons/JoinUs1.svg";
import JoinUs2 from "../../../assets/icons/JoinUs2.svg";
import JoinUs3 from "../../../assets/icons/JoinUs3.svg";
const JoinUs = () => {
	return (
		<div className="JoinUs">
			<div className="JoinUs--header">
				<h2>Why join us?</h2>
			</div>
			<div className="JoinUs--cards">
				<div className="joinUs--cards__details">
					<img src={JoinUs1} alt="" className="JoinUs--svg" />
					<h3 className="JoinUs--tag">Good content quality.</h3>
					<p className="JoinUs--description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
						soluta tenetur aliquam quam placeat numquam maxime quidem modi
						reprehenderit ratione.
					</p>
				</div>
				<div className="joinUs--cards__details">
					<img src={JoinUs2} alt="icons" className="JoinUs--svg" />

					<h3 className="JoinUs--tag">your learning will be easy.</h3>
					<p className="JoinUs--description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
						soluta tenetur aliquam quam placeat numquam maxime quidem modi
						reprehenderit ratione.
					</p>
				</div>
				<div className="joinUs--cards__details">
					<img src={JoinUs3} alt="" className="JoinUs--svg" />

					<h3 className="JoinUs--tag">We won't waste your time</h3>
					<p className="JoinUs--description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
						soluta tenetur aliquam quam placeat numquam maxime quidem modi
						reprehenderit ratione.
					</p>
				</div>
			</div>
		</div>
	);
};

export default JoinUs;
