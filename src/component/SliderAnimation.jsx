import React, { useEffect, useState } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const showCard = (index) => {
    setCurrentIndex(index);
  };

  const showNextCard = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const showPrevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(cards.length - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showNextCard();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="flex overflow-hidden w-360 p-2 ml-50 items-center mx-auto">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`card ${
            index === currentIndex
              ? ""
              : "transform transition-transform duration-500"
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <img className="w-20 h-20" src={card.img} alt={card.alt} />
          <p className="text-xs">{card.text}</p>
        </div>
      ))}

      <div className="duration-300 hover:scale-125">
        <button className="sbutton" onClick={showPrevCard}>
          <i className="ri-arrow-left-s-line"></i>
        </button>
        <button className="sbutton" onClick={showNextCard}>
          <i className="ri-arrow-right-s-line"></i>
        </button>
      </div>
      {/* Additional elements for feeds-info-counts */}
    </div>
  );
};

export default Slider;
