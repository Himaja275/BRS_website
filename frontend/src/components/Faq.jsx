import React, { useState } from "react";
import question from "../assets/faqs/question.svg";
import answer from "../assets/faqs/answer.svg";

const Faq = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const PlusSignCircleIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      color={"#000000"}
      fill={"none"}
      {...props}
    >
      <path
        d="M12 8V16M16 12H8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );

  const MinusSignCircleIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      color={"#000000"}
      fill={"none"}
      {...props}
    >
      <path
        d="M16 12H8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );

  return (
    <div className="flex flex-col gap-2">
      {/* Question Section */}
      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative">
          <div className="bg-[#fbf6ef] px-6 py-3 w-fit rounded-4xl transition-all duration-300">
            <div className="font-sans font-medium text-[rgb(51,51,51)] text-lg">
              {props.question}
            </div>
          </div>
          <img
            className="w-5 absolute -bottom-0.5 -left-1.5"
            src={question}
            alt=""
          />
        </div>
        <div className="opacity-70 scale-90">
          {isOpen ? <MinusSignCircleIcon /> : <PlusSignCircleIcon />}
        </div>
      </div>

      {/* Answer Section */}
      <div
        className={`transition-all duration-700 ease-in-out transform origin-center ${
          isOpen ? "max-h-40 opacity-100 translate-y-0 scale-100" : "max-h-0 opacity-0 -translate-y-4 scale-0"
        }flex items-center gap-4 cursor-pointer`}
      >
        <div className="relative ml-auto max-w-9/10">
          <div className="bg-[rgb(243,247,255)] px-6 py-3 rounded-4xl w-fit transition-all duration-300">
            <div className="font-sans font-medium text-[rgb(51,51,51)] text-lg">
              {props.answer}
            </div>
          </div>
          <img
            className="w-5 absolute -bottom-0.5 -right-1.5"
            src={answer}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
