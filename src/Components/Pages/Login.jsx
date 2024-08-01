import React, { useState } from "react";
import logo from "../../assets/Thrifty-logo.png";
import Google from "../../assets/Google.png";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Container covering half of the page for the logo */}
      <div className="w-full md:w-1/2 bg-[#371694] flex items-center justify-center">
        <img src={logo} alt="Thrifty-logo" className="max-w-full" />
      </div>
      {/* Container covering the other half of the page with the login form */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center">
        <div className="p-8 w-full mb-24">
          <h1 className="text-6xl text-[#371694] mb-20 flex items-center justify-center">
            Welcome Back!
          </h1>
          {/* code for the login form */}
          <form className="space-y-6 ">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 "
              ></label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                className="mt-1 block w-full px-4 py-4 border border-none rounded-md shadow-sm focus:outline-none focus:ring-[#371694] focus:border-[#371694] bg-[#F5F4F8] "
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                className="mt-1 block w-full px-4 py-4 border border-none rounded-md shadow-sm focus:outline-none focus:ring-[#371694] focus:border-[#371694] bg-[#F5F4F8]"
              />
            </div>
            <div className="text-left flex gap-2">
              <p className="text-[#9CA3AF]">Forgot password?</p>
              <a href="#" className="text-md text-[#371694] hover:underline">
                Click here
              </a>
            </div>
            <div className="flex justify-center ">
              <button
                type="submit"
                className="w-80  p-4 bg-[#A7A8FD] text-[#371694] text-2xl rounded-md hover:bg-blue-700 "
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-6 flex items-center justify-between font-bold">
            <span className="border-t w-1/4 "></span>
            <span className="text-sm text-gray-500">or</span>
            <span className="border-t w-1/4"></span>
          </div>
          <button
            type="submit"
            className="w-full mt-4 py-6 px-4 flex items-center justify-center border border-gray-800 border-bold rounded-md shadow-sm hover:bg-gray-100"
          >
            <img src={Google} alt="Google" className="w-5 h-5 mr-2" /> Sign Up
            with Google
          </button>
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-500">
              Need an account?{" "}
              <a href="#" className="text-[#371694] hover:underline">
                <NavLink to="/Sign-up">Sign Up</NavLink>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
