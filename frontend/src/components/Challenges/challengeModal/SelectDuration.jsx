import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import { toast } from "react-toastify";
function SelectDuration({
  setDurationModal,
  setDateModal,
  setPointModal,
  duration,
  setDuration,
}) {
  const [selection, setSelection] = useState("");
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-[3vh] h-auto w-auto bg-white shadow-2xl drop-shadow rounded-3xl p-5 m-5">
        <div className="flex justify-between w-full tracking-wide">
          <button
            onClick={() => {
              setDurationModal(false);

              setPointModal(true);
            }}
            className=" flex justify-center items-center text-white text-lg h-10 w-10 bg-indigo-500 rounded-full"
          >
            <FaArrowLeftLong />
          </button>
          <h1 className="text-3xl font-bold px-20">Set Duration</h1>
          <button
            onClick={() => {
              if (!selection) {
                toast.warning("please select Duration");
                return;
              }
              setDuration(Number(selection.split(" ")[0]));
              console.log("duration", duration);
              setDurationModal(false);
              setDateModal(true);
            }}
            className="flex justify-center items-center text-white text-lg  h-10 w-10 bg-indigo-500 rounded-full"
          >
            <FaArrowRight />
          </button>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-y-8 gap-x-20">
          <button
            onClick={(e) => setSelection(e.target.innerText)}
            className={
              selection === "2 min"
                ? "h-20 w-40 bg-black rounded-2xl shadow-xl text-xl text-white font-bold"
                : "h-20 w-40 rounded-2xl shadow-xl text-xl bg-indigo-500 text-white font-bold"
            }
          >
            2 min
          </button>
          <button
            onClick={(e) => setSelection(e.target.innerText)}
            className={
              selection === "5 min"
                ? "h-20 w-40 bg-black rounded-2xl shadow-xl text-xl text-white font-bold"
                : "h-20 w-40 rounded-2xl shadow-xl text-xl bg-indigo-500 text-white font-bold"
            }
          >
            5 min
          </button>
          <button
            onClick={(e) => setSelection(e.target.innerText)}
            className={
              selection === "10 min"
                ? "h-20 w-40 bg-black rounded-2xl shadow-xl text-xl text-white font-bold"
                : "h-20 w-40 rounded-2xl shadow-xl text-xl bg-indigo-500 text-white font-bold"
            }
          >
            10 min
          </button>
          <button
            onClick={(e) => setSelection(e.target.innerText)}
            className={
              selection === "15 min"
                ? "h-20 w-40 bg-black rounded-2xl shadow-xl text-xl text-white font-bold"
                : "h-20 w-40 rounded-2xl shadow-xl text-xl bg-indigo-500 text-white font-bold"
            }
          >
            15 min
          </button>
          <button
            onClick={(e) => setSelection(e.target.innerText)}
            className={
              selection === "20 min"
                ? "h-20 w-40 bg-black rounded-2xl shadow-xl text-xl text-white font-bold"
                : "h-20 w-40 rounded-2xl shadow-xl text-xl bg-indigo-500 text-white font-bold"
            }
          >
            20 min
          </button>
          <button
            onClick={(e) => setSelection(e.target.innerText)}
            className={
              selection === "30 min"
                ? "h-20 w-40 bg-black rounded-2xl shadow-xl text-xl text-white font-bold"
                : "h-20 w-40 rounded-2xl shadow-xl text-xl bg-indigo-500 text-white font-bold"
            }
          >
            30 min
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectDuration;
