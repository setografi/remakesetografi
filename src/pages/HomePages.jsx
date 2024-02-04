import React from "react";

import "remixicon/fonts/remixicon.css";
import NavbarEvent from "../component/NavbarEvent";
import WelcomeEvent from "../component/WelcomeEvent";
import FooterEvent from "../component/FooterEvent";

export default function HomePages(props) {
  return (
    <>
      <main className="md:w-full mx-auto">
        {/* <NavbarEvent /> */}
        <WelcomeEvent />

        {/* <FooterEvent /> */}
      </main>
    </>
  );
}
