import React from "react";

import feature1 from "../assets/features/feature-1.png";
import feature2 from "../assets/features/feature-2.png";
import Check from "../assets/svg/Check";
import Description from "./Description";
import Heading from "./Heading";

const ServicesData = [
  {
    title: "Work with tools you already use",
    description:
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.",
    service: [
      "Continuous integration and deployment",
      "Development workflow",
      "Knowledge management",
    ],
    title2:
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.",
    image: feature1,
  },
  {
    title: "We invest in the world’s potential",
    description:
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.",
    service: [
      "Dynamic reports and dashboards",
      "Templates for everyone",
      "Development workflow",
      "Limitless business automation",
      "Knowledge management",
    ],
    title2:
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions",
    image: feature2,
  },
];

export default function Services() {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          {ServicesData.map((service, id) => (
            <div
              key={id}
              className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16"
            >
              {id === 1 && (
                <img
                  className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                  src={service.image}
                  alt="dashboard feature image"
                />
              )}
              <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                <Heading text={service.title} />
                <Description text={service.description} />

                <ul
                  role="list"
                  className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
                >
                  {service.service.map((li, id) => (
                    <li key={id} className="flex space-x-3">
                      <Check />
                      <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                        {li}
                      </span>
                    </li>
                  ))}
                </ul>

                <Description text={service.title2} />
              </div>
              {id === 0 && (
                <img
                  className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                  src={service.image}
                  alt="dashboard feature image"
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
