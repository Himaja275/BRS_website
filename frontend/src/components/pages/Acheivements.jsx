import React, { useRef, useState, useEffect } from "react";
import AcheivementCard from "../AcheivementCard.jsx";
import img1 from "../../assets/acheivements/img1.avif";
import img2 from "../../assets/acheivements/img2.avif";
import img3 from "../../assets/acheivements/img3.avif";
import img4 from "../../assets/acheivements/img4.avif";
import acheived from "../../assets/acheivements/acheived.webp";
import MobileCarousel from "../MobileCarousal.jsx";
import { NavLink } from "react-router-dom";
import Button from "../Button.jsx";

const Acheivements = () => {
  const containerRefLg = useRef(null);
  const containerRefXl = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setVisible(entry.isIntersecting);
  //     },
  //     { threshold: 0.5 }
  //   );

  //   // Conditionally observe the correct element
  //   const targetElement =
  //     window.innerWidth >= 1280
  //       ? containerRefXl.current
  //       : containerRefLg.current;

  //   if (targetElement) {
  //     observer.observe(targetElement);
  //   }

  //   return () => observer.disconnect();
  // }, []);

  useEffect(() => {
    const updateTargetElement = () => {
      const targetElement =
        window.innerWidth >= 1280
          ? containerRefXl.current
          : containerRefLg.current;

      // Disconnect previous observer
      observer.disconnect();

      // Recreate observer for new element
      if (targetElement) {
        observer.observe(targetElement);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    // Initial check
    updateTargetElement();

    // Listen for resize events
    window.addEventListener("resize", updateTargetElement);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateTargetElement);
    };
  }, []);

  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  // const delay = 0.4;

  return (
    <div className="relative flex justify-center">
      <div className="flex lg:hidden xl:hidden flex-col items-center justify-center gap-5">
        <div className="w-80 h-80 overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            src={acheived}
            alt=""
          />
        </div>
        <div
          className="black_heading w-1/6 text-center flex justify-center items-center"
          style={{ fontSize: "2.7rem" }}
        >
          Students Achievements
        </div>
        <div className="">
          <MobileCarousel />
        </div>
        <div>
          <NavLink to="/gallery">
            <Button text="View Gallery" />
          </NavLink>
        </div>
      </div>

      <div
        className="hidden lg:flex xl:hidden justify-center relative mx-auto"
        ref={containerRefLg}
      >
        <div className="flex flex-row -mr-16 gap-4 z-10">
          {/* {console.log("visible:", visible)} */}
          <div
            className={` ${visible ? "animate-acheiver-card-lg" : "hidden-card"} animate-acheiver-card-1 hidden-card absolute -left-56 top-0`}
          >
            <AcheivementCard
              text1="1st place"
              text2="In K-12 national grade - 2"
              photo={img1}
              visible={visible}
            />
          </div>
          <div className={` ${visible ? "animate-acheiver-card-lg" : "hidden-card"} animate-acheiver-card-2 hidden-card absolute -left-6 top-0`}>
            <AcheivementCard
              text1="11th"
              text2="ANNUAL POTOMAC OPEN"
              photo={img2}
              visible={visible}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-32 mx-auto">
          <div className={`${visible ? "animate-acheived-image" : "hidden-card"} acheived-image hidden-card`}>
            <img
              className="w-full h-full object-cover object-center"
              src={acheived}
              alt=""
            />
          </div>
          <div className={`flex flex-col gap-10 items-center justify-center hidden-card ${visible ? "animate-acheived-image" : "hidden-card"}`}>
            <div
              className={`black_heading w-1/6 text-center flex justify-center items-center`}
              style={{ fontSize: "2.7rem" }}
            >
              Students Achievements
            </div>
            <div>
              <NavLink to="/gallery">
                <Button text="View Gallery" />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex flex-row -ml-16 gap-4">
          <div className={` ${visible ? "animate-acheiver-card-lg" : "hidden-card"} animate-acheiver-card-3 hidden-card absolute top-0 left-44`}>
            <AcheivementCard
              text1="2nd"
              text2="National k-12 chess championships."
              text3="(6th grade and under the 800 category.)"
              photo={img3}
              visible={visible}
            />
          </div>
          <div className={` ${visible ? "animate-acheiver-card-lg" : "hidden-card"} animate-acheiver-card-4 hidden-card absolute top-0 left-94`}>
            <AcheivementCard
              text1="1st"
              text2="CCC ACTION QUADS 52"
              photo={img4}
              visible={visible}
            />
          </div>
        </div>
      </div>

      <div
        className="hidden xl:flex justify-center relative"
        ref={containerRefXl}
      >
        <div className="flex flex-row -mr-24 gap-4">
          <div
            className={` ${visible ? "animate-acheiver-card-try" : "hidden-card"} animate-acheiver-card-1 hidden-card`}>
            <AcheivementCard
              text1="1st place"
              text2="In K-12 national grade - 2"
              photo={img1}
              visible={visible}
            />
          </div>
          <div
            className={` ${visible ? "animate-acheiver-card-try" : "hidden-card"
              } animate-acheiver-card-2 hidden-card`}
          >
            <AcheivementCard
              text1="11th"
              text2="ANNUAL POTOMAC OPEN"
              photo={img2}
              visible={visible}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-32">
          <div
            className={`${visible ? "animate-acheived-image" : "hidden-card"} acheived-image hidden-card`}
          >
            <img
              className="w-full h-full object-cover object-center"
              src={acheived}
              alt=""
            />
          </div>
          <div
            className={`flex flex-col gap-10 items-center justify-center hidden-card ${visible ? "animate-acheived-image" : "hidden-card"}`}
          >
            <div
              className={`black_heading w-1/6 text-center flex justify-center items-center`}
              style={{ fontSize: "2.7rem" }}
            >
              Students Achievements
            </div>
            <div>
              <NavLink to="/gallery">
                <Button text="View Gallery" />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex flex-row -ml-24 gap-4">
          <div
            className={` ${visible ? "animate-acheiver-card-try" : "hidden-card"
              } animate-acheiver-card-3 hidden-card`}
          >
            <AcheivementCard
              text1="2nd"
              text2="National k-12 chess championships."
              text3="(6th grade and under the 800 category.)"
              photo={img3}
              visible={visible}
            />
          </div>
          <div
            className={` ${visible ? "animate-acheiver-card-try" : "hidden-card"
              } animate-acheiver-card-4 hidden-card`}
          >
            <AcheivementCard
              text1="1st"
              text2="CCC ACTION QUADS 52"
              photo={img4}
              visible={visible}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acheivements;
