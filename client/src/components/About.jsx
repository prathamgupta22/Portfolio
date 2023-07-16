import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a Computer Science student with strong willingness to exhibit
          proficiency in solving problems with my coding skills. First and
          foremost, I love writing code. Since my first program to print "Hello
          World" to produce the desired output for problems, I have been
          obsessed with the thought of solving practical problems using software
        </p>

        <br />

        <p className="text-xl">
          Each day solve one problem and the next day another problem comes,
          that makes me engage passionately.Through my academic and
          extracurricular experiences,I am also proficient in Java, MERN stack,
          and a decent knowledge of core computer science subjects . I am
          constantly seeking opportunities to apply and expand my technical
          abilities Please feel free to reach out to me if you would like to
          discuss potential opportunities or share advice.
        </p>
      </div>
    </div>
  );
};

export default About;
