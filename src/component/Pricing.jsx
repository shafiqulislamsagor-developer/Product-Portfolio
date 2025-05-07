import React from "react";
import SingleCheck from "../assets/svg/SingleCheck";
import Description from "./Description";
import Heading from "./Heading";
import Button from "./Button";

export default function Pricing() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="max-w-screen-md flex flex-col items-center mx-auto mb-8 text-center lg:mb-12">
          <Heading text={"Designed for business teams like yours"} />
          <Description
            className="!mb-5 md:!mb-5"
            text={
              "Here at Landwind we focus on markets where technology, innovation,and capital can unlock long-term value and drive economic growth."
            }
          />
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {PricingData.map((item, id) => (
            <div
              key={id}
              className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
            >
              <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                {item.description}
              </p>

              <div className="flex items-baseline justify-center my-8">
                <span className="mr-2 text-5xl font-extrabold">
                  ${item.price}
                </span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>

              <ul role="list" className="mb-8 space-y-4 text-left">
                {item.service.map((i, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <SingleCheck />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <Button text={"Get started"} type={"link"} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PricingData = [
  {
    title: "Starter",
    description: "Best option for personal use & for your next project.",
    price: 29,
    service: [
      <>Individual configuration</>,
      <>No setup, or hidden fees</>,
      <>
        Team size: <span className="font-bold">1 developer</span>
      </>,
      <>
        Premium support: <span className="font-bold">6 months</span>
      </>,
      <>
        Free updates: <span className="font-bold">6 months</span>
      </>,
    ],
  },
  {
    title: "Company",
    description: "Relevant for multiple users, extended & premium support.",
    price: 99,
    service: [
      <>Individual configuration</>,
      <>No setup, or hidden fees</>,
      <>
        Team size: <span className="font-bold">10 developer</span>
      </>,
      <>
        Premium support: <span className="font-bold">24 months</span>
      </>,
      <>
        Free updates: <span className="font-bold">24 months</span>
      </>,
    ],
  },
  {
    title: "Enterprise",
    description:
      "Best for large scale uses and extended redistribution rights.",
    price: 499,
    service: [
      <>Individual configuration</>,
      <>No setup, or hidden fees</>,
      <>
        Team size: <span className="font-bold">100+ developer</span>
      </>,
      <>
        Premium support: <span className="font-bold">36 months</span>
      </>,
      <>
        Free updates: <span className="font-bold">36 months</span>
      </>,
    ],
  },
];
