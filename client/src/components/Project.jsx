import React from "react";
import ChatEase from "../assets/portfolio/ChatEase.jpg";
import DRUMKIT from "../assets/portfolio/DRUMKIT.jpg";
import Ecommerce from "../assets/portfolio/Ecommerce.jpg";
import MovieMagic from "../assets/portfolio/MovieMagic.jpg";
import ZOMATO from "../assets/portfolio/ZOMATO.jpg";
import PORTFOLIO from "../assets/portfolio/PORTFOLIO.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ChatEase,
      demoLink: "https://chatbase-fknt.onrender.com",
      codeLink: "https://github.com/prathamgupta22/ChatEase",
    },
    {
      id: 2,
      src: MovieMagic,
      demoLink: "https://example.com/demo1",
      codeLink: "https://github.com/prathamgupta22/Movie-Magic",
    },
    {
      id: 3,
      src: Ecommerce,
      demoLink: "https://example.com/demo1",
      codeLink: "https://github.com/prathamgupta22/EazyBuy",
    },
    {
      id: 4,
      src: ZOMATO,
      demoLink: "https://zomato22.netlify.app",
      codeLink: "https://github.com/prathamgupta22/zomato-landing-page-22",
    },
    {
      id: 5,
      src: DRUMKIT,
      demoLink: "https://majestic-kulfi-34f5b3.netlify.app",
      codeLink: "https://github.com/prathamgupta22/DRUMm",
    },
    {
      id: 6,
      src: PORTFOLIO,
      demoLink: "https://example.com/demo1",
      codeLink: "https://github.com/prathamgupta22/Portfolio",
    },
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
