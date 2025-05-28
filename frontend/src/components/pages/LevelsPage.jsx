import React, { useState, useRef, useEffect } from "react";
import Levels from "./levels.jsx";
import { NavLink } from "react-router-dom";
import king from "../../assets/why_brs/king.avif";
import queen from "../../assets/levels/queen.avif";
import Button from "../Button.jsx";

const LevelsPage = () => {
    const containerRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const delay = 0.4;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.1 } // Trigger when 10% visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);
    
  return (
    <div className="bg-[#f6f6f6] py-8 pb-28 flex flex-col gap-10 relative" ref={containerRef}>
      <div className="w-[80%] xl:w-[90%] mx-auto flex flex-col items-center text-center gap-4 lg:flex-row lg:justify-between lg:items-end lg:text-left relative">
        <div className="w-full md:w-3/4 xl:w-2/5 relative">
          <div className={visible ? "orange_heading fade-up" : "orange_heading"} style={visible ? { animationDelay: `${0 * delay}s` } : {}}>Training Programs</div>
          <div className={visible ? "black_heading fade-up" : "black_heading"} style={visible ? { animationDelay: `${1 * delay}s` } : {}}>
            Online Chess Coaching From India's Best Coaches
          </div>
        </div>
        <div>
          <img
            className="absolute xl:static h-30 opacity-30 xl:h-60 bouncing-image rotate-6 
                -top-32 right-0 xl:top-auto xl:right-auto sm:-left-16"
            src={queen}
            alt=""
          />
        </div>
        <div className={visible ? "fade-up" : ""} style={visible ? { animationDelay: `${1.8 * delay}s` } : {}}>
          <NavLink to="/#contact-us">
            <Button text="Get Started Now" />
          </NavLink>
        </div>
      </div>
      <div className={visible ? "fade-up" : ""}
        style={visible ? { animationDelay: `${2 * delay}s` } : {}}>
        <Levels />
      </div>
      <div>
        <img
          className="hidden lg:block absolute -bottom-[15%] left-1/5 h-60 opacity-30 bouncing-image -rotate-6"
          src={king}
          alt=""
        />
      </div>
    </div>
  );
};

export default LevelsPage;
