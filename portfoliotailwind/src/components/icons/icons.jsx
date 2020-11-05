import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";

const Icons = () => {
  return (
    <ul className="flex pt-4">
      <li className="px-4">
        <a href="# ">
          <FaGithub />
        </a>
      </li>
      <li className="px-4">
        <a href="# ">
          <SiHackerrank />
        </a>
      </li>
      <li className="px-4">
        <a href="# ">
          <FaLinkedinIn />
        </a>
      </li>
      <li className="px-4">
        <a href="# ">
          <FaTwitter />
        </a>
      </li>
      <li className="px-4">
        <a href="# ">*</a>
      </li>
    </ul>
  );
};

export default Icons;
