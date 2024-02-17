import React from "react";
import LogoWeb from "../assets/logo.png";
import ProfilePhoto from "../assets/profile2.jpg";
import NavbarEvent from "./NavbarEvent";
import FooterEvent from "./FooterEvent";

export default function WelcomeEvent() {
  return (
    <section className="bg-WhiteBack">
      <div className="flex flex-col lg:flex-row h-full rounded-lg text-BlackText p-4">
        <div className="flex flex-col w-full items-start px-6">
          <div className="bg-WhiteBack text-sm text-BlackText border-[1px] border-GrayBorder rounded-xl font-ibmplexmono">
            <h3 className="p-3 md:w-[26rem]">
              Hello! Welcome, you are viewing my portfolio website. Are you
              ready to Explore about me? Let's Go!
              <p className="text-xs text-grey-darkest text-right mt-1">
                06:45 pm
              </p>
            </h3>
          </div>

          <div className="bg-WhiteBack text-sm text-BlackText border-[1px] border-GrayBorder rounded-xl font-ibmplexmono mt-6 ml-auto">
            <h3 className="p-3 w-[14.8rem] text-right">
              By the way, who are you?{" "}
              <p className="text-xs text-grey-darkest  mt-1">06:45 pm</p>
            </h3>
          </div>

          <div className="bg-WhiteBack text-sm text-BlackText border-[1px] border-GrayBorder rounded-xl font-ibmplexmono mt-6">
            <h3 className="p-3 w-[15rem]">
              I'm, <span className="font-semibold">Wahyu Seto Pranata</span>{" "}
              <br /> Designer and Developer
              <p className="text-xs text-grey-darkest text-right mt-1">
                06:45 pm
              </p>
            </h3>
          </div>

          <div className="bg-WhiteBack text-sm text-BlackText border-[1px] border-GrayBorder rounded-xl font-ibmplexmono mt-3">
            <div className="p-2 w-[15rem]">
              <img
                className="rounded-lg object-cover transition duration-700 grayscale hover:grayscale-0"
                src={ProfilePhoto}
                alt="profile picture"
              />
            </div>
          </div>
        </div>

        <div className="w-full bg-WhiteBack border-[1px] border-GrayBorder rounded-xl mt-6 lg:mt-0">
          <div className="flex justify-between items-center px-6 py-4">
            <div className="flex justify-start items-center gap-4">
              <img className="object-cover h-9" src={LogoWeb} alt="Logo Web" />

              <h3 className="text-base font-semibold">Setografi</h3>
            </div>

            <div className="text-2xl font-medium transition duration-700 hover:rotate-180 hover:scale-110 hover:text-Bronze">
              <i className="ri-moon-line"></i>
            </div>
          </div>

          <div>
            <div className="text-base text-BlackText flex items-center mx-6 py-4">
              <p>
                Yo, I'm Seto, a unique creative designer and developer. I mainly
                focus on...
              </p>
            </div>

            <div className="flex items-center px-6">
              <h2 className="text-lg sm:text-2xl md:text-4xl xl:text-5xl font-noto font-semibold border-2 border-BlackText rounded-full p-3">
                Idea.
              </h2>
              <h2 className="text-lg sm:text-2xl md:text-4xl xl:text-5xl font-noto font-semibold border-2 border-BlackText rounded-full p-3">
                Research.
              </h2>
              <div className="text-lg sm:text-2xl md:text-4xl xl:text-5xl text-WhiteBack font-noto font-semibold bg-GrayBorder rounded-full py-3 px-[1.1rem] md:p-3">
                <div>
                  <i className="ri-arrow-right-line"></i>
                </div>
              </div>
            </div>

            <div className="flex items-center px-6">
              <h2 className="text-lg sm:text-2xl md:text-4xl xl:text-5xl font-noto font-semibold border-2 border-BlackText rounded-full p-3">
                Create.
              </h2>
              <h2 className="text-lg sm:text-2xl md:text-4xl xl:text-5xl font-noto font-semibold border-2 border-BlackText rounded-full p-3">
                Experiment.
              </h2>
            </div>

            <div className="px-6 py-4 mt-2">
              <div className="text-2xl text-BlackText flex items-center">
                <i className="ri-circle-fill"></i>
                <span className="text-base px-2">
                  Find me and take me! Check my Resume
                </span>
                <a
                  className="font-medium transition-colors duration-700 hover:text-Bronze hover:scale-110"
                  href="https://read.cv/setografi"
                  target="_blank"
                >
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>

              <div className="text-2xl text-BlackText flex items-center">
                <div>
                  <i className="ri-arrow-down-line"></i>{" "}
                </div>
                <span className="text-base px-2">
                  Available for project based freelance
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-start mx-4">
            <NavbarEvent />

            <FooterEvent />
          </div>
        </div>
      </div>
    </section>
  );
}
