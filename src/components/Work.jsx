import React from "react";
import Cocktails from "../assets/Cocktails.png";
import FoodSta from "../assets/FoodSta.png";
import Kapusta from "../assets/Kapu$ta.png";
// import Crypto from "../assets/CryptoBase.png";
import Weather from "../assets/Weather.png";
import Mobile from "../assets/ReactNative.png";
import Crypto from "../assets/Crypto.png";

function Work() {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold  inline border-b-4 text-gray-200 border-[#f152af]">
            Work
          </p>
          <p className="py-6 text-lg">Check out some of my recent projects</p>
        </div>

        {/* Container */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid */}

          <div
            style={{
              backgroundImage: `url(${FoodSta})`,
              backgroundSize: "cover ",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-300 p-2">
              <span className="text-2xl font-bold text-white tracking-wider">
                HTML, CSS, JS
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://burko-oleksandra.github.io/FoodSta/"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Burko-Oleksandra/FoodSta"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${Cocktails})`,
              backgroundSize: "cover",
              backgroundPosition: "right",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-300 p-2">
              <span className="text-2xl font-bold text-white tracking-wider">
                JS, HTML, CSS
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://oleksandr1914.github.io/bc-camel-case_party-cocktails/"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Oleksandr1914/bc-camel-case_party-cocktails"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${Kapusta})`,
              backgroundSize: "cover",
              backgroundPosition: "left",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-300 p-2">
              <span className="text-2xl font-bold text-white tracking-wider">
                React, Redux, JS
              </span>
              <div className="pt-8 text-center">
                <a href="https://hodosovsky.github.io/kapusta/" target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/hodosovsky/kapusta" target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${Crypto})`,
              backgroundPosition: "left",
              backgroundSize: "cover",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-300 p-2">
              <span className="text-2xl font-bold text-white tracking-wider">
                React, Tailwind, Firebase
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://crypto-app-8dfa6.firebaseapp.com/"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/umbrach/crypto-app-react"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${Mobile})`,
              backgroundPosition: "top",
              backgroundSize: "cover",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-300 p-2">
              <span className="text-2xl font-bold text-white tracking-wider">
                ReactNative, Redux, Firebase
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://qr.expo.dev/eas-update?updateId=82936ea1-d62c-42c2-b565-507dc0bcbe90&appScheme=exp&host=u.expo.dev"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/umbrach/ReactNativeApp"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${Weather})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-300 p-2">
              <span className="text-2xl font-bold text-white tracking-wider">
                Next.js Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://nextjs-weather-app-self.vercel.app/"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/umbrach/nextjs-weather-app"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
