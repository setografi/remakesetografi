import { useEffect } from "react";
import "remixicon/fonts/remixicon.css";
import "./App.css";
import transparantprofile from "./assets/transparant-profile.png";
import AboutGridHero from "./component/AboutGridHero";
import ButtonProfile from "./component/ButtonProfile";
import AboutMeData from "./component/AboutMeData";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return (
    <>
      <div className="w-[28.75rem] md:w-[48rem] flex items-center justify-center mx-auto rounded-xl bg-LightBlue text-RichBlack h-60 mt-4 mb-4">
        <div className="flex flex-col space-y-5 px-10 items-start justify-start cursor-default">
          <h1 className="font-noto text-4xl font-bold tracking-wide">
            Welcome!
          </h1>
          <h3 className="font-lexend font-medium text-back text-xl">
            you are viewing my{" "}
            <span className="font-ibmplexmono font-semibold relative hover:text-CatalinaBlue py-1 px-2 after:absolute after:h-1 after:hover:h-[100%] transition-all duration-700 hover:transition-all hover:duration-700 after:transition-all after:duration-700 after:hover:transition-all after:hover:duration-700 overflow-hidden z-20 after:z-[-20] after:bg-SkyBlue after:rounded-t-xl after:w-full after:bottom-0 after:left-0">
              portfolio
            </span>{" "}
            website. Just a website that is a little{" "}
            <span className="bg-Flame text-PastelPink font-ibmplexmono font-semibold px-2 rounded-xl hover:animate-pulse">
              Chaos
            </span>{" "}
            &#44;enjoy
          </h3>
          <div className="font-lexend font-medium text-xl flex space-x-3">
            <h3>
              Are you ready to{" "}
              <span className="bg-PastelPink font-ibmplexmono font-semibold px-2 rounded-xl">
                Explore
              </span>{" "}
              about me?{" "}
              <span className="text-CatalinaBlue font-noto font-bold">
                Let&#39;s Go!
              </span>
            </h3>
          </div>
        </div>
      </div>

      <div className="w-[28.75rem] md:w-[48rem] mx-auto rounded-xl bg-PastelPink text-RichBlack flex flex-row justify-between h-60">
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
            className="z-10 pl-10 hover:translate-x-6 duration-700"
            src={transparantprofile}
            alt=""
          />

          <div className="absolute inset-y-0 left-0 flex items-center pl-4 z-0">
            <h2 className="text-5xl font-noto font-semibold">Hello</h2>
          </div>
        </div>
      </div>

      <div className="flex w-[28.75rem] md:w-[48rem] mx-auto my-6 gap-6">
        {/* <div className="grid gap-6 gap-y-8">
          <div className="grid text-center">
            <div className="grid border-4 border-ClassicRose justify-self-center w-28 h-28 rounded-full place-items-center mb-3">
              <div className="flex w-24 h-24 rounded-full overflow-hidden items-center justify-center">
                <img src={profilephoto} alt="" />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-center">
              Wahyu Seto Pranata
            </h2>
            <h3 className="text-xl font font-medium mb-4">Graphic Designer</h3>
          </div>
          
          <div className="grid gap-6 grid-cols-3 justify-center gap-x-10">
            <div className="text-center">
              <h3 className="text-base mb-1">3</h3>
              <p className="text-sm font-medium">
                Years of <br />
                work
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-base mb-1">71</h3>
              <p className="text-sm font-medium">
                Completed <br />
                projects
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-base mb-1">155</h3>
              <p className="text-sm font-medium">
                Satisfied <br />
                customers
              </p>
            </div>
          </div>
        </div> */}

        <div className="w-1/2">
          <ButtonProfile />
        </div>

        <div className="w-1/2">
          <ul className="flex text-DarkBlueGrey bg-LightBlue p-1 rounded-xl justify-between gap-x-2">
            <button className="w-full p-3 rounded-lg bg-transparent text-sm font-medium duration-300 hover:bg-SkyBlue hover:text-CatalinaBlue">
              Explorations
            </button>
            <button className="w-full p-3 rounded-lg bg-transparent text-sm font-medium duration-300 hover:bg-SkyBlue hover:text-CatalinaBlue">
              About
            </button>
            <button className="w-full p-3 rounded-lg bg-transparent text-sm font-medium duration-300 hover:bg-SkyBlue hover:text-CatalinaBlue">
              Blog
            </button>
          </ul>
        </div>
      </div>

      <AboutGridHero />

      <div className="bg-Alabaster py-10">
        <AboutMeData />
      </div>

      <footer className="w-[28.75rem] md:w-[48rem] mx-auto my-12">
        <div className="flex justify-between items-center">
          <p>&copy; 2023</p>
          <p>Setografi</p>
        </div>
      </footer>
    </>
  );
}

export default App;
