import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Firebase from "../assets/firebase.png";
import JS from "../assets/javascript.png";
import Node from "../assets/node.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

function Skill() {
  return (
    <div name="skills" className="w-full h-full pt-[80px] bg-[#0a192f] text-gray-200">
      {/* container */}
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl inline font-bold border-b-4 border-[#f152af]">
            Skills
          </p>
          <p className="py-4 text-lg">These are technologies I've work with</p>
        </div>

        <div className="w-full grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto " src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto " src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto " src={JS} alt="JS icon" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto " src={ReactImg} alt="ReactImg icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto " src={Node} alt="Node icon" />
            <p className="my-4">Node.JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto " src={Mongo} alt="Mongo icon" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto " src={Firebase} alt="Firebase icon" />
            <p className="my-4">Firebase</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto " src={Tailwind} alt="Github icon" />
            <p className="my-4">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
