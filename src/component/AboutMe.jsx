import React, { useState } from "react";
import profilephoto from "../assets/profile2.jpg";
import Instagramphoto from "../assets/about/instagram-color.svg";

const AboutMe = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked((prevState) => !prevState);
  };

  return (
    <div className="w-[28.75rem] md:w-[48rem] block mx-auto my-12">
      <div className="max-w-lg p-4 bg-Alabaster text-DarkBlueGrey rounded-xl">
        <div className="flex justify-start">
          <img className="w-9 h-9 mr-4" src={Instagramphoto} alt="" />
          <div className="font-bold">
            Instagram<span className="font-normal ml-2">. 1m ago</span>
            <p className="font-normal mt-2">
              My other skills? you can visit my Instagram. You can see Instagram
              Typography content and some of my Photography Collections.
            </p>
          </div>
        </div>

        <div className="ml-12 mt-2">
          <div>
            <button
              className="text-xl mr-4 hover:text-Flame"
              onClick={handleLike}
            >
              {isLiked ? (
                <i className="ri-heart-3-fill ri-1x text-Flame"></i>
              ) : (
                <i className="ri-heart-3-line ri-1x"></i>
              )}
            </button>
            <a className="text-xl hover:text-Flame" href="" target="_blank">
              <i className="ri-share-forward-line ri-1x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
