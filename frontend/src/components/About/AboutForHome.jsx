import React from "react";
import { Link, NavLink } from "react-router-dom";
import teamMembers from "./TeamMembers";
import aboutUs from "../../assets/AboutUs.png";

function AboutForHome() {
  return (
    <div className="w-[85vw] mx-auto mb-10">
      <div className="flex gap-[12vw] justify-center items-center">
        <img className=" drop-shadow-md" src={aboutUs} alt="about us" />
        <div>
          <div className="text-[1.5vw] font-[700] tracking-wider bg-gradient-to-tr from-[#3A8EF6] to-[#6F3AFA] inline-block text-transparent bg-clip-text mt-10">
            ABOUT US
          </div>
          <div className="text-[3vw] font-[600] pb-10">Our Goal</div>
          <div className="text-[#999191] text-[1.2vw] pb-10">
            We are a team of aspiring engineers who are passionate about health
            and wellness. We believe that everyone deserves to live a healthy
            and happy life, regardless of their age, background, or location.
            That’s why we created this website, to provide you with reliable and
            relevant health guidance that you can trust.
          </div>
          <NavLink to={"/about"}>
            <button
              className="bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] text-white p-3 px-6 rounded-3xl"
              onClick={() => <About />}
            >
              MORE ABOUT US
            </button>
          </NavLink>
        </div>
      </div>
      <div>
        <div className=" text-center text-[50px] font-[600] pb-10 tracking-wider mt-[15vh]">
          Meet Our Team
        </div>
        <div className="flex justify-around">
          {teamMembers.map((member) => (
            <div key={member.id}>
              <Link to={member.linkedin}>
              <img
                className="h-[205px] w-auto rounded-full"
                src={member.image}
              />
              
              <div className="text-center font-satoshi text-[34px] font-bold">
                {member.name}
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutForHome;
