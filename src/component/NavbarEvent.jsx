import React from "react";
import ButtonProfile from "./ButtonProfile";

import { Link } from "react-router-dom";

export default function NavbarEvent() {
  return (
    <section className="flex items-center justify-center">
      <div className="flex flex-col md:flex-row md:items-center my-2 gap-4 lg:gap-6">
        <div className="">
          <ButtonProfile />
        </div>

        <div className="">
          <ul className="flex text-WhiteBack bg-Bronze p-1 rounded-full justify-between text-center gap-x-2">
            <Link
              to="/exploration"
              className="w-full p-3 rounded-l-full bg-transparent text-sm font-medium duration-700 hover:bg-Cream hover:text-BlackText"
            >
              Explorations
            </Link>
            <Link
              to="/aboutme"
              className="w-full p-3 bg-transparent text-sm font-medium duration-700 hover:bg-Cream hover:text-BlackText"
            >
              About
            </Link>
            <Link
              to="/blog"
              className="w-full p-3 rounded-r-full bg-transparent text-sm font-medium duration-700 hover:bg-Cream hover:text-BlackText"
            >
              Blog
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
}
