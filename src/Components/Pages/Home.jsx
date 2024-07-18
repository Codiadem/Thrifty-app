import React from "react";
import Header from "../Layout/Header";

function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="welcome-statement">
          Your Spending Just Got More Confident
        </h1>
        <p>
          Enjoy spending and managing your accounts with simplicity and
          confidence. You are cash smarter with confidence{" "}
        </p>
      </div>
    </>
  );
}

export default Home;
