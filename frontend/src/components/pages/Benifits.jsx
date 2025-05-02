import React from "react";
import Cardwhy from "../Cardwhy.jsx";
import assignments from "../../assets/why_brs/assignments.gif";
import personalized_curriculum from "../../assets/why_brs/personalized_curriculum.gif";
import tournaments from "../../assets/why_brs/tournaments.gif";
import master_class from "../../assets/why_brs/master_class.gif";
import chess_community from "../../assets/why_brs/chess_community.gif";
import horse from "../../assets/why_brs/horse.avif";

const cardData = [
  {
    image: personalized_curriculum,
    title: "Personalized Curriculum",
    desc: "Each student's unique skill level and learning pace is understood and lessons are tailored accordingly.",
    color: "rgb(243,247,255)",
  },
  {
    image: assignments,
    title: "Assignments",
    desc: "Engaging daily puzzles and weekly puzzles to strengthen concepts and sharpen student's skills.",
    color: "rgb(251,246,239)",
  },
  {
    image: tournaments,
    title: "Monthly Tournaments",
    desc: "Monthly tournaments to test skills, build confidence and foster competitive spirit in students.",
    color: "#eef9fe",
  },
  {
    image: master_class,
    title: "Master Classes",
    desc: "Sessions with chess masters to deepen understanding and enhance strategies.",
    color: "#f4edfc",
  },
  {
    image: chess_community,
    title: "Chess Community",
    desc: "A vibrant chess community where chess enthusiasts come together to connect, learn and explore.",
    color: "#fceded",
  },
];

const Benifits = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap gap-6 items-center justify-center">
        {cardData.map((card, index) => (
          <div key={index}>
            <Cardwhy
              image={card.image}
              title={card.title}
              desc={card.desc}
              color={card.color}
            />
          </div>
        ))}
        <div className="flex justify-center items-center w-[300px] lg:w-[400px]">
          <img className="h-0 sm:h-60 opacity-0 sm:opacity-30 bouncing-image rotate-5" src={horse} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Benifits;
