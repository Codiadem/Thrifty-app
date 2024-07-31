import React from "react";
import logo from "../../assets/Thrifty-logo.png";


const LoginPage = () => {
  return (
    <div className="flex h-screen">
      {/* Container covering half of the page for the logo */}
      <div className="w-1/2 bg-[#371694] flex items-center justify-center">
        <img src={logo} alt="Thrifty-logo" className="max-w-full" />
      </div>
      {/* Container covering the other half of the page with the login form */}
      <div className="w-1/2 bg-white flex items-center justify-center">
        <div className="p-8">
          <h1 className="text-6xl text-[#371694] mb-8">Welcome Back!</h1>
          {/* code for the login form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="email"  className="block text-sm font-medium text-gray-700 "></label>
              <input type="email" placeholder="Email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#371694] focus:border-[#371694]"/>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700"></label>
              <input type="password" placeholder="Password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#371694] focus:border-[#371694]" />
            </div>
            <div className="text-left">
              <a href="#" className="text-sm text-[#371694] hover:underline">Forgot Password? Click here</a>
            </div>
            <button type="submit" className="w-full py-2 px-4 bg-[#A7A8FD] text-white rounded-md hover:bg-blue-700">Login</button>
          </form>
          <div className="mt-6 flex items-center justify-between">
            <span className="border-t w-1/4"></span>
            <span className="text-sm text-gray-500">or</span>
            <span className="border-t w-1/4"></span>
          </div>
          <button className="w-full mt-4 py-2 px-4 flex items-center justify-center border border-gray-300 rounded-md shadow-sm hover:bg-gray-100">
            <img src="path/to/google-icon.png" alt="Google" className="w-5 h-5 mr-2" /> Sign Up with Google
          </button>
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-500">Need an account? <a href="#" className="text-[#371694] hover:underline">Sign Up</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
