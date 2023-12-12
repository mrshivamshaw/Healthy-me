import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-[10vh] w-[100vw] flex justify-between items-center px-[7vw]'>
        <div className='flex justify-center items-center gap-[10px]'>
            <img src="https://res.cloudinary.com/dnrwlbbbj/image/upload/v1702320663/check/Group_1_d0tqtt.png" alt="logo" className='h-[55.21px] w-auto '/>
            <h1 className="text-transparent text-[39px] leading-[58.35px] font-bold bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
      HealthyMe
    </h1>
        </div>
        <div className='w-auto items-center'>
            <ul className='flex justify-center items-center gap-[47.95px]'>
                <li className='text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500]'><NavLink to={"/"}>Home</NavLink></li>
                <li className='text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500]'><NavLink to={"/about"}>About Us</NavLink></li>
                <li className='text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500]'><NavLink to={"/howtouse"}>How to use</NavLink></li>
                <li className='text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500]'><button className="px-4 py-1 text-center text-white rounded-xl text-2xl bg-gradient-to-r from-blue-500 to-purple-500">
  <NavLink to="/login">Log In</NavLink>
</button></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar