import React from "react";

const Task = () => {
  return (
    <div className="min-w-[25vw] min-h-[40vh] p-4 z-30 bg-white shadow-lg rounded-2xl flex flex-col justify-between items-center">
      <div className="w-full">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-xl font-bold tracking-wide">TASKS</h1>
          <button className="h-[40px] w-[40px] bg-[#1678F2] text-white rounded-full font-bold text-3xl text-center pb-5 shadow-md shadow-fuchsia-400">
            +
          </button>
        </div>
        <div className=" w-full flex flex-col my-4 gap-2">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg font-bold">Excercise</h1>
              <div className="flex justify-between items-center gap-2 text-[9px]">
                <p>April 18, 2022 11:01 AM</p>
                <p>April 18, 2022 11:01 AM</p>
              </div>
            </div>
            <div className="font-bold text-lg text-[#20C997]">40</div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg font-bold">Excercise</h1>
              <div className="flex justify-between items-center gap-2 text-[9px]">
                <p>April 18, 2022 11:01 AM</p>
                <p>April 18, 2022 11:01 AM</p>
              </div>
            </div>
            <div className="font-bold text-lg text-[#20C997]">40</div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg font-bold">Excercise</h1>
              <div className="flex justify-between items-center gap-2 text-[9px]">
                <p>April 18, 2022 11:01 AM</p>
                <p>April 18, 2022 11:01 AM</p>
              </div>
            </div>
            <div className="font-bold text-lg text-[#20C997]">40</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-white w-[10vw] rounded-2xl py-1 px-3" style={{
                  background:
                    "linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%, #6F3AFA 196.74%)",
                }}
              >
        <p className="text-sm">Total Score</p>
        <div className="text-2xl font-bold">754</div>
      </div>
    </div>
  );
};

export default Task;
