import React from "react";
import Arrow from "../assets/svg/Arrow";

export default function Heading({ text, type, className }) {
  if (type === "link") {
    return (
      <a
        href="#"
        className={`inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700 ${className}`}
      >
        {text}
        <Arrow />
      </a>
    );
  }
  if (type === "color") {
    return (
      <p
        className={`text-lg font-medium text-purple-600 dark:text-purple-500 ${className}`}
      >
        {text}
      </p>
    );
  }
  return (
    <h2
      className={`mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white ${className}`}
    >
      {text}
    </h2>
  );
}
