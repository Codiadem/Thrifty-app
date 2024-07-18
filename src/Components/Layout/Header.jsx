import React from "react";
import logo from "../../images/logo-white-bg.png";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <div className="navbar flex justify-between items-center p-1.5">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
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
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className="border-2 border-primaryBlue rounded p-2">
              <NavLink to="/sign-up">Sign Up</NavLink>
            </li>
          </ul>
        </div>
        {/* hamburger */}
        <button className="group space-y-1">
          <div className="w-6 h-1 bg-primaryBlue"></div>
          <div className="w-6 h-1 bg-primaryBlue"></div>
          <div className="w-6 h-1 bg-primaryBlue"></div>

          {/* menu */}
          <ul className="bg-primaryBlue w-screen pb-10 absolute top-full right-0 duration-150 flex flex-col space-y-3 justify-end">
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
        </button>
      </div>
    </>
  );
}

export default Header;
