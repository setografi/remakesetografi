import React, { useState } from "react";
import MusicCover from "../assets/Music_Cover.jpg";
import MusicAudio from "../assets/audio/2Pac, Pop Smoke - Write This Down.mp3";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef(new Audio(MusicAudio));

  const handlePlayPause = () => {
    const audio = audioRef.current;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="h-1/2 w-full">
        <img
          className="rounded-t-xl object-cover"
          src={MusicCover}
          alt="Remix by Thug Theory"
        />
      </div>

      <div className="flex justify-between gap-2 items-center text-WhiteBack h-1/2 w-full p-4">
        <div className="leading-6 mx-4">
          <h2 className="font-semibold text-WhiteBack">
            <a>Write This Down</a>
          </h2>
          <h3 className="font-normal">
            <span>
              <a className="hover:underline hover:text-Cream">
                Pop Smoke & Friend's
                <br />
              </a>
            </span>
            &ndash;
            <span>
              <a className="hover:underline hover:text-Cream"> Thug Theory</a>
            </span>
          </h3>
        </div>

        <div className="mx-4">
          <div className="text-center text-Bronze px-3 py-2 bg-WhiteBack rounded-full hover:bg-Cream">
            <a className="text-xl" onClick={handlePlayPause}>
              <div className="duration-300 hover:scale-125">
                {isPlaying ? (
                  <i className="ri-pause-fill"></i>
                ) : (
                  <i className="ri-play-fill ri-1x"></i>
                )}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
