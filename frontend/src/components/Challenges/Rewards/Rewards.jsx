import React, { useEffect, useState } from "react";
import rewards from "./rewards.js";
import axios from "axios";
import { toast } from "react-toastify";

function Rewards() {
  const [rewardsId, setRewardsId] = useState([]);

  const updateRewardsId = async(id,points) => {
    try {
      const update = await axios.post(
        `https://healthy-me-3en2.onrender.com/api/v1/updateReward/${localStorage.getItem(
          "userId"
        )}`,
        { rewardId: id, points : localStorage.getItem("points") - points }
      ).then((res) => {
        console.log(res);
        setRewardsId(prev => [...prev,id])
      })
      
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const res = axios
      .get(
        `https://healthy-me-3en2.onrender.com/api/v1/getUser/${localStorage.getItem(
          "userId"
        )}`
      )
      .then((res) => {
        const data = res.data.data;
        localStorage.setItem("points", data.totalPoint);
        setRewardsId((prev) => [...prev, ...data.rewards]);
        console.log(rewardsId);
      });
  }, [rewardsId]);

  return (
    <div className="flex flex-wrap justify-center  gap-x-14 gap-y-10 min-h-[67vh]">
      {rewards.map((reward) => (
        <div
          key={reward.index}
          className="flex flex-col justify-center items-center  h-[400px] w-[500px] pb-2 rounded-3xl shadow-xl bg-white"
        >
          <div className="h-full w-full rounded-md">
            {/* playlist */}
            {rewardsId.includes(reward.id) ? (
              <iframe
                width="100%"
                height="100%"
                src={reward.playlist}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : localStorage.getItem("points") >= reward.points ? (
              <div className="h-full w-full rounded-xl text-2xl font-semibold text-center bg-black/30 flex flex-col justify-center items-center">
                Get Your Reward Now! to Keep Yourself More{" "}
                <span className="text-indigo-800">Healthy💙</span>
              </div>
            ) : (
              <div className="h-full w-full rounded-xl text-2xl font-semibold text-center bg-black/30 flex flex-col justify-center items-center">
                Insufficent points. Please keep Yourself more{" "}
                <span className="text-indigo-800">Healthy💙</span>
              </div>
            )}
            <div></div>
          </div>
          <div className="flex justify-center items-center p-5 pb-0">
            {/* playlist details */}
            <div>{reward.playlistDetails}</div>
            {rewardsId.includes(reward.id) ? (
              <div className="flex justify-between items-center mt-5 bg-indigo-500 p-2 px-4 rounded-3xl self-end text-white">
                Claimed✔️
              </div>
            ) : localStorage.getItem("points") >= reward.points ? (
              <button
                onClick={() => updateRewardsId(reward.id,reward.points)}
                className="flex justify-between items-center mt-5 bg-indigo-500 p-2 px-4 rounded-3xl self-end"
              >
                <strong className="text-white">{reward.points}</strong>
                <div className="h-6 w-6 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 rounded-full ml-1" />
              </button>
            ) : (
              <button className="flex justify-between items-center mt-5 bg-indigo-200 p-2 px-4 rounded-3xl self-end">
                <strong className="text-white">{reward.points}</strong>
                <div className="h-6 w-6 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 rounded-full ml-1" />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rewards;
