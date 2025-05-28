import React from "react";
import demo from "../assets/demo.svg";

const BookDemo = () => {
  return (
    <div>
          <button className="z-20 font-bold py-3 px-6 rounded-full text-white bg-[#003A69] cursor-pointer flex gap-3 items-center justify-center">
              <div className="w-5"><img src={demo} alt="" /></div>
        <div>Book a demo</div>
      </button>
    </div>
  );
};

export default BookDemo;