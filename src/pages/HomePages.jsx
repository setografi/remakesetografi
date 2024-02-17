import React from "react";

import "remixicon/fonts/remixicon.css";
import WelcomeEvent from "../component/WelcomeEvent";

export default function HomePages(props) {
  return (
    <>
      <main className="md:w-full mx-auto">
        <WelcomeEvent />
      </main>
    </>
  );
}
