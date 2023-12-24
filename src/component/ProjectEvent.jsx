import React from "react";
import ProjectImageEvent from "./ProjectImageEvent";

export default function ProjectEvent() {
  return (
    <section className="flex flex-col items-center justify-center my-8 gap-6">
      <div className=" overflow-hidden font-ibmplexmono w-96 h-72 bg-PastelPink border-4 border-RichBlack rounded-xl">
        <ProjectImageEvent />
      </div>

      <div className="flex w-full justify-between">
        <div className="grid grid-flow-row grid-cols-3 grid-rows-2 py-4 px-16 gap-2">
          <button className="col-span-3 col-start-2 relative w-10 h-10 flex justify-center items-center duration-300 hover:scale-90 bg-DarkBlueGrey border-4 border-RichBlack rounded-lg">
            <span className="font-bold text-xl text-Alabaster">
              <i className="ri-arrow-up-line"></i>
            </span>
          </button>

          <button className="relative w-10 h-10 flex justify-center items-center duration-300 hover:scale-90 bg-DarkBlueGrey border-4 border-RichBlack rounded-lg">
            <span className="font-bold text-xl text-Alabaster">
              <i className="ri-arrow-left-line"></i>
            </span>
          </button>
          <button className="relative w-10 h-10 flex justify-center items-center duration-300 hover:scale-90 bg-DarkBlueGrey border-4 border-RichBlack rounded-lg">
            <span className="font-bold text-xl text-Alabaster">
              <i className="ri-arrow-down-line"></i>
            </span>
          </button>
          <button className="relative w-10 h-10 flex justify-center items-center duration-300 hover:scale-90 bg-DarkBlueGrey border-4 border-RichBlack rounded-lg">
            <span className="font-bold text-xl text-Alabaster">
              <i className="ri-arrow-right-line"></i>
            </span>
          </button>
        </div>

        <div className="flex items-center gap-2 pt-6 px-16 text-Beige">
          <button className="flex justify-center items-center bg-Flame font-semibold w-12 h-12 border-4 border-RichBlack rounded-full p-3 duration-300 hover:scale-90">
            B
          </button>
          <button className="flex justify-center items-center bg-Flame font-semibold w-12 h-12 border-4 border-RichBlack rounded-full p-3 -translate-y-6 duration-300 hover:scale-90">
            A
          </button>
        </div>
      </div>
    </section>
  );
}
