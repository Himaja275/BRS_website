import React, {useRef, useState, useEffect} from "react";
import Faq from "../faq.jsx";

const Faqs = () => {
  
    useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const delay = 0.4;
  const qas = [
    {
      question: "What age groups are your chess classes suitable for?",
      answer:
        "Our classes are designed for all age groups! Whether you're a young beginner or an adult wanting to sharpen your skills, we’ve got a program tailored just for you.",
    },
    {
      question: "Do I need any prior chess knowledge to join?",
      answer:
        "Not at all! We welcome everyone, from complete beginners to advanced players. Our coaches will guide you at your pace.",
    },
    {
      question: "How do online chess classes work?",
      answer:
        "We conduct our classes via video calls. You’ll join a live session with a coach who will teach you using interactive boards, puzzles, and games. All you need is a device with internet access!",
    },
    {
      question: "Can I choose the timing of my classes?",
      answer:
        "Absolutely! We offer flexible scheduling options to fit your routine. Let us know your availability, and we’ll do our best to accommodate it.",
    },
    {
      question: "Are the sessions one-on-one or group-based?",
      answer:
        "We offer both options! If you prefer personalized attention, go for one-on-one sessions. For a collaborative learning experience, group classes are great.",
    },
    {
      question: "Will I get a chance to play games during the class?",
      answer:
        "Of course! Practice is a big part of learning chess. You’ll play against your coach, classmates, or even participate in friendly tournaments.",
    },
    {
      question: "What equipment do I need to attend the classes?",
      answer:
        "All you need is a device (computer, tablet, or smartphone) with a stable internet connection. A chessboard is optional but can be helpful for offline practice.",
    },
    {
      question: "How can I track my progress?",
      answer:
        "We provide regular feedback and progress reports. You’ll also get to see your improvement through puzzles, games, and evaluations.",
    },
    {
      question: "Do you organize tournaments or competitions?",
      answer:
        "Yes! We host online tournaments where you can test your skills, compete with others, and win exciting prizes.",
    },
  ];
  return (
    <div className="w-[85%] bg-white px-10 max-w-3xl mx-auto py-10  rounded-3xl flex flex-col gap-8" ref={containerRef}>
      <div className={visible?"text-[#ed8d3e] text-base font-[Outfit] font-semibold fade-up":"text-[#ed8d3e] text-base font-[Outfit] font-semibold"} style={visible ? { animationDelay: `${0 * delay}s` } : {}}>FAQs</div>
      <div className={visible?"font-sans font-bold text-4xl fade-up":"font-sans font-bold text-4xl"} style={visible ? { animationDelay: `${1 * delay}s` } : {}}>Frequently Asked Questions</div>
      <div className="flex flex-col gap-6">
      {qas.map((item, index) => (
        <Faq key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
    </div>
  );
};

export default Faqs;
