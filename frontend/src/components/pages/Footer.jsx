import React, {useState, useEffect, useRef} from "react";
import Academy from "../academy.jsx";
import { NavLink } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const delay = 0.4;
  return (
    <div>
      <div
        className="flex flex-col gap-20 md:gap-0 md:flex-row justify-around md:mx-auto mx-3 my-24"
        ref={containerRef}
      >
        <div
          className={
            visible
              ? "flex flex-col lg:w-1/5 md:w-[30%] w-full gap-8 md:items-start items-center md:text-left text-center fade-up"
              : "flex flex-col lg:w-1/5 md:w-[30%] w-full gap-8 md:items-start items-center md:text-left text-center"
          }
          style={visible ? { animationDelay: `${0 * delay}s` } : {}}
        >
          <div className="lg:pl-5 lg:scale-125 scale-90">
            <Academy />
          </div>
          <div className="font-[Outfit] font-normal text-[#4d525f] nml-text opacity-90">
            <p>
              At BRS Academy, we believe in empowering the next generation of
              chess champions by expert training and innovative teaching methods
              combined to their passion for the game.
            </p>
          </div>
          <div className="font-[Outfit] font-normal text-[#4d525f] nml-text whitespace-nowrap opacity-90">
            <p>Join us to unlock your child's potential.</p>
          </div>
        </div>
        <div className="flex w-1/4 lg:gap-20 gap-10 mr-9">
          <div
            className={
              visible
                ? "flex flex-col gap-4 w-2xl fade-up"
                : "flex flex-col gap-4 w-2xl"
            }
            style={visible ? { animationDelay: `${1 * delay}s` } : {}}
          >
            <div className="font-bold heading text-[#01081b] whitespace-nowrap">
              Quick Links
            </div>
            <div className="font-normal nml-text font-[Outfit] text-[#111111]">
              <ul className="space-y-4">
                <li className="hover:text-[#ff9a0d] hover:underline">
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li className="hover:text-[#ff9a0d] hover:underline">
                  <NavLink to="/#features">Benifits</NavLink>
                </li>
                <li className="hover:text-[#ff9a0d] hover:underline">
                  <NavLink to="/gallery">Gallery</NavLink>
                </li>
                <li className="hover:text-[#ff9a0d] hover:underline">
                  <NavLink to="/#contact-us">Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={
              visible ? "flex flex-col gap-4 fade-up" : "flex flex-col gap-4"
            }
            style={visible ? { animationDelay: `${2 * delay}s` } : {}}
          >
            <div className="font-bold heading text-[#01081b]">Contact</div>
            <div className="font-normal nml-text font-[Outfit] text-[#4d525f] flex flex-col gap-4 opacity-90">
              <div>
                <ul>
                  <li>(+91) 9908125126,</li>
                  <li>(+91) 8555892240</li>
                </ul>
              </div>
              <div>brs.chessacademy@gmail.com</div>
              <div className="w-3/4">
                Manohar Enclave , Krishnapuri Colony , West Marredpally ,
                Secunderabad 500009, Telangana India
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr className="border-t border-[#e7e7e8] w-3/4 mx-auto my-4" />
      </div>
      <div className={visible?"flex lg:flex-row flex-col items-center lg:justify-between mx-auto mb-32 w-3/4 fade-up": "flex lg:flex-row flex-col items-center lg:justify-between mx-auto mb-32 w-3/4"} style={visible ? { animationDelay: `${3 * delay}s` } : {}}>
        <div className="flex gap-10">
          <div className="text-[#4d525f] font-normal nml-text font-[Outfit]">
            Designed By
          </div>
          <div className="text-[#01081b] font-normal nml-text font-[Outfit]">
            Vikas Athuluri
          </div>
        </div>
        <div className="text-[#4d525f] font-normal text-[14px] md:text-[16px] font-[Outfit]">
          2025 © BRS Academy. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
