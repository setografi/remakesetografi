import { useEffect } from "react";
import "remixicon/fonts/remixicon.css";
import "./App.css";
import AboutGridHero from "./component/AboutGridHero";
import ButtonProfile from "./component/ButtonProfile";
import AboutMeData from "./component/AboutMeData";
import WelcomeEvent from "./component/WelcomeEvent";
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
      <main className="w-[28.75rem] md:w-[48rem] mx-auto p-4">
        <WelcomeEvent />

        <div className="flex flex-col md:flex-row items-center my-6 gap-6">
          <div className="w-full">
            <ButtonProfile />
          </div>

          <div className="w-full">
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

        <AboutMeData />

        <footer className="my-12">
          <div className="flex justify-between items-center">
            <p>&copy; 2023</p>
            <p>Setografi</p>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
