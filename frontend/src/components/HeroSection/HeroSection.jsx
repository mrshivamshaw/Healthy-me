import React from "react";
import {Link} from 'react-router-dom'
import heroImage from "../../assets/kisspng-physician-diabetes-mellitus-computer-disease-preve-doctor-and-computer-5a99b82dcadc58_1-removebg-preview.png";
import bgImage from "../../assets/Background.png";
import heart from "../../assets/Group 20.png";
import tele from "../../assets/surface1.png";
import bot from "../../assets/Path 168.png";
import { TbTargetArrow } from "react-icons/tb";


const HeroSection = () => {
  return (
    <div className="flex max-w-[100vw]  h-auto  mt-[15vh] md:mt-[15vh] lg:mt-[15vh] xl:mt-[10vh] ">
      <div className="w-[85vw] mx-auto flex relative justify-center items-center mb-16 overflow-x-hidden">
        <img
          src={bgImage}
          alt="bg"
          className="z-0 absolute -left-2 -top-[10vh] w-full hidden md:hidden lg:block xl:block"
        />
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
          <div className="flex items-center justify-center gap-4">
          <Link to = "/chatbot">
          <button
            className="flex mt-20 justify-center items-center gap-5  font-satoshi text-white px-8 py-3 rounded-xl shadow-sm drop-shadow"
          

            style={{
              background: "linear-gradient(180deg, #006AFF 0%, rgba(0, 106, 255, 0.55) 100%)",


            }}

          >
            <img src={bot} alt="bot" className="h-[40px]" />
            <p className="text-[20px] font-[600]"> Talk to Me! </p>
            <img src={tele} alt="tele" className="h-[25px]" />
          </button>
          </Link><Link to = "/myChallenges">
          <button
            className="flex mt-20 justify-center items-center gap-2 font-satoshi text-white px-6 py-3 rounded-xl shadow-sm drop-shadow"
            
            style={{
              background: "linear-gradient(180deg, #212121 0%, rgba(33, 33, 33, 0.66) 100%)",


            }}
          >
            
            <p className="text-[20px] font-[600]">Challenge Yourself </p>
            <TbTargetArrow className="text-2xl"/>
          </button>
          </Link>
          </div>
        </div>
        <div className="z-10">
          <img src={heroImage} alt="heroImage" className="w-[40vw] h-auto" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
