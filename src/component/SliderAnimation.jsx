import React from "react";

const Slider = () => {
  const cards = [
    {
      img: "../assets/skill/adobephotoshop-color.svg",
      alt: "Image 1",
      text: "Adobe Photoshop",
    },
    {
      img: "../assets/skill/adobeillustrator-color.svg",
      alt: "Image 2",
      text: "Adobe Illustrator",
    },
    {
      img: "../assets/skill/coreldraw-color.svg",
      alt: "Image 3",
      text: "CorelDraw",
    },
    {
      img: "../assets/skill/canva-color.svg",
      alt: "Image 4",
      text: "Canva",
    },
    {
      img: "../assets/skill/figma-color.svg",
      alt: "Image 5",
      text: "Figma",
    },
    {
      img: "../assets/skill/blender-color.svg",
      alt: "Image 6",
      text: "Blender",
    },
    {
      img: "../assets/skill/html5-color.svg",
      alt: "Image 7",
      text: "HTML",
    },
    {
      img: "../assets/skill/css3-color.svg",
      alt: "Image 8",
      text: "CSS",
    },
    {
      img: "../assets/skill/javascript-color.svg",
      alt: "Image 9",
      text: "JavaScript",
    },
    {
      img: "../assets/skill/bootstrap-color.svg",
      alt: "Image 10",
      text: "Bootstrap",
    },
    {
      img: "../assets/skill/react-color.svg",
      alt: "Image 11",
      text: "ReactJS",
    },
    {
      img: "../assets/skill/tailwindcss-color.svg",
      alt: "Image 12",
      text: "Tailwind CSS",
    },
    {
      img: "../assets/skill/elixir-color.svg",
      alt: "Image 13",
      text: "Elixir",
    },
    {
      img: "../assets/skill/phoenixframework-color.svg",
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
