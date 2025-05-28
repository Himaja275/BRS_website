import React from "react";

const Levelcard = (props) => {
  const formattedLevel = String(props.level).padStart(2, "0");
  return (
    <div className="w-3/4 lg:w-[48%] xl:w-1/4 px-4 flex flex-col gap-8">
      <div className="mx-3">
        <div className="relative">
        <div className="text-[80px] font-bold text-[#f3f3f3]">
          {formattedLevel}
        </div>
        <img
          className="w-12 absolute bottom-2.5 -left-[5%]"
          src={props.badge}
          alt=""
        />
      </div>
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <div className="heading font-bold">Level {props.level}:</div>
          <div className="heading font-bold">{props.title}</div>
        </div>
        <div className="font-[Outfit] nml-text text-light">
          <ul className="list-disc pl-0.5 marker:text-[8px]">
            {props.points.map((point, index) => (
              <li className="pl-3" key={index}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Levelcard;
