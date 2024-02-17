import React from "react";
import ButtonProfile from "./ButtonProfile";

import { Link } from "react-router-dom";

export default function NavbarEvent() {
  return (
    <section className="flex items-center md:justify-center">
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 ">
        <div className="">
          <ButtonProfile />
        </div>

        <div className="">
          <ul className="flex text-RichBlack p-1 justify-between text-center gap-x-2">
            <Link
              to="/"
              className="w-full p-3 text-sm font-medium transition-colors duration-700 hover:text-Bronze hover:scale-105 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/exploration"
              className="w-full p-3 text-sm font-medium transition-colors duration-700 hover:text-Bronze hover:scale-105 cursor-pointer"
            >
              Explorations
            </Link>
            <Link
              to="/aboutme"
              className="w-full p-3 text-sm font-medium transition-colors duration-700 hover:text-Bronze hover:scale-105 cursor-pointer"
            >
              About
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
}
