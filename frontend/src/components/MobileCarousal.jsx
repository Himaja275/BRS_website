import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import AcheivementCard from "./AcheivementCard.jsx";
import img1 from "../assets/acheivements/img1.avif";
import img2 from "../assets/acheivements/img2.avif";
import img3 from "../assets/acheivements/img3.avif";
import img4 from "../assets/acheivements/img4.avif";
import { div } from "framer-motion/client";

const achievementData = [
  {
    text1: "1st place",
    text2: "In K-12 national grade - 2",
    photo: img1,
    bgColor: "rgb(243,247,255)",
  },
  {
    text1: "11th",
    text2: "ANNUAL POTOMAC OPEN",
    photo: img2,
    bgColor: "rgb(251,246,239)",
  },
  {
    text1: "2nd",
    text2: "National k-12 chess championships.",
    text3: "(6th grade and under the 800 category.)",
    photo: img3,
    bgColor: "#eef9fe",
  },
  {
    text1: "1st",
    text2: "CCC ACTION QUADS 52",
    photo: img4,
    bgColor: "#f4edfc",
  },
];

const MobileCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const [selectedIndex, setSelectedIndex] = useState(0)
  // const slides = ['Slide 1', 'Slide 2', 'Slide 3']

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi])

  return (
    <div className="embla">
      <div className="embla__viewport w-90" ref={emblaRef}>
        <div className="embla__container">
          {achievementData.map((currentItem, index) => (
            <div className="embla__slide" key={index}>
              <div className="flex flex-col items-center w-85 md:w-96 h-[32rem] mx-auto overflow-hidden rounded-lg shadow-lg border-1 border-gray-300" style={{ backgroundColor: currentItem.bgColor }}>
                <AcheivementCard {...currentItem} visible={true} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls">
        {/* Controls */}
        <button
          onClick={scrollPrev}
          className="embla__prev absolute top-[66.67%] left-1/2 transform -translate-x-[155px] md:-translate-x-[180px] -translate-y-1/2 bg-gray-300 p-2 rounded-full hover:bg-gray-500"
        >
          <svg
            className="w-5 md:w-6 h-5 md:h-6 text-gray-900"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={scrollNext}
          className="embla__next absolute top-[66.67%] left-1/2 transform translate-x-[120px] md:translate-x-[145px] -translate-y-1/2 bg-gray-300 p-2 rounded-full hover:bg-gray-500"
        >
          <svg
            className="w-5 md:w-6 h-5 md:h-6 text-gray-600"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="embla__dots bg-gray-300 p-2.5 rounded-2xl absolute bottom-1/8 left-1/2 transform -translate-x-1/2">
        {achievementData.map((_, index) => (
          <button
            key={index}
            className={`embla__dot bg-gray-200 ${selectedIndex === index ? 'embla__dot--active' : ''}`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </div>

  );
};

export default MobileCarousel;
