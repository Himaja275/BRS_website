import React from "react";
import CoachCard from "../CoachCard.jsx";
import coach1 from "../../assets/coaches/coach1.avif";
import coach2 from "../../assets/coaches/coach2.avif";
import coach3 from "../../assets/coaches/coach3.avif";
import coach4 from "../../assets/coaches/coach4.avif";
import coach5 from "../../assets/coaches/coach5.avif";
import coach6 from "../../assets/coaches/coach6.avif";
import coach7 from "../../assets/coaches/coach7.avif";

const Coaches = () => {
  const coaches = [
    { img: coach1, name: "Gatram Sravan Kumar" },
    { img: coach2, name: "Madhava P" },
    { img: coach3, name: "K P Gowtham" },
    { img: coach4, name: "Abhisek Godse" },
    { img: coach5, name: "Goutham Suresh" },
    { img: coach6, name: "Mihir Loke" },
    { img: coach7, name: "Poojari Raghava" },
  ];
  return (
    <div className="relative m-auto grid place-items-center overflow-hidden">
      <div
        className="flex animate-scroll hover:animate-none"
        // className="flex"
        style={{
          width: `calc((var(--visible-cards) * 2) * (var(--card-width) + 2rem))`,
        }}
      >
        <CoachCard
          coach_img={coach1}
          name="Gatram Sravan Kumar"
          info="I’ve been playing chess since a very young age, driven by a deep passion for the game and a commitment to fostering youth development in chess. With a peak FIDE rating of 1560, I’ve competed in and won several prestigious tournaments, including FIDE-rated events Chess Schools program in 2016 and consistently staying active within the chess community. Over the past two years, I’ve dedicated myself to coaching, helping young players build their skills and achieve success in school-level, open, and FIDE-rated tournaments."
          bg_color="#fceded"
        />
        <CoachCard
          coach_img={coach2}
          name="Madhava P"
          info="I’m Madhava, a dedicated chess coach with three years of experience helping players enhance their skills and love for the game. Having competed at the state level and represented my school and college in tournaments, I bring firsthand competitive insights to my teaching. I also coach at a prominent chess club in Bangalore and am a certified chess arbiter, ensuring my students learn both the art and rules of the game."
          bg_color="#f4edfc"
        />
        <CoachCard
          coach_img={coach3}
          name="K P Gowtham"
          info="With over a decade of experience in chess, I’ve grown as a self-taught player, achieving a FIDE peak rating of 1545 and securing victories in FIDE Open, Rapid, State, and District tournaments. Representing my school at the State Level Chess Schools program in 2018 was a proud milestone, highlighting my dedication to the game. As a coach for the past six years, I’ve guided students to excel in tournaments ranging from school and interschool events to FIDE-rated and national competitions."
          bg_color="#fbf6ef"
        />
        <CoachCard
          coach_img={coach4}
          name="Abhisek Godse"
          info="I’m an experienced chess coach passionate about helping players of all ages and levels improve their game. I focus on building a strong foundation in openings, strategy, and endgames, tailoring lessons to individual needs. My students have achieved milestones like FIDE ratings, tournament victories, and national representation."
          bg_color="#f3f7ff"
        />
        <CoachCard
          coach_img={coach5}
          name="Goutham Suresh"
          info="I’ve been playing chess since a very young age, driven by a deep passion for the game and a commitment to fostering youth development in chess. With a peak FIDE rating of 1560, I’ve competed in and won several prestigious tournaments, including FIDE-rated events Chess Schools program in 2016 and consistently staying active within the chess community. Over the past two years, I’ve dedicated myself to coaching, helping young players build their skills and achieve success in school-level, open, and FIDE-rated tournaments."
          bg_color="#fbf4ef"
        />
        <CoachCard
          coach_img={coach6}
          name="Mihir Loke"
          info="As a dedicated chess coach, I bring both passion and expertise to the game. Currently active in competitive play, I specialize in training young players for national-level and FIDE-rated tournaments. With a focus on strategy, discipline, and mental toughness, my coaching aims to help students develop their skills, build confidence, and achieve their ultimate potential on the chessboard. Fide Rating std 1613"
          bg_color="#f0f8f6"
        />
        <CoachCard
          coach_img={coach7}
          name="Poojari Raghava"
          info="I’m Raghava, a chess coach and outdoor enthusiast with a passion for teaching and mentoring. With a BEd program background, I specialize in creating an engaging learning environment, helping students develop not only their chess skills but also their critical thinking and problem-solving abilities. Over the years, I’ve led chess workshops and camps, guiding players of all levels to improve their game."
          bg_color="#eef9fe"
        />

        <CoachCard
          coach_img={coach1}
          name="Gatram Sravan Kumar"
          info="I’ve been playing chess since a very young age, driven by a deep passion for the game and a commitment to fostering youth development in chess. With a peak FIDE rating of 1560, I’ve competed in and won several prestigious tournaments, including FIDE-rated events Chess Schools program in 2016 and consistently staying active within the chess community. Over the past two years, I’ve dedicated myself to coaching, helping young players build their skills and achieve success in school-level, open, and FIDE-rated tournaments."
          bg_color="#fceded"
        />
        <CoachCard
          coach_img={coach2}
          name="Madhava P"
          info="I’m Madhava, a dedicated chess coach with three years of experience helping players enhance their skills and love for the game. Having competed at the state level and represented my school and college in tournaments, I bring firsthand competitive insights to my teaching. I also coach at a prominent chess club in Bangalore and am a certified chess arbiter, ensuring my students learn both the art and rules of the game."
          bg_color="#f4edfc"
        />
        <CoachCard
          coach_img={coach3}
          name="K P Gowtham"
          info="With over a decade of experience in chess, I’ve grown as a self-taught player, achieving a FIDE peak rating of 1545 and securing victories in FIDE Open, Rapid, State, and District tournaments. Representing my school at the State Level Chess Schools program in 2018 was a proud milestone, highlighting my dedication to the game. As a coach for the past six years, I’ve guided students to excel in tournaments ranging from school and interschool events to FIDE-rated and national competitions."
          bg_color="#fbf6ef"
        />
        <CoachCard
          coach_img={coach4}
          name="Abhisek Godse"
          info="I’m an experienced chess coach passionate about helping players of all ages and levels improve their game. I focus on building a strong foundation in openings, strategy, and endgames, tailoring lessons to individual needs. My students have achieved milestones like FIDE ratings, tournament victories, and national representation."
          bg_color="#f3f7ff"
        />
        <CoachCard
          coach_img={coach5}
          name="Goutham Suresh"
          info="I’ve been playing chess since a very young age, driven by a deep passion for the game and a commitment to fostering youth development in chess. With a peak FIDE rating of 1560, I’ve competed in and won several prestigious tournaments, including FIDE-rated events Chess Schools program in 2016 and consistently staying active within the chess community. Over the past two years, I’ve dedicated myself to coaching, helping young players build their skills and achieve success in school-level, open, and FIDE-rated tournaments."
          bg_color="#fbf4ef"
        />
        <CoachCard
          coach_img={coach6}
          name="Mihir Loke"
          info="As a dedicated chess coach, I bring both passion and expertise to the game. Currently active in competitive play, I specialize in training young players for national-level and FIDE-rated tournaments. With a focus on strategy, discipline, and mental toughness, my coaching aims to help students develop their skills, build confidence, and achieve their ultimate potential on the chessboard. Fide Rating std 1613"
          bg_color="#f0f8f6"
        />
        <CoachCard
          coach_img={coach7}
          name="Poojari Raghava"
          info="I’m Raghava, a chess coach and outdoor enthusiast with a passion for teaching and mentoring. With a BEd program background, I specialize in creating an engaging learning environment, helping students develop not only their chess skills but also their critical thinking and problem-solving abilities. Over the years, I’ve led chess workshops and camps, guiding players of all levels to improve their game."
          bg_color="#eef9fe"
        />
      </div>
    </div>
  );
};

export default Coaches;
