import React from "react";
import logo from "./../../../Public/logo-blk-bg.png";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Dropdown from "./DropDown";

function Header() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <div className="navbar flex justify-between items-center p-1.5 bg-primaryBlue text-white sticky top-0 z-10">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <nav>
          <ul className="hidden md:flex justify-between space-x-7 lg:space-x-20">
            <li className="dropdown">
              <Dropdown />
            </li>
            <li className="">
              <a href="/">Home</a>
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
          <ul className="hidden md:flex space-x-10 items-center">
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className="bg-purple text-blue font-bold rounded p-2 px-6">
              <NavLink to="/sign-up">Sign Up</NavLink>
            </li>
          </ul>
        </div>
        {/* hamburger */}
        <button className="group space-y-1 group md:hidden">
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
          {/* menu */}
          <ul className="bg-primaryBlue w-screen pb-10 absolute -top-full group-focus:top-0 right-0 duration-150 flex flex-col space-y-3 justify-end">
            <button className="px-10 py-8 relative ml-auto">
              <div className="w-6 h-1 rotate-45 absolute bg-[#FFFFFF]"></div>
              <div className="w-6 h-1 -rotate-45 absolute bg-[#FFFFFF]"></div>
            </button>
            <li className="flex justify-center w-full py-4 hover:bg-[#D9D9D9]">
              <a href="#home">Home</a>
            </li>
            <li className="flex justify-center w-full py-4 hover:bg-[#D9D9D9]">
              <a href="#about">About</a>
            </li>
            <li className="flex justify-center w-full py-4 hover:bg-[#D9D9D9]">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </button>
      </div>
    </>
  );
}

export default Header;
