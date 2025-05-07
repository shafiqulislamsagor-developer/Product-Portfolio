import React from "react";
import logo from "../assets/logo.svg";
import Facebook from "../assets/svg/Facebook";
import Github2 from "../assets/svg/Github2";
import Instragram from "../assets/svg/Instragram";
import Internet from "../assets/svg/Internet";
import Twiter from "../assets/svg/Twiter";

const TextColor = ({ text }) => {
  return (
    <a
      href="#"
      className="text-purple-600 hover:underline dark:text-purple-500"
    >
      {text}
    </a>
  );
};

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {FooterData.map((data, id) => (
            <div key={id}>
              <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {data.title}
              </h3>
              <ul className="text-gray-500 dark:text-gray-400">
                {data.linkList.map((link) => (
                  <li key={link.id} className="mb-4">
                    <a href={link.link} className=" hover:underline">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="text-center">
          <a
            href="#"
            className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              src={logo}
              className="h-6 mr-3 sm:h-9"
              alt="Learn with Sumit Logo"
            />
            Learn with Sumit{" "}
          </a>
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2024-2025 Learn with Sumit. All Rights Reserved. Built with{" "}
            <TextColor text={"Flowbite"} /> and{" "}
            <TextColor text={"Tailwind CSS"} />.
          </span>
          <ul className="flex justify-center mt-5 space-x-5">
            {FooterIcon.map((icon) => (
              <li key={icon.id}>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >
                  {icon.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

const FooterData = [
  {
    title: "Company",
    linkList: [
      {
        id: 1,
        link: "#",
        text: "About",
      },
      {
        id: 2,
        link: "#",
        text: "Careers",
      },
      {
        id: 3,
        link: "#",
        text: "Brand Center",
      },
      {
        id: 4,
        link: "#",
        text: "Blog",
      },
    ],
  },
  {
    title: "Help center",
    linkList: [
      {
        id: 1,
        link: "#",
        text: "Discord Server",
      },
      {
        id: 2,
        link: "#",
        text: "Twitter",
      },
      {
        id: 3,
        link: "#",
        text: "Facebook",
      },
      {
        id: 4,
        link: "#",
        text: "Contact Us",
      },
    ],
  },
  {
    title: "Legal",
    linkList: [
      {
        id: 1,
        link: "#",
        text: "Privacy Policy",
      },
      {
        id: 2,
        link: "#",
        text: "Licensing",
      },
      {
        id: 3,
        link: "#",
        text: "Terms",
      },
    ],
  },
  {
    title: "Company",
    linkList: [
      {
        id: 1,
        link: "#",
        text: "About",
      },
      {
        id: 2,
        link: "#",
        text: "Careers",
      },
      {
        id: 3,
        link: "#",
        text: "Brand Center",
      },
      {
        id: 4,
        link: "#",
        text: "Blog",
      },
    ],
  },
  {
    title: "Download",
    linkList: [
      {
        id: 1,
        link: "#",
        text: "iOS",
      },
      {
        id: 2,
        link: "#",
        text: "Android",
      },
      {
        id: 3,
        link: "#",
        text: "Windows",
      },
      {
        id: 4,
        link: "#",
        text: "MacOS",
      },
    ],
  },
];

const FooterIcon = [
  {
    id: 1,
    icon: <Facebook />,
  },
  {
    id: 2,
    icon: <Instragram />,
  },
  {
    id: 3,
    icon: <Twiter />,
  },
  {
    id: 4,
    icon: <Github2 />,
  },
  {
    id: 5,
    icon: <Internet />,
  },
];
