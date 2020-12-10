import React from "react";
import "./Herothree.css";
import illustration3 from "../../../assets/illustration/Illustration 3.png";
import Pointer from "../Pointer/Pointer";
const Herothree = () => {
	return (
		<div className="Heroone">
			<div className="heroImg">
				<img src={illustration3} alt="" className="heroImgin" />
			</div>
			<div className="learnMore">
				<div className="learnMorein">
					<h3 className="quote">Join with 50,000+ creators!</h3>
					<p className="p-tag">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
						molestias distinctio quas repellat totam mollitia ipsam, aliquid
						excepturi quidem dolor.
					</p>
					<div className="btn-container">
						<div className="btnIn">
							<a href=" #" className="btn-learnmore">
								View Pricing
							</a>
						</div>
						<Pointer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Herothree;
