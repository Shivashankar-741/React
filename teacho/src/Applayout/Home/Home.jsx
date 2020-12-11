import React from "react";
import Navbar from "../../Components/Home/Navbar/Navbar";
import Heroone from "../../Components/Home/Heroone/Heroone";
import Herotwo from "../../Components/Home/Herotwo/Herotwo";
import Herothree from "../../Components/Home/Herothree/Herothree";
import JoinUs from "../../Components/Home/JoinUs/JoinUs";
import Discover from "../../Components/Home/Discover/Discover";
// import Banner from "../../Components/Home/Banner/Banner";

const Home = () => {
	return (
		<>
			<Navbar />
			<Heroone />
			<Herotwo />
			{/* <Banner /> */}
			<Herothree />
			<JoinUs />
			<Discover />
		</>
	);
};

export default Home;
