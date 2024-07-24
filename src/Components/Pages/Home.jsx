import React from "react";
import Header from "../Layout/Header";
import Image from "../../../src/images/hero-img-web.png";



function Home() {
  return (
    <>
      <Header />
      {/* container for home page */}
      <div className="container">
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
            <img src="./../../src/images/hero-img-web.png" alt="hero-image" className="hero-img" />
          </div>
          </div>          
        {/* get started button */}     
        <section className="get-started">
              <button type="button" className="get-started-btn">
                <a href="" className="get-started-link">Get Started</a>
              </button>
        </section>
      </div>

      
      {/* a section for recommendations */}
      <section className="recommendations">
        <h3 className="recommended-by">Recomended By</h3>
        <div className="logos">
          <div>
            <img src="./../../" alt="logo" />
          </div>
          <div>
            <img src="" alt="money line with nanacy" className="moneyline" />
          </div>
          <div>
            <img src="" alt="leom technologies" className="leom-tech" />
          </div>
          <div>
            <img src="" alt="tech4dev" className="tech4dev" />
          </div>
        </div>
      </section>
      {/* why choose us */}
      <section className="why-choose-us">
        <div className="text-heading">
          <h1 className="why-choose-us-text">Why Choose Us</h1>
        </div>
          <div className="why-choose-us-content">
            <img src="./../." />
            <p className="content">Our team comprises industry-leading professionals with extensive experience and 
              deep knowledge in our field. This ensures that we provide top-notch solutions 
              tailored to your specific needs. We are committed to delivering the highest quality 
              products and services. Our rigorous quality control processes and attention to detail
              guarantee that you receive only the best. Your satisfaction is our priority.
              We listen to your needs, understand your goals, and work closely with you 
              to achieve them. Our personalized service ensures that you feel valued and heard.
              We stay ahead of the curve by embracing the latest technologies and trends. 
              Our innovative approach allows us to offer cutting-edge solutions that drive 
              efficiency and growth for your business.</p>
          </div>   
      </section>        
    </>
  );
}

export default Home;
