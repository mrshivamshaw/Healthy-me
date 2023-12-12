import React from "react";
import heroImage from "../../assets/kisspng-physician-diabetes-mellitus-computer-disease-preve-doctor-and-computer-5a99b82dcadc58_1-removebg-preview.png";
import bgImage from "../../assets/Background.png";
import heart from "../../assets/Group 20.png";
import tele from "../../assets/surface1.png";
import bot from "../../assets/Path 168.png";

const HeroSection = () => {
  return (
    <div className="flex w-[100vw]  h-auto relative ">
      <div className="w-[85vw] mx-auto flex justify-center items-center mb-16 overflow-x-hidden">
        {/* <img
          src={bgImage}
          alt="bg"
          className="z-0 absolute -left-2 -top-[10vh] w-full"
        /> */}
        <div className="flex flex-col justify-start items-start w-[45vw] z-10 ">
          <div className="flex justify-center items-center rounded-[40px] border-[1px] border-[#B4B4B4] py-2 px-3">
            <p className=" text-xl font-[700] font-satoshi text-[#525252] ">
              Health Matters{" "}
            </p>
            <img src={heart} alt="heart" className="w-auto h-[20px]" />
          </div>

          <div className="text-7xl font-akshar leading-[76px] ">
            <span className="text-[#1678F2] font-[500]">
              One Step Solution <br />
            </span>{" "}
            for all your medical queries
          </div>
          <p className="mt-3 text-xl font-satoshi font-[600] text-[#8A8585]">
            Using your BMI index we calculate whether the dish is suitable for
            you.
          </p>
          
          <button
            className="flex mt-20 justify-center items-center gap-5  font-satoshi  text-white px-8 py-3 rounded-xl"
            style={{
              background:
                "linear-gradient(180deg, rgba(71, 121, 247, 0.85) 0%, rgba(108, 174, 255, 0.85) 99.98%, rgba(140, 9, 244, 0.85) 99.99%)",
            }}
          >
            <img src={bot} alt="bot" className="h-[65px]" />
            <p className="text-[30px] font-[600]"> Talk to Me! </p>
            <img src={tele} alt="tele" className="h-[40px]" />
          </button>
        </div>
        <div className="z-10">
          <img src={heroImage} alt="heroImage" className="w-[40vw] h-auto" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
