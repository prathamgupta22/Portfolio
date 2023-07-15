import React from "react";

import HeroImage from "../assets/heroImage.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black
    to-gray-800"
    >
      <div
        className="max-w-screnn-lg max-auto flex flex-col items-center
      justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className=" text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a computer science graduate , passionate about building
            products Currently, I love to work on web application using
            technologies like React , Nodejs , Tailwind and MongoDB.
          </p>
          <div>
            <button
              className="group text-white w-fit px-6 py-3 my-2 flex items-center
            rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div className="px-4">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full lg:w-44 xl:max-w-full"
            style={{
              width: "35vh",
              "@media (min-width: 1024px)": {
                width: "100%",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
