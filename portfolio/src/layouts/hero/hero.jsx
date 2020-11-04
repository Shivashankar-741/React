import React from "react";
import BackgroundImage from "../../images/coverimage.jpg";

const sectionStyle = {
  backgroundImage: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  opacity: "0.6",
};

const Hero = () => {
  return (
    <div className="bg-black height-90 hero-bg-img" style={sectionStyle}>
      <div className="z-10 text-white flex flex-col justify-center items-center ">
        <h1 className="text-3xl font-bold mt-10">Hello</h1>
        <h1>I'm Shiva shankar</h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui debitis, illum
          velit repellendus accusamus odit ullam consequatur praesentium quasi?
        </h3>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium adipisci minus sed
          ipsa earum laboriosam odio exercitationem numquam, provident tempora!
        </h3>
      </div>
    </div>
  );
};

export default Hero;
