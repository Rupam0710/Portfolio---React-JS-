import React from "react";
//images
import logo1 from "../assets/logo1.svg";

import { Link } from "react-scroll";
const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo  */}
          <a href="#">
            <img src={logo1} alt="" />
          </a>
          {/* button  */}
          <Link to="contact" activeClass="active" smooth={true} spy={true}>
            <button className="btn btn-sm">Work with me</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
