import React, { useState, useRef, useEffect } from "react";
import Benifits from "./Benifits.jsx";
import king from "../../assets/why_brs/king.avif";

const Features = () => {
  const delay = 0.4;
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

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
    <div
      className="flex gap-14 flex-col items-center justify-center py-32"
      id="features" ref={containerRef}
    >
      <div className="flex flex-col gap-2 items-center justify-center">
        <div
          className={visible ? "orange_heading fade-up" : "orange_heading"}
          style={visible ? { animationDelay: `${0 * delay}s` } : {}}
        >
          Benifits
        </div>
        <div
          className={visible ? "black_heading fade-up" : "black_heading"}
          style={visible ? { animationDelay: `${1 * delay}s` } : {}}
        >
          Why Choose BRS Academy?
        </div>
      </div>
      <div
        className={visible ? "relative fade-up" : "relative"}
        style={visible ? { animationDelay: `${2 * delay}s` } : {}}
      >
        <div className="relative z-10">
          <Benifits visible={visible} />
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
