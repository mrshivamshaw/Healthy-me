import React from "react";
// import Calendar from 'react-calendar';
import Calander from "../Calender/Calander";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import { toast } from "react-toastify";
function SelectDate({setDateModal,setDurationModal,formHandler,startDate,endDate,setStartDate,setEndDate,setChallengeModal}) {
  return (
    <div>
      <div className="flex flex-col gap-5 justify-center items-center h-auto w-auto bg-white shadow-2xl drop-shadow rounded-3xl px-10 py-5">
        <div className="flex justify-between items-center tracking-wide w-full">
          <button onClick={()=>{setDateModal(false);setDurationModal(true)}} className=" flex justify-center items-center text-white text-lg h-10 w-10 bg-indigo-500 rounded-full ">
            <FaArrowLeftLong />
          </button>
          <h1 className="text-3xl font-bold">Set Date</h1>
          <button className="flex justify-center items-center text-white text-lg  h-10 w-10 bg-indigo-200 rounded-full">
            <FaArrowRight />
          </button>
        </div>
        <div className="flex self-center ">
          <div className="mr-14">
            <Calander />
          </div>

          <div className="flex flex-col justify-start items-start ">
            <label className="text-lg font-bold" htmlFor="start" >Enter Start date</label>
            <input onChange={(e) => setStartDate(e.target.value)}
              type="date"
              name="start"
              className="border-[1px] border-[#B4B4B4] w-[100%] rounded-lg p-2 mt-5"
            />
            <br />
            <label className="text-lg font-bold">Enter End date</label>
            <input
              onChange={e => setEndDate(e.target.value)}
              type="date"
              className="border-[1px] border-[#B4B4B4] w-[100%] rounded-lg p-2 mt-5"
            />
            <button
              className="text-white w-[60%] rounded-lg p-2 mt-10 self-center"
              style={{
                background:
                  "linear-gradient(180deg, #212121 0%, rgba(33, 33, 33, 0.66) 100%)",
              }}
              onClick={()=>{
                if(startDate > endDate || !startDate || !endDate){
                  toast.warning("Enter a valid date");
                  return
                }
                formHandler();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectDate;
