import React from "react";
import Benifits from "./Benifits.jsx";
import king from "../../assets/why_brs/king.avif";

const Features = () => {
  return (
    <div className="flex gap-14 flex-col items-center justify-center py-32" id="features">
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="orange_heading">Benifits</div>
        <div className="black_heading_small sm:black_heading">Why Choose BRS Academy?</div>
      </div>
      <div className="relative">
        <div className="relative z-10">
          <Benifits />
        </div>
        <img
          className="absolute -top-28 lg:-top-32 xl:-top-2/5 -left-[5%] h-36 lg:h-60 opacity-30 bouncing-image -rotate-6"
          src={king}
          alt=""
        />
      </div>
    </div>
  );
};

export default Features;
