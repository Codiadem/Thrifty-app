import React from "react";
import Header from "../Layout/Header";
import Image from "../../../src/images/hero-img-web.png";
import Lady from "../../images/lady.png";
import Tech4dev from "../../images/tech4dev.png";
import Leom from "../../images/leom.png";
import Moneyline from "../../images/moneyline.png";
import Kudda from "../../images/Kuda.png";
import "./../../style/home.css";
import { Link, NavLink } from "react-router-dom";
import Testimonials from "../Layout/Testimonials";
import Footer from "../Layout/Footer";
import WhyTrack from "../Layout/WhyTrack";

function Home() {
  return (
    <>
      <Header />
      {/* container for home page */}
      <div className="container" id="home">
        <div className="hero-container">
          {/* container for text */}
          <div>
            <h1 className="welcome-statement">
              Your Spending Just Got More Confident
            </h1>
            <p className="welcome-sentence">
              Enjoy spending and managing your accounts with simplicity and
              confidence. You are cash smarter with Thrifty.
            </p>
          </div>

          {/* container for image */}
          <div>
            <img
              // src="./../../src/images/hero-img-web.png"
              src={Image}
              alt="hero-image"
              className="hero-image"
            />
          </div>
        </div>
        {/* get started button */}
        <section className="get-started">
          <button type="button" className="get-started-btn">
            <NavLink to="/sign-up">Get Started</NavLink>
          </button>
        </section>
      </div>

      {/* a section for recommendations */}
      <section className="recommendations">
        <h3 className="recommended-by">Recomended By</h3>
        <div className="logos">
          <div>
            <img
              // src="./../../src/images/kuda.png"
              src={Kudda}
              alt="kudda-logo"
              className="recommended-company"
            />
          </div>
          <div>
            <img
              // src="./../../src/images/moneyline.png"
              src={Moneyline}
              alt="money line with nanacy"
              className="recommended-company"
            />
          </div>
          <div>
            <img
              // src="./../../src/images/leom.png"
              src={Leom}
              alt="leom technologies"
              className="recommended-company"
            />
          </div>
          <div>
            <img
              // src="./../../src/images/tech4dev.png"
              src={Tech4dev}
              alt="tech4dev"
              className="recommended-company"
            />
          </div>
        </div>
      </section>
      {/* why choose us */}
      <section className="why-choose-us" id="about">
        <div className="text-heading">
          <h1 className="why-choose-us-text">Why Choose Us</h1>
        </div>
        <div className="why-choose-us-content">
          <img
            // src="./../../src/images/lady.png"
            src={Lady}
            alt="why choose us"
            className="why-choose-us-img"
          />
          <p className="content">
            Our team comprises industry-leading professionals with extensive
            experience and deep knowledge in our field. This ensures that we
            provide top-notch solutions tailored to your specific needs. We are
            committed to delivering the highest quality products and services.
            Our rigorous quality control processes and attention to detail
            guarantee that you receive only the best. Your satisfaction is our
            priority. We listen to your needs, understand your goals, and work
            closely with you to achieve them. Our personalized service ensures
            that you feel valued and heard. We stay ahead of the curve by
            embracing the latest technologies and trends. Our innovative
            approach allows us to offer cutting-edge solutions that drive
            efficiency and growth for your business.
          </p>
        </div>
      </section>
      <Testimonials />
      <WhyTrack />
      <Footer />
    </>
  );
}

export default Home;
