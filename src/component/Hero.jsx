import React from "react";
import hero from "../assets/hero.png";
import Figma from "../assets/svg/Figma";
import Github from "../assets/svg/Github";
import Button from "./Button";
import Description from "./Description";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            Building digital <br />
            products & brands.
          </h1>
          <Description
            text={
              <>
                This free and open-source landing page template was built using
                the utility classes from{" "}
                <a href="#" className="hover:underline">
                  Tailwind CSS
                </a>{" "}
                and based on the components from the Flowbite Library and the
                Blocks System.
              </>
            }
          />
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <Button
              text={"View on GitHub"}
              icon={<Github />}
              type={"outline1"}
            />
            <Button
              text={"Get Figma file"}
              icon={<Figma />}
              type={"outline2"}
            />
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={hero} alt="hero image" />
        </div>
      </div>
    </section>
  );
}
