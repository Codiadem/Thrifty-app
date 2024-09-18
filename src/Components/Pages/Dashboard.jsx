import React from "react";
import Header from "../Layout/Header";
import { useState } from "react";
import profileImage from "../../images/profile-img.png";
import "../../style/dash1.css";

function Dashboard() {
  return (
    <>
      {/* <Header /> */}
      <div className="wrapper lg:mx-40 ">
        <div className="dash w-full flex flex-col md:flex-row pb-10 lg:f ">
          <div className="image w-full flex items-center justify-center lg:justify end">
            <img src={profileImage} alt="user's profile picture" />
          </div>
          <div className="user-info w-full flex flex-col items-center justify-center">
            <span className="user-name whitespace-nowrap">
              Chioma Ekpemerechi
            </span>
            <p>
              Current Balance:{" "}
              <span className="money-balance whitespace-nowrap">300,000</span>
            </p>
          </div>
        </div>
        <h3>This Week</h3>
        <div className="input">
          <div className="income-total">
            <p>Total Income</p>
            <p>300,000</p>
          </div>
          <div className="expense-total">
            <p>Total Expense</p>
            <p>100,000</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
