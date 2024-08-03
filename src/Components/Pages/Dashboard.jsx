import React from "react";
import Header from "../Layout/Header";
import { useState } from "react";
// import ProfileImage from "../Layout/ProfileImage";
import profileImage from "../../images/profile-img.png";
import "../../style/dash1.css";

function Dashboard() {
  // handles the profile image
  // const profilePicture = () => {
  //   const [imageUrl, setImageUrl] = useState(null);

  //   const handleFileInput = (e) => {
  //     const file = () => e.target.files[0];
  //     const reader = new FileReader();

  //     reader.onload = (e) => setImageUrl(e.target.result);
  //     reader.readAsDataURL(file);
  //   };
  // };

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="dash">
          <img src={profileImage} alt="user's profile picture" />
          <div className="user-info">
            <span className="user-name">Chioma Ekpemerechi</span>
            <p>
              Current Balance: <span className="money-balance">300,000</span>
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
      <div className="dash-box bg-profileBox m-auto mt-10 w-5/6 h-96">
        <div className="user-info flex items-center justify-around w-3/4 mx-auto space-x-7 pt-10 ">
          {/* <ProfileImage /> */}
          <div className="unique">
            <span className="name text-primaryBlue font-bold sm:text-sm md:text-xl lg:text-4xl ">
              Chioma Ekpemerechi
            </span>
            <span className="balance display-block">
              Current Balance <span className="current-bal">300,000</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
