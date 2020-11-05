import React from "react";
import Icons from "../../components/icons/icons";

const Header = () => {
  return (
    <header className=" font-sans height-30 bg-gradient-to-r from-gray-600  to-gray-400">
      <div className="flex justify-around py-12 ">
        <div>
          <h1 className="text-gray-700 font-extrabold text-5xl tracking-wide">Shiva shankar</h1>
          <h5 className="text-2xl pt-1 text-gray-400 font-light tracking-wide">
            Web & Mobile Developer
          </h5>
          <Icons />
        </div>
        <div>
          <button className="bg-blue-400 px-3 py-2 text-white font-semibold rounded">
            Check My Blog
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
