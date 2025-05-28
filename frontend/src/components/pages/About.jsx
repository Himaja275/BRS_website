import React, { useEffect, useRef, useState } from "react";
import MadhavaMom from "../../assets/about/MadhavaMom.avif";
import brsChess from "../../assets/about/brsChess.mp4";

const About = ({ visible }) => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const videoRef = useRef(null);

  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === textRef.current) setTextVisible(true);
            if (entry.target === imageRef.current) setImageVisible(true);
            if (entry.target === videoRef.current) setVideoVisible(true);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <div className=" bg-white rounded-3xl flex flex-col gap-8 items-center justify-center p-5 md:p-10 shadow-lg">
      <div className="flex flex-col gap-8 xl:hidden">
        <div
        ref={textRef}
        className={`items-center justify-center overflow-hidden rounded-2xl bg-[rgb(252,241,237)] md:px-5 w-full ${
          textVisible ? "animate-from-top" : ""
        }`}
      >
          <p className="text-sm p-4 overflow-auto font-[Outfit] text-[18px] text-[rgb(0,0,0,0.7)]">
            BRS Academy, founded by Maya Ravinder from Hyderabad in the year
            2015 is a premier chess academy driven to nurturing and helping
            young minds in the game of chess. This was initially a local
            initiative which has now grown into a world-class chess training
            platform, especially after everyone moved to online classes during
            the COVID-19 lockdown. The academy provides children with tailored
            training providing them skills and strategies needed to succeed in
            competitive chess.
          </p>
        </div>
        <div className="flex gap-8 w-full flex-col md:flex-row h-full">
          <div className="flex-[1] items-center justify-center overflow-hidden rounded-2xl md:h-[60%]">
            <div ref={imageRef} className={imageVisible ? "animate-from-left" : ""}>
            <img
              src={MadhavaMom}
              alt=""
              className="w-full md:h-full max-h-[32rem] object-cover"
              />
              </div>
          </div>
          <div className="flex-[1] flex items-center justify-center overflow-hidden rounded-2xl md:aspect-[16/9] aspect-square">
            <div ref={videoRef} className={videoVisible ? "animate-from-right" : ""}>
            <video
              autoPlay
              loop
              muted
              controls
              src={brsChess}
              className="w-full  h-full object-cover"
              />
              </div>
          </div>
        </div>
      </div>

      <div className="hidden xl:flex gap-8 w-full max-h-[420px]">
        <div className="flex-[3] flex gap-8">
          <div className="flex-1 flex items-center justify-center overflow-hidden rounded-2xl">
            <div className={visible ? "animate-from-left" : ""}>
              <img
                src={MadhavaMom}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className={visible ? "animate-from-top" : ""}>
              <div className=" overflow-hidden px-5 bg-[rgb(252,241,237)]  rounded-2xl h-[420px] flex items-center justify-center">
                <p className="text-sm p-4 overflow-auto font-[Outfit] text-[18px] text-[rgb(0,0,0,0.7)]">
                  BRS Academy, founded by Maya Ravinder from Hyderabad in the
                  year 2015 is a premier chess academy driven to nurturing and
                  helping young minds in the game of chess. This was initially a
                  local initiative which has now grown into a world-class chess
                  training platform, especially after everyone moved to online
                  classes during the COVID-19 lockdown. The academy provides
                  children with tailored training providing them skills and
                  strategies needed to succeed in competitive chess.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1] flex items-center justify-center overflow-hidden rounded-2xl">
          <div className={visible ? "animate-from-right" : ""}>
            <video
              autoPlay
              loop
              muted
              controls
              src={brsChess}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-8 text-[18px] text-[rgb(0,0,0,0.7)] font-[Outfit] xl:flex-row flex-col items-stretch">
        <div className={visible ? "fade-up flex-1" : "flex-1"}>
          <div className="bg-[#faf8ed] rounded-2xl p-3.5 md:p-9 w-full h-full">
            <p>
              The founder of BRS, Maya Ravinder (a B.COM and B.Ed graduate) has
              a deep passion for education and learning that led her to bring a
              unique perspective to chess training. As a strategic chess coach
              with extensive experience in training children for competitive
              sports, Maya teaches not only chess skills but also enhances
              mental resilience and strategic thinking in her students. Maya,
              who is inspired by the achievements of chess legends like
              Vishwanathan Anand, Koneru Humpy, and Pullela Gopichand,
              envisioned BRS academy to be a place where young chess enthusiasts
              could receive top-tier guidance. Her graduation from the
              prestigious Indian School of Business (ISB) strengthened her
              dedication for excellence thus shaping her leadership and vision
              for the academy.
            </p>
          </div>
        </div>

        <div className={visible ? "fade-up flex-1" : "flex-1"}>
          <div className="bg-[#f3f7ff] rounded-2xl p-3 md:p-9 flex flex-col gap-5 items-center justify-center w-full h-full">
            <div>
              At BRS Academy, we believe in empowering the next generation of
              chess champions by expert training and innovative teaching methods
              combined to their passion for the game.
            </div>
            <div className="text-[#094882] font-bold text-[28px] md:text-center">
              Join us to unlock your child's potential.
            </div>
            <div className="text-[#094882] font-bold text-[28px] md:text-center">
              Support them make their mark in the world of chess.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
