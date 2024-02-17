import React, { useState } from "react";

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
    <div className="flex text-center">
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
        className={`p-3 font-medium text-sm transition-colors duration-700 hover:text-Bronze hover:scale-105 cursor-pointer ${
          buttonState.contact ? "text-Cream" : "text-BlackText"
        }`}
        onClick={() => handleButtonClick("contact")}
      >
        {buttonState.contact ? "Email Copied!" : "Contact Me"}
      </a>
    </div>
  );
}
