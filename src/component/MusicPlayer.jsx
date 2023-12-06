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

      <div className="flex gap-2 items-center text-Beige h-1/2 w-full p-4">
        <div className="leading-6 mx-auto">
          <h2 className="font-bold">
            <a>Write This Down</a>
          </h2>
          <h3 className="font-normal">
            <span>
              <a className="hover:underline hover:text-Alabaster">
                Pop Smoke & Friend's
                <br />
              </a>
            </span>
            &ndash;
            <span>
              <a className="hover:underline hover:text-Alabaster">
                {" "}
                Thug Theory
              </a>
            </span>
          </h3>
        </div>
        <div className="text-center text-Beige px-3">
          <a className="hover:text-Alabaster text-xl" onClick={handlePlayPause}>
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
  );
}
