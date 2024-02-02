import React from "react";
import ButtonProfile from "./ButtonProfile";

import { Link } from "react-router-dom";

export default function NavbarEvent() {
  return (
    <section className="flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center my-4 gap-6">
        <div className="">
          <ButtonProfile />
        </div>

        <div className="">
          <ul className="flex text-DarkBlueGrey bg-LightBlue p-1 rounded-xl justify-between text-center gap-x-2">
            <Link
              to="/exploration"
              className="w-full p-3 rounded-lg bg-transparent text-sm font-medium duration-300 hover:bg-SkyBlue hover:text-CatalinaBlue"
            >
              Explorations
            </Link>
            <Link
              to="/aboutme"
              className="w-full p-3 rounded-lg bg-transparent text-sm font-medium duration-300 hover:bg-SkyBlue hover:text-CatalinaBlue"
            >
              About
            </Link>
            <Link
              to="/blog"
              className="w-full p-3 rounded-lg bg-transparent text-sm font-medium duration-300 hover:bg-SkyBlue hover:text-CatalinaBlue"
            >
              Blog
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
}
