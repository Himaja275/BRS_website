import React from "react";
import cover from "../../assets/cover.avif";
import blue_line from "../../assets/blue_line.svg";
import icon_years from "../../assets/icon_years.svg";

const Frontpage = () => {
  return (
    <div
      className="min-h-[85vh] bg-cover bg-center rounded-3xl max-w-[95%] mx-auto p-6 md:p-9 flex items-center"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 30%),url(${cover})`,
      }}
    >
      <div className="w-full lg:w-1/2 flex flex-col m-auto justify-center items-center text-center">
        <div
          className="text-[rgba(6,78,139,1)] font-bold text-2xl sm:text-3xl md:text-4xl font-[Outfit] opacity-0 animate-slide-up"
          style={{ animationDuration: "1s", animationDelay: "0s" }}
        >
          Join The Best
        </div>
        <div
          className="text-white font-extrabold font-sans leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl opacity-0 animate-slide-up"
          style={{ animationDuration: "1s", animationDelay: "0.3s" }}
        >
          <div>Online Chess</div>
          <div>Coaching From</div>
          <div>India's Best Coaches</div>
        </div>
        <img
          className="w-3/4 m-4 opacity-0 animate-slide-up"
          style={{ animationDuration: "1s", animationDelay: "0.6s" }}
          src={blue_line}
          alt=""
        />
        <div
          className="font-[Outfit] text-white text-sm sm:text-base md:text-lg opacity-0 animate-slide-up"
          style={{ animationDuration: "1s", animationDelay: "0.9s" }}
        >
          <div>
            Personalized training, expert guidance, and a thriving chess
          </div>
          <div>community to help you excel in the game of kings.</div>
        </div>
        <div
          className="font-[Outfit] text-white flex gap-2 text-sm sm:text-base md:text-lg m-8 md:m-12 opacity-0 animate-slide-up"
          style={{ animationDuration: "1s", animationDelay: "1.2s" }}
        >
          <div className="h-6 w-6 bg-white rounded-full flex items-center justify-center">
            <img className="h-3.5" src={icon_years} alt="" />
          </div>
          <div>Since 12 years</div>
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
