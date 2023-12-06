import React from "react";
import profilephoto from "../assets/profile2.jpg";
import projectone from "../assets/Setan_Gurih.png";
import projecttwo from "../assets/Serenity_Logo.jpg";
import projectthree from "../assets/pondok_santai1.jpeg";
import nextproject from "../assets/setan-gurih.png";
import nextloader from "../assets/setting.svg";
import Slider from "./SliderAnimation";
import MusicPlayer from "./MusicPlayer";

export default function AboutGridHero() {
  return (
    <div className="w-[28.75rem] md:w-[48rem] block mx-auto my-12">
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        <div className=" rounded-xl overflow-hidden">
          <img
            className="object-cover duration-300 hover:scale-125"
            src={projectone}
            alt=""
          />
        </div>

        <div className="bg-Emerald rounded-xl">
          <MusicPlayer />
        </div>

        <div className="bg-SkyBlue text-CatalinaBlue row-span-2 rounded-xl overflow-hidden relative">
          <div className="flex flex-col items-center mt-20">
            <div className="w-20 animate-bounce">
              <img src={nextproject} alt="comming soon..." />
            </div>

            <h2 className="p-4 text-xl font-medium text-center">
              This page isn't ready yet
            </h2>
            <a className="bg-ClassicRose text-DarkBlueGrey rounded-xl py-3 px-5 font-medium text-sm cursor-pointer duration-300 hover:bg-PastelPink hover:text-RichBlack">
              Okay
            </a>
          </div>
          <div className="rounded-full bg-gradient-to-tr from-Flame to-Mauve animate-spin-slow aspect-square w-[18rem] overflow-hidden absolute top-[21rem] left-[3rem]">
            <img src={nextloader} alt="" />
          </div>
        </div>

        <div className="col-start-3 row-start-3 rounded-xl overflow-hidden">
          <img
            className="object-cover duration-300 hover:scale-125"
            src={projectthree}
            alt=""
          />
        </div>

        <div className="bg-Mauve text-RichBlack col-span-2 row-span-2 col-start-1 row-start-2 rounded-xl overflow-hidden">
          <img
            className="object-cover duration-300 hover:scale-125"
            src=""
            alt="comming soon..."
          />
        </div>

        <div className=" row-start-4 rounded-xl overflow-hidden">
          <img
            className="object-cover duration-300 hover:scale-125"
            src={projecttwo}
            alt=""
          />
        </div>

        <div className="bg-PastelPink text-RichBlack col-span-2 row-start-4 rounded-xl">
          <div className="max-w-lg p-4">
            <div className="flex justify-start">
              <img
                className="w-9 h-9 mr-4 rounded-full"
                src={profilephoto}
                alt=""
              />
              <div className="font-bold">
                Setografi<span className="font-normal ml-2">. 5m ago</span>
                <p className="font-normal mt-2">
                  I have some skills in graphic design and frontend developer.
                </p>
              </div>
            </div>

            <div>
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
