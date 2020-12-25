import React from "react";
import "./Contacts.css";

const Contacts = () => {
	return (
		<div className="contacts">
			<div className="contact--details">
				<h1 className="contact--details__head">Teacho</h1>
				<p className="contact--details__para">
					You can make money by teaching with your surrounding people and your
					course will be published in teacho.
				</p>
			</div>

			<div className="contact--links">
				<div className="contact--links__head">
					<div className="contact--links__title">
						<h1>Explore</h1>
					</div>
					<div className="contact--links__lists">
						<h3>Features</h3>
						<h3>Courses</h3>
						<h3>Pricing</h3>
					</div>
				</div>
				<div className="contact--links__head">
					<div className="contact--links__title">
						<h1>Company</h1>
					</div>
					<div className="contact--links__lists">
						<h3>About</h3>
						<h3>Careers</h3>
						<h3>Blog</h3>
					</div>
				</div>
				<div className="contact--links__head">
					<div className="contact--links__title">
						<h1>Support</h1>
					</div>
					<div className="contact--links__lists">
						<h3>contact Support</h3>
						<h3>Privacy Policy</h3>
						<h3>Terms of Use</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
