import React from "react";
import { NavLink } from "react-router-dom";

const MobileSize = ({ navActive }) => {
  return (
    <>
      {navActive && (
        <>
          <div className="w-[100vw] h-[90vh] z-40 fixed top-[10vh] left-0 bg-white block md:block lg:hidden xl:hidden ">
            <ul className="flex w-[85vw] mx-auto flex-col justify-start items-start py-8 gap-[47.95px]">
              <NavLink to={"/"}>
                <li className="text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500]">
                  Home
                </li>
              </NavLink>
              <NavLink to={"/about"}>
                <li className="text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500]">
                  About Us
                </li>
              </NavLink>
              <NavLink to={"/howtouse"}>
                <li className="text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500]">
                  How to use
                </li>
              </NavLink>
              <NavLink to={"/mychallanges"}>
                <li className="text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500]">
                  Challenges
                </li>
              </NavLink>
              <NavLink to={"/login"}>
                <li className="text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500]">
                  <button
                    className="px-4 py-1 text-center text-white rounded-xl text-2xl"
                    style={{
                      background:
                        "linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%, #6F3AFA 196.74%)",
                    }}
                  >
                    Log In
                  </button>
                </li>
              </NavLink>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default MobileSize;
