import React from "react";
import AcheivementCard from "./AcheivementCard.jsx";
import img1 from "../assets/acheivements/img1.avif";
import img2 from "../assets/acheivements/img2.avif";
import img3 from "../assets/acheivements/img3.avif";
import img4 from "../assets/acheivements/img4.avif";
import { useState } from "react";

const achievementData = [
  {
    text1: "1st place",
    text2: "In K-12 national grade - 2",
    photo: img1,
  },
  {
    text1: "11th",
    text2: "ANNUAL POTOMAC OPEN",
    photo: img2,
  },
  {
    text1: "2nd",
    text2: "National k-12 chess championships.",
    text3: "(6th grade and under the 800 category.)",
    photo: img3,
  },
  {
    text1: "1st",
    text2: "CCC ACTION QUADS 52",
    photo: img4,
  },
];

const MobileCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % achievementData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? achievementData.length - 1 : prev - 1
    );
  };

  return (
    <div className="lg:hidden max-w-sm mx-auto relative overflow-hidden rounded-lg shadow-lg">
      <div className="h-96 flex items-center justify-center bg-white">
        <AcheivementCard {...achievementData[currentIndex]} />
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-gray-200/70 p-2 rounded-full hover:bg-gray-300"
      >
        <svg
          className="w-5 h-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-gray-200/70 p-2 rounded-full hover:bg-gray-300"
      >
        <svg
          className="w-5 h-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-4 mb-2 space-x-2">
        {achievementData.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default MobileCarousel;
