import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall } from "react-icons/md";
import { FiMail } from "react-icons/fi";

const Hero = () => {
  return (
    <main className="mt-10 mx-auto mb-4">
      <div className="mx-auto w-11/12 mt-10">
        <div
          className="
          xl:grid xl:grid-cols-10 xl:grid-rows-8
          lg:grid lg:grid-cols-10 lg:grid-rows-8
          md:grid md:grid-cols-7 md:grid-rows-23
          sm:grid sm:grid-cols-7 sm:grid-rows-23
        "
        >
          <div
            className="bg-secondary-100 rounded-lg overflow-auto
            xl:col-start-1 xl:col-span-7 xl:row-start-1 xl:row-span-full
            lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-full
            sm:col-start-1 sm:col-span-7 sm:row-start-1 sm:row-span-12 sm:mb-4
            md:col-start-1 md:col-span-7 md:row-start-1 md:row-span-12 md:mb-4
           
          "
          >
            <h1 className="text-heading-100 font-bold text-3xl tracking-wide p-5">About Me👨‍💻</h1>
            <h3 className="px-4 text-2xl text-gray-700 font-light">
              Hi 👋, I'm Shiva shankar Front End Developer
            </h3>

            <p className="p-4 text-lg text-gray-700 font-light">
              I'm a front end Developer specialized in frontend and UX design 🛠. I have been
              developing cool applications for last 6 months. I write scalable and optimized code.
              Sometimes I do write blogs related to developement, data structures and algorithms. Do
              check out if your interested. Currently I'm 🤓 focused in Javascript and it's
              libraries and frameworks. You can ping me to discuss about how to write scalable
              javacript code or anything else related to JS.
            </p>

            <p className="p-4 text-lg text-gray-700 font-light">
              Currently i'm doing prefinal year of my bachelor's degree 👨‍🎓{" "}
              <span className="text-black font-semibold">2018-2022</span>. Apart from academics, I
              would like to work with like minded peoples and solving problems. lets ping me for
              colab and I'm interested to work with other developers.
            </p>
            <div className="p-4">
              <h3 className="bg-gray-600 inline font-semibold text-lg">Spare time 🕵🏼</h3>
              <p className="p-4 text-lg text-gray-800 font-light">
                I like to write blogs and doing projects. Apart from I watch youtube videos
                relatable to my projects{" "}
              </p>
            </div>
            <div className="p-4">
              <h3 className="bg-gray-600 inline font-semibold text-lg">Academics 📚 </h3>
              <p className="p-4 text-lg text-gray-800 font-light">
                I'm studying prefinal year in Rajalakshmi Engineering College, Chennai. Currently
                I'm having 8.2 cgpa in my academics
              </p>
            </div>
          </div>

          <div
            className="bg-secondary-100 rounded-lg
            xl:col-start-9 xl:col-span-3 xl:row-start-1 xl:row-span-2
            lg:col-start-9 lg:col-span-3 lg:row-start-1 lg:row-span-2
            md:col-start-1 md:col-span-7 md:row-start-13 md:row-span-3 md:mb-4
            sm:col-start-1 sm:col-span-7 sm:row-start-13 sm:row-span-3 sm:mb-4

          "
          >
            <h1 className="flex justify-center text-heading-100 p-2 font-bold text-3xl tracking-wide">
              Contact
            </h1>
            <div className="ml-12">
              <div>
                <div className="flex items-center px-4 py-2">
                  <HiLocationMarker className="" />
                  <h4 className="px-6 font-light text-2xl tracking-wide ">Chennai, India</h4>
                </div>
              </div>
              <div>
                <div className="flex items-center px-4 py-2">
                  <MdCall />
                  <h4 className="px-6 font-light text-lg tracking-wide">+91 7418940850</h4>
                </div>
              </div>
              <div>
                <div className="flex items-center px-4 py-1">
                  <FiMail />
                  <h4 className="px-6 font-light text-lg tracking-wide">shiva1894300@gmail.com</h4>
                </div>
              </div>
            </div>
          </div>

          <div
            className="bg-secondary-100 rounded-lg overflow-auto
          xl:col-start-9 xl:col-span-3 xl:row-start-4 xl:row-span-5
          lg:col-start-9 lg:col-span-3 lg:row-start-4 lg:row-span-5
          md:col-start-1 md:col-span-7 md:row-start-16 md:row-span-8 md:mb-4
          sm:col-start-1 sm:col-span-7 sm:row-start-16 sm:row-span-8 sm:mb-4

          "
          >
            <h1 className="flex justify-center text-heading-100 p-4 font-bold text-3xl tracking-wide">
              Skills
            </h1>
            <p className="px-6 py-2 text-lg text-gray-700 font-light">
              I have learned and used wide range of programming languages and technologies. I listed
              below the technologies I've expertised with these technologies.
            </p>
            <div className="px-6 py-2">
              <div className="p-4 sm:flex sm:flex-col ">
                <span className="px-6 text-lg bg-gray-800 inline-block mx-2 text-white sm:mb-2">
                  HTML
                </span>
                <span className="px-6 text-lg bg-gray-800 inline-block mx-2 text-white sm:mb-2">
                  CSS
                </span>
                <span className="px-6 text-lg bg-gray-800 inline-block mx-2 text-white sm:mb-2">
                  SASS
                </span>
                <span className="px-6 text-lg bg-gray-800 inline-block mx-2 text-white sm:mb-2">
                  Javascript
                </span>
              </div>
              <div className="p-4 sm:flex sm:flex-col ">
                <span className="px-6 text-lg bg-gray-800 inline-block mx-2 text-white sm:mb-2">
                  bootstrap
                </span>
                <span className="px-6 text-lg bg-gray-800 inline-block mx-2 text-white sm:mb-2">
                  Tailwind CSS
                </span>
                <span className="px-6 text-lg bg-gray-800 inline-block mx-2 text-white sm:mb-2">
                  SASS
                </span>
              </div>
              <div className="p-4  sm:flex sm:flex-col">
                <span className="px-6 text-lg bg-gray-800 inline-block mx-2 text-white sm:mb-2">
                  React
                </span>
                <span className="px-6 text-lg bg-gray-800 inline-block mx-2 text-white sm:mb-2">
                  Nodejs
                </span>
                <span className="px-6 text-lg bg-gray-800 inline-block mx-2 text-white sm:mb-2">
                  Git
                </span>
                <span className="px-6 text-lg bg-gray-800 inline-block mx-2 text-white sm:mb-2">
                  Javascript
                </span>
              </div>

              <div className="py-6 px-4 text-lg text-gray-800 font-light ">
                <p>
                  I have a good knowledge in above technologies and looking forward to work with
                  other developers.
                </p>
                <p className="pt-4">
                  <a
                    href="mailto:shiva1894300@gmail.com?subject = Feedback&body = Message"
                    className="bg-blue-300 px-2 py-1 rounded"
                  >
                    Hire me
                  </a>{" "}
                  I can do my task as smart as I can.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
