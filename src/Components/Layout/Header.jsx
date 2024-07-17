import React from "react";
import logo from "../../images/logo-white-bg.png";

function Header() {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="logo" />
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="opt">
            <ul>
              <li>
                <a href="#login">Login</a>
              </li>
              <li>
                <a href="#signup">Sign Up</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
