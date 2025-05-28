import React, { useRef, useState } from "react";

const CoachCard = ({ coach_img, name, info, bg_color }) => {
  const cardRef = useRef(null);
  const [flipped, setFlipped] = useState(false);

  const handleMouseMove = (e) => {
    /* … your existing tilt-on-hover code … */
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - (left + width  / 2);
    const y = e.clientY - (top  + height / 2);
    const rotateY =  ( x / (width  / 2)) * 10;
    const rotateX = -( y / (height / 2)) * 10;

    // Only apply tilt if *not* flipped
    if (!flipped) {
      card.style.transform = `
        perspective(600px)
        translateZ(40px)
        rotateX(${rotateX.toFixed(2)}deg)
        rotateY(${rotateY.toFixed(2)}deg)
      `;
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!flipped) {
      card.style.transform = `
        perspective(600px)
        translateZ(0)
        rotateX(0deg)
        rotateY(0deg)
      `;
    }
  };

  const handleClick = () => {
    // Reset any inline transform when flipping
    cardRef.current.style.transform = "";
    setFlipped((f) => !f);
  };

  return (
    <div className="py-10 px-4">
      <div
        ref={cardRef}
        className={`
          relative w-[292px] h-[26rem] flex items-center bg-white rounded-xl shadow-lg
          transition-transform duration-300 ease-out
          flip-card-inner
          ${flipped ? "flipped" : ""}
        `}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {/* Front face */}
        <div className="flip-card-face">
          <img
            src={coach_img}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/100 to-transparent rounded-b-xl" />
          <div className="absolute bottom-4 left-4 text-white font-bold text-[34px] z-10 leading-none">
            {name}
          </div>
        </div>

        {/* Back face (you can customize as you like) */}
        <div className="text-center flip-card-face rotate-y-180 flex items-center justify-center text-gray-700 font-[Outfit] nml-text p-5"
        style={{
          backgroundColor: bg_color
        }}>
          {info}
        </div>
      </div>
    </div>
  );
};

export default CoachCard;
