import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/healthyme.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navActive,SetNavActive] = useState(false)
  return (
    <div className='h-[10vh] max-w-[100vw] flex justify-between items-center px-[7vw] overflow-x-hidden'>
        <div className='flex justify-center items-baseline gap-[10px]'>
            <img src="https://res.cloudinary.com/dnrwlbbbj/image/upload/v1702320663/check/Group_1_d0tqtt.png" alt="logo" className='h-[45.21px] w-auto '/>
            <img src={logo} alt="logo" className='h-[65.21px] w-auto '/>
        </div>
        <div className='w-auto items-center'>
            <ul className='flex justify-center items-center gap-[47.95px]'>
                <li className='text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500]'><NavLink to={"/"}>Home</NavLink></li>
                <li className='text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500]'><NavLink to={"/about"}>About Us</NavLink></li>
                <li className='text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500]'><NavLink to={"/howtouse"}>How to use</NavLink></li>
                <li className='text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500]'><button className="px-4 py-1 text-center text-white rounded-xl text-2xl" style={{background: "linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%, #6F3AFA 196.74%)"}}>
  <NavLink to="/login">Log In</NavLink>
</button></li>
            </ul>
        </div>
    </div>
  );
};

export default Navbar;
