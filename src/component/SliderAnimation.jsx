import React from "react";

const Slider = () => {
  const cards = [
    {
      img: "./src/assets/skill/adobephotoshop-color.svg",
      alt: "Image 1",
      text: "Adobe Photoshop",
    },
    {
      img: "./src/assets/skill/adobeillustrator-color.svg",
      alt: "Image 2",
      text: "Adobe Illustrator",
    },
    {
      img: "./src/assets/skill/coreldraw-color.svg",
      alt: "Image 3",
      text: "CorelDraw",
    },
    {
      img: "./src/assets/skill/canva-color.svg",
      alt: "Image 4",
      text: "Canva",
    },
    {
      img: "./src/assets/skill/figma-color.svg",
      alt: "Image 5",
      text: "Figma",
    },
    {
      img: "./src/assets/skill/blender-color.svg",
      alt: "Image 6",
      text: "Blender",
    },
    {
      img: "./src/assets/skill/html5-color.svg",
      alt: "Image 7",
      text: "HTML",
    },
    {
      img: "./src/assets/skill/css3-color.svg",
      alt: "Image 8",
      text: "CSS",
    },
    {
      img: "./src/assets/skill/javascript-color.svg",
      alt: "Image 9",
      text: "JavaScript",
    },
    {
      img: "./src/assets/skill/bootstrap-color.svg",
      alt: "Image 10",
      text: "Bootstrap",
    },
    {
      img: "./src/assets/skill/react-color.svg",
      alt: "Image 11",
      text: "ReactJS",
    },
    {
      img: "./src/assets/skill/tailwindcss-color.svg",
      alt: "Image 12",
      text: "Tailwind CSS",
    },
    {
      img: "./src/assets/skill/elixir-color.svg",
      alt: "Image 13",
      text: "Elixir",
    },
    {
      img: "./src/assets/skill/phoenixframework-color.svg",
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
