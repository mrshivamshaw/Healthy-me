import React, { useContext, useState } from "react";
import cardiologist from "../../assets/Cardiologist.gif";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../../contextApi/ContextApi";

const SignIn = () => {
  const storeInLs = useAuth()
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [contactNumber, setContactNumber] = useState();
  
  const signinHandler = async(e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/v1/signin',{
        firstName,
        lastName,
        password,
        confirmPassword,
        email,
        age,
        contactNumber
      })
      .then((res)=>{
        if(res.data.success === true){
          navigate('/login')
          toast(res.data.message);
        }else {
          console.log(res.data.message);
          toast.error(res.data.message);
        }
      })
    } catch (error) {
      toast('Please try again')
      console.log(error);
    }
  }


  return (
    <>
      <Navbar />
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
              onSubmit={signinHandler}
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
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
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
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
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
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
              </div>
              <div className=" flex justify-between items-center w-full gap-3">
                <div className="flex flex-col w-full gap-1">
                  <label
                    htmlFor="password"
                    className="font-satoshi font-semibold text-sm text-black/75 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-slate-100 px-3 py-1 w-full border-2 border-slate-100 rounded-md"
                    placeholder="password"
                  />
                </div>

                <div className="flex flex-col w-full gap-1">
                  <label
                    htmlFor="confirmPass"
                    className="font-satoshi font-semibold text-sm text-black/75 "
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    id="confirmPass"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="bg-slate-100 px-3 py-1 w-full border-2 border-slate-100 rounded-md"
                    placeholder="confirm password "
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-center bg-[#376FE9] rounded-3xl py-2 text-xl text-white border hover:border-[#376FE9] hover:bg-white hover:text-[#376FE9] transition-all duration-200"
              >
                sign in
              </button>
              <p className="w-full text-center font-medium">
                Already have an account?{" "}
                <Link to="/login">
                  <span className="text-cyan-600 font-bold">Log in</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
