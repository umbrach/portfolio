import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="w-full h-full py-[200px]  bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#f152af] text-2xl">Hi, my name is </p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#e4d9d9]">
          Denys Barabanov
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#7d7878]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#e4d9d9] py-4 max-w-[800px] text-lg">
          I'm looking for my first job in the IT industry. I am successfully
          completed my studies at the Go IT Academy from August 2022 to March
          2023. I have confident knowledge in many technologies and want to
          improve and learn more. Ready to work with the highest output, self
          motivation, have good communication & problem-solving skills.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#f152af] hover:border-[#f152af]">
              View my Works
              <HiArrowNarrowRight
                className="ml-5 group-hover:rotate-90 duration-300"
                size={22}
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
