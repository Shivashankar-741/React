import React from "react";
import "./Navbar.css";
import logo from "../../../assets/logo/Group 45.svg";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="logo">
				<h1 className="teacho">Teacho</h1>
				<div className="logoImg">
					<img src={logo} alt="logo" className="logoImgin" />
				</div>
			</div>
			<ul className="nav-list">
				<li>
					<a href=" #">Home</a>
				</li>
				<li>
					<a href=" #">Courses</a>
				</li>
				<li>
					<a href=" #">Pricing</a>
				</li>
				<li>
					<a href=" #">About</a>
				</li>
				<li>
					<a href=" #" className="btn">
						Get started
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
