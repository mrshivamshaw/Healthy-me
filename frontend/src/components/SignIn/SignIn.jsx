import React from "react";
import cardiologist from "../../assets/Cardiologist.gif";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const SignIn = () => {
  return (
    <>
    <Navbar/>
    <div className="w-[100vw] h-[100vh] bg-white box-border overflow-hidden flex justify-center items-center">
      <div className="w-[70vw] h-[85vh] flex justify-center items-center  gap-[5vw] bg-white shadow-xl">
        <img
          src={cardiologist}
          alt="cardiologist"
          className="w-[35vw] h-auto"
        />
        <div className="w-[25vw] h-auto">
          <h1 className="w-full text-center text-[50px] font-[600] pb-10 tracking-wider ">
            Sign In
          </h1>
          <form
            action=""
            className="flex flex-col justify-start items-start gap-7"
          >
            <div className=" flex justify-between items-center w-full gap-3">
              <div className="flex flex-col w-full gap-1">
                <label
                  htmlFor="firstName"
                  className="font-satoshi font-semibold text-sm text-black/75 "
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="bg-slate-100 px-3 py-1 w-full border-2 border-slate-100 rounded-md"
                  placeholder="First name "
                />
              </div>

              <div className="flex flex-col w-full gap-1">
                <label
                  htmlFor="lastName"
                  className="font-satoshi font-semibold text-sm text-black/75 "
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="bg-slate-100 px-3 py-1 w-full border-2 border-slate-100 rounded-md"
                  placeholder="Last name "
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-1">
              <label
                htmlFor="email"
                className="font-satoshi font-semibold text-sm text-black/75 "
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-slate-100 px-3 py-1 w-full border-2 border-slate-100 rounded-md"
                placeholder="Last name "
              />
            </div>
            <div className=" flex justify-between items-center w-full gap-3">
              <div className="flex flex-col  gap-1 w-[80%]">
                <label
                  htmlFor="phone"
                  className="font-satoshi font-semibold text-sm text-black/75 "
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="bg-slate-100 px-3 py-1 w-full border-2 border-slate-100 rounded-md"
                  placeholder="phone"
                />
              </div>
              <div className="flex flex-col w-[20%] gap-1">
                <label
                  htmlFor="Age"
                  className="font-satoshi font-semibold text-sm text-black/75 "
                >
                  Age
                </label>
                <input
                  type="number"
                  id="Age"
                  className="bg-slate-100 px-3 py-1 w-full border-2 border-slate-100 rounded-md"
                  placeholder="0"
                />
              </div>
            </div>
            <div className=' flex justify-between items-center w-full gap-3'>

                <div className='flex flex-col w-full gap-1'>
                    <label htmlFor="password" className='font-satoshi font-semibold text-sm text-black/75 '>Password</label>
                    <input type="password" id='password' className='bg-slate-100 px-3 py-1 w-full border-2 border-slate-100 rounded-md' placeholder='password'/>
                </div>
                
                <div className='flex flex-col w-full gap-1'>
                    <label htmlFor="confirmPass" className='font-satoshi font-semibold text-sm text-black/75 '>Confirm password</label>
                    <input type="password" id='confirmPass' className='bg-slate-100 px-3 py-1 w-full border-2 border-slate-100 rounded-md' placeholder='confirm password '/>
                </div>
            </div>
            <button type="submit" className="w-full text-center bg-[#376FE9] rounded-3xl py-2 text-xl text-white border hover:border-[#376FE9] hover:bg-white hover:text-[#376FE9] transition-all duration-200">sign in</button>
            <p className="w-full text-center font-medium">Already have an account? <Link to='/login'><span className="text-cyan-600 font-bold">Log in</span></Link></p>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignIn;
