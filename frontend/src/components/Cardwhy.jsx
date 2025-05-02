import React from "react";

const Cardwhy = (props) => {
  return (
    <div style={{ backgroundColor: props.color }} className="w-[300px] lg:w-[400px] h-64 flex flex-col gap-8 justify-center items-center rounded-2xl p-8">
      <div>
        <img src={props.image} className="w-16" alt="" />
      </div>
      <div className="flex flex-col gap-2 items-center justify-center text-center">
        <div className="font-bold heading">{props.title}</div>
        <div className="text-light font-normal font-[Outfit] nml-text">{props.desc}</div>
      </div>
    </div>
  );
};

export default Cardwhy;