import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/healthyme.png";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileSize from "./MobileSize";
import { useAuth } from "../../contextApi/ContextApi";
import { GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";

const clientId = "544386339743-9vsphcfv26ubqhvbv34kepfa3r64uap4.apps.googleusercontent.com";


const Navbar = () => {

  const onSuccess = () => {
    console.log("Logout sucessfull");
  }

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId : clientId ,
        scope : ""
      })
    };
    gapi.load('client:auth2' , start);
  })



  const navigate = useNavigate()
  const {isLoggedIn,setIsLoggedIn,checkAuth} = useAuth()
  const [navActive,SetNavActive] = useState(false)
  useEffect(()=>{
    checkAuth();
  },[isLoggedIn])
  const logOutHandler = () =>{
    localStorage.removeItem("token")
    localStorage.removeItem("userName")
    localStorage.removeItem("userId")
    setIsLoggedIn(false)
    navigate('/login')
  }
  return (
    <div className="z-40 fixed top-0 left-0 h-[10vh] w-[100vw] bg-white flex justify-between shadow-md items-center px-[7vw] overflow-hidden mb-[10vh] md:mb-[10vh] lg:mb-[10vh] xl:mb-0">
      <div className="flex justify-center items-baseline gap-[10px]">
        <img
          src="https://res.cloudinary.com/dnrwlbbbj/image/upload/v1702320663/check/Group_1_d0tqtt.png"
          alt="logo"
          className="h-[45.21px] w-auto mb-2"
        />
        <img src={logo} alt="logo" className="h-[65.21px] w-auto " />
      </div>
      <div className="w-auto hidden md:hidden lg:block xl:block">
        <ul className="flex justify-center items-center gap-[47.95px]">
          <NavLink to={"/"}>
            <li className="text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500] hover:text-black">
              Home
            </li>
          </NavLink>
          <NavLink to={"/about"}>
            <li className="text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500] hover:text-black">
              About Us
            </li>
          </NavLink>
          <NavLink to={"/chatbot"}>
            <li className="text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500] hover:text-black">
              Chatbot
            </li>
          </NavLink>
          <NavLink to={"/mychallenges"}>
            <li className="text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500] hover:text-black">
              Challenges
            </li>
          </NavLink>
          <NavLink to={"/rewards"}>
            <li className="text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500] hover:text-black">
              Rewards
            </li>
          </NavLink>

          {/* Google Logout */}

          {/* <div id="signOutButton">
            <GoogleLogout
              clientId={clientId}
              buttonText="Sign Out"
              onLogoutSuccess={onSuccess}
            />
          </div> */}



          {!isLoggedIn && <NavLink to={"/login"}>
             <li className="text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500]">
              <button
                className="px-4 py-1 text-center text-white rounded-xl text-xl"
                style={{
                  background:
                    "linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%, #6F3AFA 196.74%)",
                }}
              >
                Log In
              </button>
            </li>
          </NavLink>}
          {isLoggedIn && <li className="text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500]">
              <button 
                onClick={logOutHandler}
                className="px-4 py-1 text-center text-white rounded-xl text-xl"
                style={{
                  background:
                    "linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%, #6F3AFA 196.74%)",
                }}
              >
                Log Out
              </button>
            </li>}
        </ul>
      </div>
      {
        navActive ? <FaTimes onClick={()=>SetNavActive(false)} className="block md:block lg:hidden xl:hidden text-lg"/>:<FaBars onClick={()=>SetNavActive(true)} className="block md:block lg:hidden xl:hidden text-lg"/>
      }
      <MobileSize navActive={ navActive}/>
    </div>
  );
};

export default Navbar;
