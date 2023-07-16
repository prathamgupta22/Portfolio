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
          i am a Computer Science student with strong willingness to exhibit
          proficiency in solving problems with my coding skills. First and
          foremost, I love writing code. Since my first program to print "Hello
          World" to produce the desired output for problems, I have been
          obsessed with the thought of solving practical problems using
          software. Software Engineering is one of the puzzles that has no end,
          where my interest comes. Each day solving one problem and the next day
          another problem comes, that makes me engage passionately.
        </p>

        <br />

        <p className="text-xl">
          I am a Fourth-year undergraduate pursuing a B.Tech degree from GGITS
          JABALPUR, I am committed to developing my skills and knowledge in the
          field of engineering. I have good programming skills with good command
          on data structures and algorithms Through my academic and
          extracurricular experiences, I have developed strong problem-solving,
          analytical thinking, and programming skills. I am also proficient in
          Java, MERN stack, and a decent knowledge of core computer science
          subjects .
        </p>
        <br />
        <p className="text-xl">
          I am constantly seeking opportunities to apply and expand my technical
          abilities. Looking to the future, I am excited to explore career
          opportunities in IT, and I am eager to connect with professionals in
          the industry to learn from their experiences and insights an convert
          my theoritical skill to practical projects, Please feel free to reach
          out to me if you would like to discuss potential opportunities or
          share advice.
        </p>
      </div>
    </div>
  );
};

export default About;
