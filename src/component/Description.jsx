import React from "react";

export default function Description({ text, className = "" }) {
  return (
    <p
      className={`max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 ${className}`}
    >
      {text}
    </p>
  );
}
