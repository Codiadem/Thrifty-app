import React from "react";
import Header from "../Layout/Header";
import Image from "../../../src/images/hero-img-web.png";

function Home() {
  return (
    <>
      <Header />
      {/* container for home page */}
      <div className="container">
        {/* container for text */}
        <div>
          <h1 className="welcome-statement">
            Your Spending Just Got More Confident
          </h1>
          <p className="welcome-sentence">
            Enjoy spending and managing your accounts with simplicity and
            confidence. You are cash smarter with confidence
          </p>
        </div>

        {/* container for image */}
        <div>
          <img
            src="./../../src/images/hero-img-web.png"
            alt="hero-image"
            className="hero-img"
          />
        </div>
        {/* a section for the get started button */}
        <section>
          <button>Get Started</button>
        </section>
      </div>

      {/* a section for recommendations */}
      <section className="recommendations">
        <h3 className="recommended-by">Recomended By</h3>
        <div>
          <img src="" alt="kuda" className="kuda" />
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
      </section>
    </>
  );
}

export default Home;
