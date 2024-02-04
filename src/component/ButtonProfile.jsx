import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ButtonProfile() {
  const [buttonState, setButtonState] = useState({
    follow: false,
    contact: false,
    settings: false,
  });

  const handleButtonClick = (buttonName) => {
    setButtonState({
      ...buttonState,
      [buttonName]: !buttonState[buttonName],
    });
  };

  return (
    <div className="flex text-center gap-6 p-1">
      {/* <a
        className={`w-full rounded-xl p-3 font-medium text-sm cursor-pointer transition duration-300 hover:bg-Cream hover:text-BlackText ${
          buttonState.follow
            ? "bg-Cream text-BlackText"
            : "bg-Bronze text-BlackText"
        }`}
        onClick={() => handleButtonClick("follow")}
      >
        {buttonState.follow ? "Unfollow" : "Follow"}
      </a> */}
      <a
        className={`w-full rounded-full p-3 font-medium text-sm cursor-pointer duration-700 hover:bg-Cream hover:text-BlackText ${
          buttonState.contact
            ? "bg-Cream text-BlackText"
            : "bg-Bronze text-WhiteBack"
        }`}
        onClick={() => handleButtonClick("contact")}
      >
        {buttonState.contact ? "Email Copied!" : "Contact Me"}
      </a>
      <Link to="/" className="w-24 p-1 cursor-pointer">
        <div className="text-BlackText text-2xl transition duration-700 hover:text-Bronze hover:scale-110">
          <i className="ri-home-line"></i>
        </div>
      </Link>
    </div>
  );
}
