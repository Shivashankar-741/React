import React from "react";
import "./Herotwo.css";
import illustration1 from "../../../assets/illustration/Illustration 1.png";
import Pointer from "../Pointer/Pointer";
const Herotwo = () => {
	return (
		<div className="Heroone">
			<div className="learnMore">
				<div className="learnMorein">
					<h3 className="quote">Build, Teach and Make!</h3>
					<p className="p-tag">Create your own brand in Teacho.</p>
					<div className="btn-container">
						<div className="btnIn">
							<a href=" #" className="btn-learnmore">
								Learn More
							</a>
						</div>
						<Pointer />
					</div>
				</div>
			</div>
			<div className="heroImg">
				<img src={illustration1} alt="" className="heroImgin" />
			</div>
		</div>
	);
};

export default Herotwo;
