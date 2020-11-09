import React from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";

const Icons = () => {
  return (
    <IconContext.Provider value={{ color: "#def2f1", size: "2em" }}>
      <ul className="flex pt-6">
        <li className="pr-3">
          <a href="https://github.com/Shivashankar741">
            <FaGithub />
          </a>
        </li>
        <li className="px-3">
          <a href="https://www.hackerrank.com/shiva1894300">
            <SiHackerrank />
          </a>
        </li>
        <li className="px-3">
          <a href="https://www.linkedin.com/in/shivashankar10">
            <FaLinkedinIn />
          </a>
        </li>
        <li className="px-3">
          <a href="# ">
            <FaTwitter />
          </a>
        </li>
        <li className="px-3">
          <a href="# ">
            <FiInstagram />
          </a>
        </li>
      </ul>
    </IconContext.Provider>
  );
};

export default Icons;
