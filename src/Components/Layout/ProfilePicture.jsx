import React from "react";
import { useState } from "react";
import avatar from "../../images/default-avatar.png";

function ProfilePicture() {
  const [profilePictureUrl, setProfilePictureUrl] = useState(avatar);

  const handleFileChange = (event) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      setProfilePictureUrl(event.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleImageClick = () => {
    document.getElementById("profile-picture-input").click();
  };

  return (
    <>
      <div className="box">
        <div className="profile-picture-container">
          <img
            src={profilePictureUrl}
            alt="Profile Picture"
            onClick={handleImageClick}
            className="profile-dp"
          />
          <input
            type="file"
            id="profile-picture-input"
            onChange={handleFileChange}
            accept="image/*"
            style={{ display: "none" }}
          />
        </div>
      </div>
    </>
  );
}

export default ProfilePicture;
