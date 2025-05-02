import React from "react";
import Levelcard from "../Levelcard.jsx"
import badge3 from "../../assets/levels/badge3.avif";
import badge2 from "../../assets/levels/badge2.avif";
import badge1 from "../../assets/levels/badge1.avif";
import badge_star from "../../assets/levels/badge_star.avif";

const Levels = () => {
  let level1 = [
    "Spot and execute basic tactics consistently",
    "Demonstrate proficiency in fundamental endgames",
    "Apply opening principles to develop pieces efficiently",
    "Reduce one-move blunders significantly",
    "Manage time effectively across all game phases",
  ];
  let level2 = [
    "Identify and exploit positional weaknesses",
    "Calculate and execute longer tactical sequences",
    "Formulate and implement multi-move strategic plans",
    "Apply advanced endgame techniques in various scenarios",
    "Develop and utilize a personalized opening repertoire",
  ];
  let level3 = [
    "Create and capitalize on dynamic imbalances",
    "Perform deep, accurate calculations in critical positions",
    "Execute long-term strategic plans and prophylactic moves",
    "Master complex endgames and theoretical positions",
    "Demonstrate deep understanding of opening theory and preparation",
  ];
  let level4 = [
    "Custom Curriculum prepared for the Student By an IM to improve fine tune their strengths and tackle their specific weaknesses",
  ];

  return (
    <div className="w-[80%] xl:w-[90%] bg-white mx-auto rounded-2xl py-8 flex flex-wrap justify-center gap-y-10 xl:flex-nowrap xl:space-x-4 items-start">
  <Levelcard level={1} title="Below 1000 Rating" points={level1} badge={badge3} />
  <div className="hidden xl:block my-auto w-[1.8px] h-52 bg-gradient-to-b from-transparent via-[rgb(210,210,210)] to-transparent"></div>
  <Levelcard level={2} title="1000-1300 Rating" points={level2} badge={badge2} />
  <div className="hidden xl:block my-auto w-[1.8px] h-52 bg-gradient-to-b from-transparent via-[rgb(210,210,210)] to-transparent"></div>
  <Levelcard level={3} title="1300-1700 Rating" points={level3} badge={badge1} />
  <div className="hidden xl:block my-auto w-[1.8px] h-52 bg-gradient-to-b from-transparent via-[rgb(210,210,210)] to-transparent"></div>
  <Levelcard level={4} title="Above 1700 Rating" points={level4} badge={badge_star} />
</div>

  );
};

export default Levels;
