import React from "react";
import cardiologist from "../../assets/Cardiologist.gif";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../contextApi/ContextApi";


const Login = () => {
  const {storeInLs,getFromLs} = useAuth();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:3000/api/v1/login", {
          email,
          password,
        })
        .then((res) => {
          if (res.data.success === true) {
            navigate("/home");
            toast.success(res.data.message);
            console.log(res.data.token);
            storeInLs(res.data.token)
            getFromLs()

          } else {
            console.log(res.data.message);
            toast.error(res.data.message);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
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
              Log In
            </h1>
            <form
              onSubmit={loginHandler}
              className="flex flex-col justify-start items-start gap-7"
            >
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
                  className="bg-slate-100 px-3 py-1 w-full border-2 border-slate-100 rounded-md"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full text-center bg-[#376FE9] rounded-3xl py-2 text-xl text-white border hover:border-[#376FE9] hover:bg-white hover:text-[#376FE9] transition-all duration-200"
              >
                log in
              </button>
              <p className="w-full text-center font-medium">
                New to HealthyMe?{" "}
                <Link to="/signin">
                  <span className="text-cyan-600 font-bold">Sign in</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
