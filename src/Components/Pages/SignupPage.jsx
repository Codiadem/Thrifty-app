import React, { useState } from "react";
import logo from "../../assets/Thrifty-logo.png";
import mb_logo from "../../images/logo-white-bg.png";
import google from "../../assets/Google.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "../../style/Signup.css";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase";
import { doc, setDoc } from "firebase/firestore"; // Import Firestore methods
import { db } from "../../firebase";

const SignupPage = () => {
  {
    /* handle form data */
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  {
    /* handle form history and change */
  }

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  {
    /* handle form Submission */
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError("Passwords do not match !");
      return;
    }

    try {
      // Create the user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Save the user's name in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
      });

      // Save name to local storage
      localStorage.setItem("userName", name);

      navigate("/login");
    } catch (error) {
      setError(error.message || "Something went wrong !");
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {/* header for mobile view */}

      <div className=" md:hidden navbar flex justify-between items-center p-1.5">
        <Link to="/">
          <img src={mb_logo} alt="logo" className="w-[10rem] p-2" />
        </Link>
        <nav>
          <ul className="hidden md:flex justify-between space-x-7 lg:space-x-20">
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
          <ul className="hidden md:flex space-x-10 items-center">
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className="border-2 border-primaryBlue rounded p-2">
              <NavLink to="/sign-up">Sign Up</NavLink>
            </li>
          </ul>
        </div>
        {/* hamburger */}
        <div className="group space-y-1 md:hidden">
          <button className="flex flex-col space-y-1">
            <div className="w-6 h-1 bg-primaryBlue"></div>
            <div className="w-6 h-1 bg-primaryBlue"></div>
            <div className="w-6 h-1 bg-primaryBlue"></div>
          </button>
          <ul className="bg-primaryBlue w-screen pb-10 absolute -top-full group-focus:top-0 right-0 duration-150 flex flex-col space-y-3 justify-end">
            <div className="px-10 py-8 relative ml-auto">
              <div className="w-6 h-1 rotate-45 absolute bg-[#FFFFFF]"></div>
              <div className="w-6 h-1 -rotate-45 absolute bg-[#FFFFFF]"></div>
            </div>
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
        </div>
      </div>

      {/*container for Signup page */}

      <div className="Container md:flex mx-auto min-h-screen text-center">
        {/*container for background starts here */}

        <div className=" w-full md:background md:w-1/2 md:bg-[#371694] md:flex items-center justify-center">
          <div>
            <NavLink to="/">
              <img
                src={logo}
                alt=""
                className=" hidden  md:block md:w-[8rem] lg:w-[15rem]"
              />
            </NavLink>
          </div>
        </div>
        {/*container for Form starts here */}
        <div className="form-container w-full md:w-1/2 p-9">
          <form className="inner-container items-center">
            <h2 className="form-title pb-[3rem] text-3xl text-[#371694] font-bold font-DMSans">
              {" "}
              Sign Up
            </h2>

            {error && <p className="error">{error}</p>}

            <div className="form-group flex items-center justify-center gap-2 py-3">
              <input
                className="form-control w-full px-5 py-5 rounded-lg font-medium bg-[#F5F4F8]  placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group flex items-center justify-center gap-2 py-3">
              <input
                className="form-control w-full px-5 py-5 rounded-lg font-medium bg-[#F5F4F8]  placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group flex items-center justify-center gap-2 py-3">
              <input
                className="form-control w-full px-5 py-5 rounded-lg font-medium bg-[#F5F4F8]  placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="form-group flex items-center justify-center gap-2 py-3">
              <input
                className="form-control w-full px-5 py-5 rounded-lg font-medium bg-[#F5F4F8]  placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div className="form-group flex items-center justify-center">
              <input
                className="mt-5 tracking-wide font-bold bg-[#A7A8FD] text-[#371694] w-[12rem] sm:w-[20rem] md:w-[25rem] lg:w-[30rem] self-auto py-4 rounded-lg hover:bg-[#9294f7]
                         transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                type="submit"
                value="Sign Up"
                onClick={handleSubmit}
              />{" "}
            </div>

            {/* <button type="submit" onClick={handleSubmit}>
              Sign Up
            </button> */}
          </form>

          {/*Authentication for google starts here */}

          <div className="flex items-center w-full my-9 font-bold">
            <hr className="w-full border-b" />
            <p className="px-3 ">OR</p>
            <hr className="w-full border-b" />
          </div>

          <button
            aria-label="Signup with Google"
            type="button"
            onClick={handleGoogleSignup}
            className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
          >
            <div>
              <img
                src={google}
                alt=""
                className=" sm:w-[2.5rem] md:w-[5rem]  lg:w-9"
              />
            </div>

            <p className="font-bold">Sign Up with Google</p>
          </button>

          <div className="mt-4 text-grey-600">
            Already have an account?{" "}
            <span>
              <NavLink className="text-[#371694] hover:underline" to="/login">
                Log in
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
