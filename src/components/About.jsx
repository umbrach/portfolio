import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-full pt-[80px] bg-[#0a192f] text-gray-200"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1200px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#f152af]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1200px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Denys, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="text-lg">
              Let me introduce myself. Let's start from the beginning. Last 8
              years I'm working as a seafarer, in position of captain's 3rd &
              2nd Mate. Working worlwide at all times. After visiting many
              places, countries and continents, I decided to change my career
              field. I always enjoyed creating something and being involved in
              it, or at least participating in it. That's why I became
              interested in the IT industry. Also, I have experience in studying
              as a UX/UI designer. As for now, after successfull study at GoIt
              Academy from August 2022 to March 2023 and ready to start my new
              journey in IT.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
