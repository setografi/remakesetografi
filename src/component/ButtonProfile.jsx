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
    <div className="flex text-center gap-6 p-1">
      <a
        className={`w-full rounded-xl p-3 font-medium text-sm cursor-pointer transition duration-300 hover:bg-Flame hover:text-PastelPink ${
          buttonState.follow ? "bg-Flame" : "bg-PastelPink text-Flame"
        }`}
        onClick={() => handleButtonClick("follow")}
      >
        {buttonState.follow ? "Unfollow" : "Follow"}
      </a>
      <a
        className={`w-full rounded-xl p-3 font-medium text-sm cursor-pointer duration-300 text-CatalinaBlue hover:bg-SkyBlue hover:text-CatalinaBlue ${
          buttonState.contact ? "bg-SkyBlue" : "bg-LightBlue text-DarkBlueGrey"
        }`}
        onClick={() => handleButtonClick("contact")}
      >
        {buttonState.contact ? "Email Copied!" : "Contact Me"}
      </a>
      <a className="w-24 p-3 text-sm cursor-pointer">
        <div className="text-PastelPink transition duration-700 hover:rotate-180 hover:scale-125">
          <i className="ri-settings-3-line ri-xl"></i>
        </div>
      </a>
    </div>
  );
}
