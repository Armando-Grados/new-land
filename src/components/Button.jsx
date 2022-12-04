import React from "react";

export const BtnSm = ({ text, bgColor, textColor, otherClasses }) => {
  return (
    <button
      className={`px-4 py-2 outline rounded-md outline-1 bg-${bgColor} text-${textColor} ${otherClasses}`}
    >
      {text}
    </button>
  );
};

export const BtnLg = ({ text, bgColor, textColor, otherClasses }) => {
  return (
    <div>
      <button
        className={`px-4 py-2 outline rounded-sm outline-1 bg-${bgColor} text-${textColor} ${otherClasses}`}
      >
        {text}
      </button>
    </div>
  );
};
