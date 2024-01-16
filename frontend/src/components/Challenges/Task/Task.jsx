import axios from "axios";
import React, { useEffect, useState } from "react";

const Task = ({setChallengeModal}) => {

    const [challenges,setChallenges] = useState([])
    let score = 0;
    useEffect(()=>{
        const fetchTasks = async() => {
            try {
                const userId = localStorage.getItem("userId");
                const task = await axios.get(`http://localhost:3000/api/v1/userchallenge/${userId}`)
                localStorage.setItem("userName",task.data.challengesData.firstName);
                setChallenges(task.data.challengesData.challenges)
            } catch (error) {
                console.log("error aya hai",error);
            }
        }
        fetchTasks()
    },[])

    useEffect(() => {
    
      
        console.log(challenges);
      
    }, [challenges])
    
  return (
    <div className="min-w-[25vw] min-h-[40vh] p-4 z-30 bg-white shadow-lg rounded-2xl flex flex-col justify-between items-center">
      <div className="w-full">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-xl font-bold tracking-wide">TASKS</h1>
          <button className="h-[40px] w-[40px] bg-[#1678F2] text-white rounded-full font-bold text-3xl text-center pb-5 shadow-md shadow-fuchsia-400"
            onClick={()=>setChallengeModal(true)}
          >
            +
          </button>
        </div>
        <div className=" w-full flex flex-col my-4 gap-2">
            {
                challenges.map(challenge => {
                    score = score + challenge.point;
                    return <div className="flex justify-between items-center">
                    <div>
                    <h1 className="text-lg font-bold">{challenge.challengeName}</h1>
                    <div className="flex justify-between items-center gap-2 text-[9px]">
                        <p>{challenge.startDate}</p>
                        <p>{challenge.endDate}</p>
                    </div>
                    </div>
                    <div className="font-bold text-lg text-[#20C997]">{challenge.point}</div>
                </div>
                })
            }
          
          
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-white w-[10vw] rounded-2xl py-1 px-3" style={{
                  background:
                    "linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%, #6F3AFA 196.74%)",
                }}
              >
        <p className="text-sm">Total Score</p>
        <div className="text-2xl font-bold">{score}</div>
      </div>
    </div>
  );
};

export default Task;
