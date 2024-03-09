import React, { useEffect, useState } from "react";
import topSvg from "../../../assets/Group 29 (1).png";
import downSvg from "../../../assets/Group 27 (1).png";
import Rewards from "./Rewards.jsx";
import Footer from "../../Footer/Footer.jsx";
import axios from "axios";

function RewardsPage() {

  return (
    <div className="max-w-[100vw] mt-[15vh] md:mt-[15vh] lg:mt-[15vh] xl:mt-[10vh] overflow-x-hidden relative">
      <img
        src={downSvg}
        alt="down"
        className="absolute right-0 h-[40vh] z-[0]"
      />
      <img
        src={topSvg}
        alt="top"
        className="absolute h-[40vh] bottom-[56vh] z-0"
      />
      <div className="w-[85vw] mx-auto relative">
		<div className="bg-indigo-500 text-xl w-[7vw] text-center font-bold text-white rounded-md px-4 py-2 absolute top-4 left-[8vw] flex justify-center items-center">{localStorage.getItem("points")} <span>🪙</span></div>
        <div className="w-full flex flex-col gap-10 justify-center items-center py-3">
          <div className="flex flex-col justify-center items-center gap-1">
            <h1 className="text-4xl font-bold">
              Hey!{" "}
              <span className="font-medium text-[#1678F2]">
                {localStorage.getItem("userName")}
              </span>
            </h1>
            <h2 className="text-5xl font-bold font-satoshi tracking-wider [word-spacing:10px]">
              Get your Rewards
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center w-full h-full z-10">
            {/* Rewards */}
            <Rewards />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RewardsPage;
