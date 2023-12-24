import React, { useState } from "react";
import ProjectOne from "../assets/Setan_Gurih.png";
import ProjectTwo from "../assets/Serenity_Logo.jpg";
import ProjectThree from "../assets/pondok_santai1.jpeg";

const imagesData = [
  {
    id: 1,
    title: "Gambar 1",
    description: "Ini adalah gambar pertama",
    imageUrl: [ProjectOne],
  },
  {
    id: 2,
    title: "Gambar 2",
    description: "Ini adalah gambar kedua",
    imageUrl: [ProjectTwo],
  },
  {
    id: 3,
    title: "Gambar 3",
    description: "Ini adalah gambar ketiga",
    imageUrl: [ProjectThree],
  },
  // {
  //   id: 4,
  //   title: "Gambar 4",
  //   description: "Ini adalah gambar keempat",
  //   imageUrl: [ProjectThree],
  // },
  // Tambahkan data gambar lainnya jika diperlukan
];

const PopupSlider = ({ image, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-8 rounded-xl">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 p-2 m-3 rounded-full font-semibold text-ClassicRose hover:text-PastelPink"
        >
          <div className="transition duration-700 hover:rotate-180 hover:scale-125">
            <i className="ri-close-line ri-xl"></i>
          </div>
        </button>
        <img
          src={image.imageUrl}
          alt={image.title}
          className="mb-4 w-80 h-80 rounded-lg"
        />
        <div>
          <h3 className="text-RichBlack font-bold text-xl">{image.title}</h3>
          <p className="text-RichBlack">{image.description}</p>
        </div>
      </div>
    </div>
  );
};

const ImagePopup = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (image) => {
    setSelectedImage(image);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedImage(null);
  };

  return (
    <div className="text-center py-8">
      <div className="flex flex-wrap justify-center gap-4">
        {imagesData.map((image) => (
          <button
            key={image.id}
            onClick={() => openPopup(image)}
            className="relative overflow-hidden rounded-lg cursor-pointer"
          >
            <img src={image.imageUrl} className="w-20 h-20 object-cover" />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
              <span className="text-white text-sm">Click for more</span>
            </div>
          </button>
        ))}
      </div>
      {popupVisible && (
        <PopupSlider image={selectedImage} onClose={closePopup} />
      )}
    </div>
  );
};

export default ImagePopup;
