import React from "react";
import Image1 from "../assets/skill/adobephotoshop-color.svg";
import Image2 from "../assets/skill/adobeillustrator-color.svg";
import Image3 from "../assets/skill/coreldraw-color.svg";
import Image4 from "../assets/skill/canva-color.svg";
import Image5 from "../assets/skill/figma-color.svg";
import Image6 from "../assets/skill/blender-color.svg";
import Image7 from "../assets/skill/html5-color.svg";
import Image8 from "../assets/skill/css3-color.svg";
import Image9 from "../assets/skill/javascript-color.svg";
import Image10 from "../assets/skill/bootstrap-color.svg";
import Image11 from "../assets/skill/react-color.svg";
import Image12 from "../assets/skill/tailwindcss-color.svg";
import Image13 from "../assets/skill/elixir-color.svg";
import Image14 from "../assets/skill/phoenixframework-color.svg";

const Slider = () => {
  const cards = [
    {
      img: Image1,
      alt: "Image 1",
      text: "Adobe Photoshop",
    },
    {
      img: Image2,
      alt: "Image 2",
      text: "Adobe Illustrator",
    },
    {
      img: Image3,
      alt: "Image 3",
      text: "CorelDraw",
    },
    {
      img: Image4,
      alt: "Image 4",
      text: "Canva",
    },
    {
      img: Image5,
      alt: "Image 5",
      text: "Figma",
    },
    {
      img: Image6,
      alt: "Image 6",
      text: "Blender",
    },
    {
      img: Image7,
      alt: "Image 7",
      text: "HTML",
    },
    {
      img: Image8,
      alt: "Image 8",
      text: "CSS",
    },
    {
      img: Image9,
      alt: "Image 9",
      text: "JavaScript",
    },
    {
      img: Image10,
      alt: "Image 10",
      text: "Bootstrap",
    },
    {
      img: Image11,
      alt: "Image 11",
      text: "ReactJS",
    },
    {
      img: Image12,
      alt: "Image 12",
      text: "Tailwind CSS",
    },
    {
      img: Image13,
      alt: "Image 13",
      text: "Elixir",
    },
    {
      img: Image14,
      alt: "Image 14",
      text: "Phoenix Framework",
    },
  ];

  return (
    <div className="flex overflow-x-scroll w-360 pl-[3.25rem]">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex justify-center items-center flex-col gap-5 px-3"
        >
          <img src={card.img} alt={card.alt} />
          <p className="text-xs text-RichBlack font-ibmplexmono font-semibold">
            {card.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Slider;
