import axios from "axios";
import React, { useEffect, useState } from "react";
import { RxLapTimer } from "react-icons/rx";
import { SlOptionsVertical } from "react-icons/sl";
import { MdDownloadDone } from "react-icons/md";
import { toast } from "react-toastify";
import './task.css'

const Task = ({ setChallengeModal, challengeModal }) => {
  const [challenges, setChallenges] = useState([]);
  const [refresh, setFresh] = useState(false);
  const [total, setTotal] = useState();
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const task = await axios.get(
          `http://localhost:3000/api/v1/userchallenge/${userId}`
        );
        localStorage.setItem("userName", task.data.challengesData.firstName);
        setChallenges(task.data.challengesData.challenges);
        setTotal(task.data.totalPoint);
      } catch (error) {
        console.log("error aya hai", error);
      }
    };
    fetchTasks();
  }, [challengeModal, challenges, refresh]);

  const taskCompleteHandler = async (id) => {
    try {
      const data = await axios
        .post("http://localhost:3000/api/v1/challengeCompleted", {
          id: id,
        })
        .then(toast.success("Challege completed"));
      setFresh((prev) => !prev);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-w-[25vw] h-[46vh] p-4 z-30 bg-white shadow-lg rounded-2xl flex flex-col justify-between items-center">
      <div className="w-full">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-xl font-bold tracking-wide">TASKS</h1>
          <button
            className="h-[40px] w-[40px] bg-[#1678F2] text-white rounded-full font-bold text-3xl text-center pb-5 shadow-md shadow-fuchsia-400"
            onClick={() => setChallengeModal(true)}
          >
            +
          </button>
        </div>
        <div className=" w-full flex flex-col relative my-4 gap-2 max-h-[22vh] overflow-y-scroll task-list pb-5">
          {challenges.length !== 0 ? (
            challenges.map((challenge) => {
              return (
                <div className="flex justify-between items-center gap-6">
                  <div className=" flex justify-start items-center gap-2">
                    {challenge.completed ? (
                      <div className="text-2xl text-[#1678F2]">
                        <MdDownloadDone />
                      </div>
                    ) : (
                      <div className="text-2xl text-[#1678F2]">
                        <RxLapTimer />
                      </div>
                    )}

                    <div>
                      <h1 className="text-lg font-bold capitalize">
                        {challenge.challengeName}
                      </h1>
                      <div className="flex justify-between items-center gap-2 text-[9px]">
                        <p>{challenge.startDate}</p>
                        <p>{challenge.endDate}</p>
                      </div>
                    </div>
                  </div>
                  <div className="font-bold text-lg  z-10 text-[#20C997] flex justify-center items-center gap-2">
                    <div>{challenge.point}</div>
                    {!challenge.completed && (
                      <div className="text-xs text-black cursor-pointer group relative">
                        <SlOptionsVertical />
                        <div
                          className="absolute text-[10px] z-30 text-center group-hover:block hidden rounded-md hover:bg-slate-300 top-3 bg-white shadow-lg p-1 font-bold right-0  w-[7vw]"
                          onClick={() => taskCompleteHandler(challenge._id)}
                        >
                          Mark as done
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-xl font-bold text-black/40 w-full text-center mt-16">
              You haven't taken any Challenge
            </div>
          )}
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center text-white w-[10vw] rounded-2xl py-1 px-3"
        style={{
          background:
            "linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%, #6F3AFA 196.74%)",
        }}
      >
        <p className="text-sm">Total Score</p>
        <div className="text-2xl font-bold">{total}</div>
      </div>
    </div>
  );
};

export default Task;
