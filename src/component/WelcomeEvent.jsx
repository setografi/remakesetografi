import React from "react";
import ProfilePhoto from "../assets/transparant-profile.png";

export default function WelcomeEvent() {
  return (
    <section className="w-[28.75rem] md:w-[48rem] mx-auto">
      <div className="flex items-center justify-center mx-auto rounded-xl bg-LightBlue text-RichBlack h-60 mt-6 mb-4">
        <div className="flex flex-col space-y-5 px-10 items-start justify-start cursor-default">
          <h1 className="font-noto text-4xl font-bold tracking-wide">
            Welcome!
          </h1>
          <h3 className="font-lexend font-medium text-back text-xl">
            you are viewing my{" "}
            <span className="font-ibmplexmono font-semibold relative hover:text-CatalinaBlue py-1 px-2 after:absolute after:h-1 after:hover:h-[100%] transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-300 after:hover:transition-all after:hover:duration-300 overflow-hidden z-20 after:z-[-20] after:bg-SkyBlue after:rounded-t-lg after:w-full after:bottom-0 after:left-0">
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
              <span className="text-Flame font-noto font-bold">
                Let&#39;s Go!
              </span>
            </h3>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-PastelPink text-RichBlack flex flex-row justify-between h-60">
        <div className="flex flex-col items-start justify-center p-10 text-Flame">
          <div>
            <h2 className="text-2xl font-semibold font-ibmplexmono">
              Wahyu Seto Pranata
            </h2>
            <h3 className="text-xl font font-medium">Graphic Designer</h3>
          </div>
        </div>

        <div className="relative flex bg-Flame overflow-hidden justify-end rounded-r-xl border-l-4 border-DarkBlueGrey">
          <img
            className="z-10 pl-10 hover:translate-x-6 transition duration-700"
            src={ProfilePhoto}
            alt=""
          />

          <div className="absolute inset-y-0 left-0 flex items-center pl-4 z-0">
            <h2 className="text-5xl font-noto font-semibold">Hello</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
