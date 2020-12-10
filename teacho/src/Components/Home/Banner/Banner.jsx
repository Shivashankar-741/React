import React from "react";
import "./Banner.css";

const Banner = () => {
	return (
		<div className="Banner">
			{/* <div className="curved upper">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#21556e"
						fill-opacity="1"
						d="M0,224L48,192C96,160,192,96,288,85.3C384,75,480,117,576,154.7C672,192,768,224,864,224C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
					></path>
				</svg>
			</div> */}
			<div className="curved">
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
					voluptas unde inventore modi voluptatem quasi dicta, doloribus
					officiis. Facere distinctio, perferendis beatae deserunt ipsa
					cupiditate adipisci voluptate recusandae in autem atque sapiente sed
					assumenda nostrum, animi illum omnis optio rem magnam voluptatibus
					maiores qui? Voluptates aperiam suscipit sequi atque eos?
				</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
					<path
						fill="#21556e"
						fill-opacity="1"
						d="M0,224L48,192C96,160,192,96,288,85.3C384,75,480,117,576,154.7C672,192,768,224,864,224C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
					></path>
				</svg>
			</div>
		</div>
	);
};

export default Banner;
