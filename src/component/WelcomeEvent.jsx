import React from "react";
import Background from "../assets/background2.jpg";
import ProfilePhoto from "../assets/profile2.jpg";
import NavbarEvent from "./NavbarEvent";
import FooterEvent from "./FooterEvent";

export default function WelcomeEvent() {
  return (
    <section
      className="bg-cover bg-center h-screen "
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* <div className="flex items-center justify-center mx-auto rounded-xl bg-LightBlue text-RichBlack h-60 mb-4">
        <div className="flex flex-col space-y-5 px-10 items-start justify-start cursor-default">
          <h1 className="font-noto text-4xl font-bold tracking-wide">
            Welcome!
          </h1>
          <h3 className="font-lexend font-medium text-back text-xl">
            you are viewing my{" "}
            <span className="bg-Alabaster text-DarkBlueGrey font-ibmplexmono font-semibold py-1 px-2 rounded-lg">
              portfolio
            </span>{" "}
            website. Just a website that is a little{" "}
            <span className="text-DarkBlueGrey font-ibmplexmono font-semibold px-2 hover:text-LightBlue transition delay-1000 duration-300">
              Chaos
            </span>{" "}
            &#44;enjoy
          </h3>
          <div className="font-lexend font-medium text-xl flex space-x-3">
            <h3>
              Are you ready to{" "}
              <span className="bg-Alabaster text-DarkBlueGrey font-ibmplexmono font-semibold py-1 px-2 rounded-lg">
                Explore
              </span>{" "}
              about me?{" "}
              <span className="text-DarkBlueGrey font-noto font-bold">
                Let&#39;s Go!
              </span>
            </h3>
          </div>
        </div>
      </div> */}

      <div className="h-full rounded-lg text-RichBlack flex flex-row justify-between p-4">
        <div className="flex flex-col w-full items-start px-6">
          <div className="bg-Alabaster text-sm text-RichBlack rounded-xl font-ibmplexmono">
            <p className="p-4 w-[26rem]">
              "Hello! Welcome, you are viewing my portfolio website. Are you
              ready to Explore about me? Let's Go!"
            </p>
          </div>

          <div className="bg-Alabaster text-sm text-RichBlack rounded-xl font-ibmplexmono mt-6 ml-auto">
            <p className="p-4 w-[16rem]">By the way, who are you?</p>
          </div>

          <div className="bg-Alabaster text-sm text-RichBlack rounded-xl font-ibmplexmono mt-6">
            <p className="p-4 w-[15rem]">
              I'm, <span className="font-semibold">Wahyu Seto Pranata</span>{" "}
              <br /> Designers and Developers
            </p>
          </div>

          <div className="bg-Alabaster text-sm text-RichBlack rounded-xl font-ibmplexmono mt-3">
            <div className="p-2 w-[16rem]">
              <img
                className="rounded-lg object-cover"
                src={ProfilePhoto}
                alt="profile picture"
              />
            </div>
          </div>
        </div>

        <div className="w-full bg-Alabaster rounded-xl">
          <div className="flex justify-between items-center p-6">
            <h3 className="text-base font-noto font-semibold">Setografi</h3>

            <div className="text-2xl font-medium">
              <i className="ri-moon-line"></i>
            </div>
          </div>

          <div className="pt-6">
            <div className="flex items-center px-6">
              <h2 className="text-5xl font-noto font-semibold border-2 border-RichBlack rounded-full p-3">
                Create.
              </h2>
              <h2 className="text-5xl font-noto font-semibold border-2 border-RichBlack rounded-full p-3">
                Finance.
              </h2>
              <div className="text-5xl font-noto font-semibold border-2 border-RichBlack rounded-full p-3">
                <i className="ri-arrow-right-line"></i>
              </div>
            </div>

            <div className="flex items-center px-6">
              <h2 className="text-5xl font-noto font-semibold border-2 border-RichBlack rounded-full p-3">
                Develop.
              </h2>
              <h2 className="text-5xl font-noto font-semibold border-2 border-RichBlack rounded-full p-3">
                Together.
              </h2>
            </div>

            <div className="p-6 mt-2">
              <div className="text-2xl text-RichBlack flex items-center">
                <i className="ri-circle-fill"></i>
                <span className="text-base px-2">
                  Crowdfunding platform for influencers and entepreneurs
                </span>
                <div className="font-medium">
                  <i className="ri-arrow-right-line"></i>
                </div>
              </div>

              <div className="text-2xl text-RichBlack flex items-center">
                <i className="ri-arrow-down-line"></i>
                <span className="text-base px-2">
                  Support / Funding initiatives
                </span>
              </div>

              <div className="text-2xl text-RichBlack flex items-center pl-1">
                <p>
                  &<span className="text-base px-2">Global Impact</span>
                </p>
                <div className="font-medium">
                  <i className="ri-arrow-up-line"></i>
                </div>
              </div>
            </div>
          </div>

          <NavbarEvent />

          <div className="px-4">
            <FooterEvent />
          </div>
        </div>
      </div>
    </section>
  );
}
