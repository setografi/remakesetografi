import { useState } from "react";
import "remixicon/fonts/remixicon.css";
import "./App.css";
import profilephoto from "./assets/profile2.jpg";
import AboutGridHero from "./component/AboutGridHero";
import ButtonProfile from "./component/ButtonProfile";
import AboutMe from "./component/AboutMe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-[28.75rem] block mx-auto mt-24 mb-12">
        <div className="grid gap-6 gap-y-8">
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

          <ButtonProfile />

          {/* <div className="flex text-center gap-6">
            <a className="w-full bg-coralRed rounded-xl p-3 font-medium text-sm cursor-pointer duration-300 hover:bg-darkGray">
              Follow
            </a>
            <a className="w-full bg-lavenderPurple rounded-xl p-3 font-medium text-sm cursor-pointer duration-300 hover:bg-darkGray">
              Contact Me
            </a>
            <a className="w-24 p-3 text-sm cursor-pointer">
              <div className="text-coralRed duration-300 hover:rotate-180 hover:scale-125">
                <i class="ri-settings-3-line ri-xl"></i>
              </div>
            </a>
          </div> */}
        </div>

        <div>
          <ul className="flex my-8 text-DarkBlueGrey bg-LightBlue p-1 rounded-xl justify-between gap-x-2">
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

      <AboutMe />

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
