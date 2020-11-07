import React from "react";
import Icons from "../../components/icons/icons";
import userImg from "../../images/userImage.jpg";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-primary-100  to-pfonts-100">
      <div
        className=" md:flex md:justify-around md:py-16
      lg:flex lg:justify-around lg:py-16 
      xl:flex xl:justify-around xl:py-16  
      sm:flex sm:flex-col items-center sm:text-center"
      >
        <div
          className="md:flex md-max:mr-20
        lg:flex lg-max:mr-20
        xl:flex xl-max:mr-20
        sm:flex sm:flex-col"
        >
          <div className="w-24 sm:ml-24 sm:pb-4">
            <img src={userImg} alt="userImg" className="rounded-full" />
          </div>
          <div className="md:ml-12 lg:ml-12 xl:ml-12 ">
            <h1 className="text-4xl italic font-bold tracking-wide text-heading-100">
              Shiva shankar
            </h1>
            <h3 className="pt-1 font-light text-2xl text-pfonts-200">Front End Developer</h3>
            <Icons />
          </div>
        </div>

        <div
          className="md:flex md:items-center
        lg:flex lg:items-center
        xl:flex xl:items-center
        sm:mt-12"
        >
          <button className="bg-blue-400 px-3 py-2 text-white font-semibold rounded">
            Check Blog
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
