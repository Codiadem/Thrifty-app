import React, { useState } from "react";
import logo from "../../assets/Thrifty-logo.png";
import Google from "../../assets/Google.png";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed up: ", userCredential.user);
      navigate("/login");
    } catch (error) {
      console.error("Signup error: ", error);
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/Home");
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Container covering half of the page for the logo and the hamburger menu on smaller screens*/}
      <div className="w-full md:w-1/2 bg-[#fff] md:bg-[#371694] flex items-center justify-between p-4 md:p-0 md:flex-col md:justify-center md:items-center">
        <img
          src={logo}
          alt="Thrifty-logo"
          className="h-12 md:h-auto bg-[#371694]"
        />
        <button
          className="md:hidden text-[#371694] text-3xl"
          onClick={toggleMenu}
        >
          &#9776; {/* Hamburger menu icon */}
        </button>
      </div>

      {/* Container covering the login form */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center">
        <div className="p-8 w-full mb-24">
          <h1 className="text-4xl md:text-6xl text-[#371694] mb-10 md:mb-20 text-center">
            {menuOpen ? "Login" : "Welcome Back!"}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                onClick={handleLogin}
                type="submit"
                className="w-80  p-4 bg-[#A7A8FD] text-[#371694] text-2xl rounded-md hover:bg-blue-700 "
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-6 flex items-center justify-between font-bold">
            <span className="border-t w-1/4 "></span>
            <span className="text-sm text-gray-500">OR</span>
            <span className="border-t w-1/4"></span>
          </div>
          <button
            onClick={handleGoogleSignIn}
            type="submit"
            className="w-full mt-4 py-6 px-4 flex items-center justify-center border border-gray-800 border-bold rounded-md shadow-sm hover:bg-gray-100 font-bold"
          >
            <img src={Google} alt="Google" className="w-9 h-9 mr-2" />
            Login with Google
          </button>
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-500 text-[#9CA3AF]">
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
