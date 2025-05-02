import React from "react";
import logo from "../assets/logo.svg";
import acadName from "../assets/acad_name.svg";

const Academy = () => {
  return (
    <div className="flex items-center gap-3">
      <img className="h-11" src={logo} alt="" />
      <img className="h-9" src={acadName} alt="BRS CHESS ACADEMY" />
    </div>
  );
};

export default Academy;
