import React from "react";
import profilephoto from "../assets/profile2.jpg";
import projectone from "../assets/Setan_Gurih.png";
import projecttwo from "../assets/Serenity_Logo.jpg";
import projectthree from "../assets/pondok_santai1.jpeg";
import nextproject from "../assets/setan-gurih.png";
import nextloader from "../assets/setting.svg";
import Slider from "./SliderAnimation";
import MusicPlayer from "./MusicPlayer";
import ProjectEvent from "./ProjectEvent";

export default function AboutGridHero() {
  return (
    <div className="mb-4">
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          className=" rounded-xl overflow-hidden col-span-3 md:col-span-1"
        >
          <img
            className="object-cover duration-700 hover:scale-125"
            src={projectone}
            alt=""
          />
        </div>

        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="bg-Bronze rounded-xl col-span-3 md:col-span-1"
        >
          <MusicPlayer />
        </div>

        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="900"
          className="bg-Cream text-BlackText row-span-2 rounded-xl overflow-hidden relative col-span-3 md:col-span-1"
        >
          <div className="  flex flex-col items-center my-20">
            <div className="w-20 animate-bounce">
              <img src={nextproject} alt="comming soon..." />
            </div>

            <h2 className="font-ibmplexmono p-4 text-xl font-semibold text-center">
              THIS PAGE ISN'T READY YET
            </h2>
            <a className="bg-Bronze text-WhiteBack rounded-xl py-3 px-5 font-medium text-sm cursor-pointer duration-700 hover:bg-PastelPink hover:text-RichBlack">
              OKAY
            </a>
          </div>
          <div className="rounded-full bg-gradient-to-tr from-Flame to-PastelPink animate-spin-slow aspect-square w-[18rem] overflow-hidden absolute top-[14rem] left-[16rem] md:w-[28rem] md:top-[41rem] md:left-[5rem]">
            <img src={nextloader} alt="" />
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="md:col-start-3 md:row-start-3 rounded-xl overflow-hidden col-span-3 md:col-span-1"
        >
          <img
            className="object-cover duration-700 hover:scale-125"
            src={projectthree}
            alt=""
          />
        </div>

        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="col-span-3 md:col-span-2 bg-Cream text-BlackText md:row-span-2 col-start-1 row-start-2 rounded-xl overflow-hidden"
        >
          <ProjectEvent />
        </div>

        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          className="md:row-start-4 rounded-xl overflow-hidden col-span-3 md:col-span-1"
        >
          <img
            className="object-cover duration-700 hover:scale-125"
            src={projecttwo}
            alt=""
          />
        </div>

        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="bg-Bronze text-BlackText md:col-span-2 md:row-start-4 rounded-xl col-span-3"
        >
          {/* <div className="bg-WhiteBack p-4">
            <div className="flex justify-start">
              <img
                className="w-9 h-9 mr-4 rounded-full"
                src={profilephoto}
                alt=""
              />
              <div className="font-bold mb-6 md:mb-2">
                Setografi<span className="font-normal ml-2">. 5m ago</span>
                <p className="font-normal mt-2">
                  I have some skills in graphic design and frontend developer.
                </p>
              </div>
            </div>
            <div>
              <Slider />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
