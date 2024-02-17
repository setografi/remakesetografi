import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import AboutGridHero from "../component/AboutGridHero";
import FooterEvent from "../component/FooterEvent";
import NavbarEvent from "../component/NavbarEvent";

export default function Explorations() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <section className="p-4 bg-WhiteBack">
      <div className="pb-4">
        <NavbarEvent />
      </div>

      <AboutGridHero />

      <div className="text-center">
        <FooterEvent />
      </div>
    </section>
  );
}
