import React from "react";
import Airbnb from "../assets/svg/Airbnb";
import Google from "../assets/svg/Google";
import Mailchimep from "../assets/svg/Mailchimep";
import Mashable from "../assets/svg/Mashable";
import Microsoft from "../assets/svg/Microsoft";
import Spotify from "../assets/svg/Spotify";

const AllCompanies = [
  <Airbnb />,
  <Google />,
  <Microsoft />,
  <Spotify />,
  <Mailchimep />,
  <Mashable />,
];

export default function Companies() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          {AllCompanies.map((company, id) => (
            <a
              key={id}
              href="#"
              className="flex items-center lg:justify-center"
            >
              {company}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
