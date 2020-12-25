import React from "react";
import "./Heroone.css";
import illustration2 from "../../../assets/illustration/Illustration 2.png";
import Pointer from "../Pointer/Pointer";
const Heroone = () => {
	return (
		<div className="Heroone">
			<div className="heroImg">
				<img src={illustration2} alt="" className="heroImgin" />
			</div>
			<div className="learnMore">
				<div className="learnMorein">
					<h3 className="quote">Teach what you know</h3>
					<p className="p-tag">
						You can make money by teaching with your surrounding people.
					</p>
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
		</div>
	);
};

export default Heroone;
