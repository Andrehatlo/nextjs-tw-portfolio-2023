import React, { useState } from "react";

interface Props {
    children: ReactElement[];
}

const Carousel: React.FC<Props> = ({ children }) => {
  const [index, setIndex] = useState(0);


  return (
    <div className="flex overflow-x-auto">
      {children.map((child, i) => (
        <div
          key={i}
          className={`w-64 h-64 mr-6 ${
            index === i ? "opacity-100" : "opacity-0"
          }`}
        >
          {child}
        </div>
      ))}
      <button
        onClick={() => setIndex((index + 1) % index.length)}
        className="bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center m-auto"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
