import React from 'react';

const Button = ({ text }) => {
  return (
    <button className="font-bold py-4 px-6 rounded-full text-[black] border-2 border-[#003a69] cursor-pointer hover:text-white hover:bg-black">
      {text}
    </button>
  );
};

export default Button;
