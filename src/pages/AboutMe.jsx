import React from "react";
import AboutMeData from "../component/AboutMeData";
import FooterEvent from "../component/FooterEvent";
import NavbarEvent from "../component/NavbarEvent";

export default function AboutMe() {
  return (
    <>
      <section className="p-4">
        <NavbarEvent />
        <AboutMeData />
        <FooterEvent />
      </section>
    </>
  );
}
