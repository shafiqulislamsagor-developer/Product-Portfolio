import React from "react";
import Country from "../assets/svg/Country";
import Million from "../assets/svg/Million";
import Uptime from "../assets/svg/Uptime";
import User from "../assets/svg/User";
import Description from "./Description";
import Heading from "./Heading";

const TextLinkData = ["Explore Legality Guides", "Visit the Trust Center"];

const WorldWideData = [
  {
    icon: <Uptime />,
    title: "99.99% uptime",
    description: "For Landwind, with zero maintenance downtime",
  },
  {
    icon: <User />,
    title: "600M+ Users",
    description: "Trusted by over 600 milion users around the world",
  },
  {
    icon: <Country />,
    title: "100+ countries",
    description: "Have used Landwind to create functional websites",
  },
  {
    icon: <Million />,
    title: "5+ Million",
    description: "Transactions per day",
  },
];

export default function WorldWide() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
          <div className="col-span-2 mb-8">
            <Heading type={"color"} text={"Trusted Worldwide"} />

            <Heading
              text={"Trusted by over 600 million users and 10,000 teams"}
              classNameName={"mt-3 mb-4"}
            />

            <Description
              text={
                " Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers."
              }
            />
            <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
              {TextLinkData.map((text, id) => (
                <div key={id}>
                  <Heading type={"link"} text={text} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            {WorldWideData.map((data, id) => (
              <div key={id}>
                {data.icon}
                <h3 className="mb-2 text-2xl font-bold dark:text-white">
                  {data.title}
                </h3>
                <p className="font-light text-gray-500 dark:text-gray-400">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
