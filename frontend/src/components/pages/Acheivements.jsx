import React from "react";
import AcheivementCard from "../AcheivementCard.jsx";
import img1 from "../../assets/acheivements/img1.avif";
import img2 from "../../assets/acheivements/img2.avif";
import img3 from "../../assets/acheivements/img3.avif";
import img4 from "../../assets/acheivements/img4.avif";
import acheived from "../../assets/acheivements/acheived.webp";
import MobileCarousel from "../MobileCarousal.jsx";

const Acheivements = () => {
  return (
    <div className="relative flex justify-center lg:block">
      <MobileCarousel />

      <div className="hidden lg:flex justify-center relative">
        <div className="-rotate-6 absolute xl:bottom-0 left-32 lg:bottom-20">
          <AcheivementCard
            text1="1st place"
            text2="In K-12 national grade - 2"
            photo={img1}
          />
        </div>
        <div className="xl:-rotate-3 lg:-rotate-6 relative left-3 lg:-bottom-96 xl:bottom-0">
          <AcheivementCard
            text1="11th"
            text2="ANNUAL POTOMAC OPEN"
            photo={img2}
          />
        </div>
        <div className="w-80 h-80 overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            src={acheived}
            alt=""
          />
        </div>
        <div className="xl:rotate-3 lg:rotate-6 relative right-2 xl:bottom-10 lg:bottom-16">
          <AcheivementCard
            text1="2nd"
            text2="National k-12 chess championships."
            text3="(6th grade and under the 800 category.)"
            photo={img3}
          />
        </div>
        <div className="rotate-6 absolute xl:bottom-0 lg:-bottom-[22rem] right-32">
          <AcheivementCard
            text1="1st"
            text2="CCC ACTION QUADS 52"
            photo={img4}
          />
        </div>
      </div>
    </div>
  );
};

export default Acheivements;
