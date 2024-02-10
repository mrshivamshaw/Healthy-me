import React from 'react'
import { FaArrowLeftLong , FaArrowRight } from "react-icons/fa6";

function SelectChallangeName() {
  return (
    <div>
        <div className='flex flex-col justify-center items-center h-[30vh] w-[30vw] bg-white shadow-2xl drop-shadow rounded-3xl p-5'>
            <div className='flex justify-around m-5 tracking-wide'>
                <button className=' flex justify-center items-center text-white text-lg h-10 w-10 bg-indigo-500 rounded-full'><FaArrowLeftLong /></button>
                <h1 className='text-3xl font-bold px-10'>Select Challenge Name</h1>
                <button className='flex justify-center items-center text-white text-lg  h-10 w-10 bg-indigo-500 rounded-full'><FaArrowRight /></button>
                
            </div>
            <input type="text" placeholder='Challenge Name' className='border-[1px] border-[#B4B4B4] w-[80%] rounded-lg p-2 mt-5' />
        </div>
    </div>
  )
}

export default SelectChallangeName