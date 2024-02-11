import React from 'react'
import { FaArrowLeftLong , FaArrowRight } from "react-icons/fa6";
function SelectDuration({setDurationModal,setDateModal,setPointModal}) {
  return (
    <div>
        <div className='flex flex-col justify-center items-center gap-[3vh] h-auto w-auto bg-white shadow-2xl drop-shadow rounded-3xl p-5 m-5'>
            <div className='flex justify-between w-full tracking-wide'>
                <button onClick={()=>{setDurationModal(false);setPointModal(true)}} className=' flex justify-center items-center text-white text-lg h-10 w-10 bg-indigo-500 rounded-full'><FaArrowLeftLong /></button>
                <h1 className='text-3xl font-bold px-20'>Set Duration</h1>
                <button onClick={()=>{setDurationModal(false);setDateModal(true)}} className='flex justify-center items-center text-white text-lg  h-10 w-10 bg-indigo-500 rounded-full'><FaArrowRight /></button>
                
            </div>
            <div className='grid grid-cols-2 grid-rows-3 gap-y-8 gap-x-20'>
                <button   style={{
                  background:
                    "linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%, #6F3AFA 196.74%)",
                }} className='h-20 w-40 rounded-2xl   shadow-xl text-xl text-white font-bold'>
                    2 min
                </button>
                <button className='h-20 w-40 rounded-2xl bg-indigo-500 shadow-xl text-xl text-white font-bold'  style={{
                  background:
                    "linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%, #6F3AFA 196.74%)",
                }}>
                    5 min
                </button>
                <button className='h-20 w-40 rounded-2xl bg-indigo-500 shadow-xl text-xl text-white font-bold'  style={{
                  background:
                    "linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%, #6F3AFA 196.74%)",
                }}>
                    10 min
                </button>
                <button className='h-20 w-40 rounded-2xl bg-indigo-500 shadow-xl text-xl text-white font-bold'  style={{
                  background:
                    "linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%, #6F3AFA 196.74%)",
                }}>
                    15 min
                </button>
                <button className='h-20 w-40 rounded-2xl bg-indigo-500 shadow-xl text-xl text-white font-bold'  style={{
                  background:
                    "linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%, #6F3AFA 196.74%)",
                }}>
                    20 min
                </button>
                <button className='h-20 w-40 rounded-2xl bg-indigo-500 shadow-xl text-xl text-white font-bold'  style={{
                  background:
                    "linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%, #6F3AFA 196.74%)",
                }}>
                    30 min
                </button>
            </div>
        </div>
    </div>
  )
}

export default SelectDuration