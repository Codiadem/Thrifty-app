import React from "react";

function ProfileImage() {
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileInput = (e) => {
    const file = () => e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => setImageUrl(e.target.result);
    reader.readAsDataURL(file);
  };

  return (
    <>
      <div className="profile-picture relative">
        {imageUrl ? (
          <img
            className="rounded-full w-full h-full object-cover"
            src={imageUrl}
            alt="Profile Picture"
          />
        ) : (
          <span className="rounded-ful flex justify-center items-center bg-gray-300 text-gray-500 w-full h-full">
            Upload Profile Picture
          </span>
        )}
        <input
          type="file"
          id="profile-picture-upload"
          className="hidden absolutr top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleFileInput}
        />
      </div>
    </>
  );
}

export default ProfileImage;
