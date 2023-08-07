import React from "react";
import { AiFillApple } from "react-icons/ai";
import { BiLogoPlayStore } from "react-icons/bi";

const Home = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-150px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-white z-10 hover:none">
          Simple and Safe Banking
        </h1>
        <p className="text-white z-10 mt-5">
          Approved by millions of Users Worldwide
        </p>

        <div className="z-10 flex mt-20 h-10 w-80 items-center ml-60">
          <button className="bg-white text-black flex pt-3 mr-5 rounded-lg h-15 text-xs">
            <AiFillApple size={30} />
            <div className="mr-5 w-40 mb-3">
              <p>Download on</p>
              <p>App Store</p>
            </div>
          </button>

          <button className="bg-white text-black flex pt-3 rounded-lg text-xs">
            <BiLogoPlayStore size={30} />
            <div className="mr-5 w-40 mb-3">
              <p>Get on</p>
              <p>Google Play</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
