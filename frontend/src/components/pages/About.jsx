import React from "react";
import MadhavaMom from "../../assets/about/MadhavaMom.avif";
import brsChess from "../../assets/about/brsChess.mp4";

const About = () => {
  return (
    <div className=" bg-white rounded-3xl flex flex-col gap-8 items-center justify-center p-10 shadow-lg">
      <div className="flex gap-8 w-full max-h-[400px]">
        <div className="flex-[3] flex gap-8">
          <div className="flex-1 flex items-center justify-center overflow-hidden rounded-2xl">
            <img
              src={MadhavaMom}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 flex items-center justify-center overflow-hidden rounded-2xl bg-[rgb(252,241,237)] px-5">
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
        </div>
        <div className="flex-[1] flex items-center justify-center overflow-hidden rounded-2xl">
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

      <div className="flex gap-8 text-[18px] text-[rgb(0,0,0,0.7)] font-[Outfit]">
        <div className="bg-[#faf8ed] flex-[1] rounded-2xl p-9">
          <p className="">The founder of BRS, Maya Ravinder (a B.COM and B.Ed graduate) has a
          deep passion for education and learning that led her to bring a unique
          perspective to chess training. As a strategic chess coach with
          extensive experience in training children for competitive sports, Maya
          teaches not only chess skills but also enhances mental resilience and
          strategic thinking in her students. Maya, who is inspired by the
          achievements of chess legends like Vishwanathan Anand, Koneru Humpy,
          and Pullela Gopichand, envisioned BRS academy to be a place where
          young chess enthusiasts could receive top-tier guidance. Her
          graduation from the prestigious Indian School of Business (ISB)
          strengthened her dedication for excellence thus shaping her leadership
          and vision for the academy.</p>
        </div>
        <div className="bg-[#f3f7ff] flex-[1] rounded-2xl p-9 flex flex-col gap-5 items-center justify-center">
          <div>
            At BRS Academy, we believe in empowering the next generation of
            chess champions by expert training and innovative teaching methods
            combined to their passion for the game.
          </div>
          <div className="text-[#094882] font-bold text-[28px]">Join us to unlock your child's potential.</div>
          <div className="text-[#094882] font-bold text-[28px]">Support them make their mark in the world of chess.</div>
        </div>
      </div>
    </div>
  );
};

export default About;
