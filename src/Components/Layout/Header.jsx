import React from "react";
import logo from "../../images/logo-white-bg.png";

function Header() {
  return (
    <>
      <div className="navbar flex justify-between items-center p-1.5">
        <img src={logo} alt="logo" />
        <nav>
          <ul className="flex justify-between space-x-20">
            <li className="">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="opt">
          <ul className="flex space-x-10 items-center">
            <li>
              <a href="#login">Login</a>
            </li>
            <li className="border-2 border-primaryBlue rounded p-2">
              <a href="#signup">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
