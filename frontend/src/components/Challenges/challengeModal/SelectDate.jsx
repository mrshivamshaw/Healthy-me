import React from 'react'
// import Calendar from 'react-calendar';
import Calander from '../Calender/Calander';
import { FaArrowLeftLong , FaArrowRight } from "react-icons/fa6";
function SelectDate() {
  return (
    <div>
        <div className='flex flex-col justify-center items-center h-[48vh] w-[40vw] bg-white shadow-2xl drop-shadow rounded-3xl p-5 m-5'>
            <div className='flex justify-center m-5 mb-10 tracking-wide'>
                <button className=' flex justify-center items-center text-white text-lg h-10 w-10 bg-indigo-500 rounded-full '><FaArrowLeftLong /></button>
                <h1 className='text-3xl font-bold px-40'>Set Date</h1>
                <button className='flex justify-center items-center text-white text-lg  h-10 w-10 bg-indigo-500 rounded-full'><FaArrowRight /></button>
                
            </div>
           <div className='flex self-center px-10'>
            <div className='mr-14'>
            <Calander />
            </div>
           
            <div className='flex flex-col justify-start items-start m-5'>
                <label className='text-lg font-bold'>Enter Start date</label>
                <input type="date" className='border-[1px] border-[#B4B4B4] w-[100%] rounded-lg p-2 mt-5' /><br />
                <label className='text-lg font-bold'>Enter End date</label>
                <input type="date" className='border-[1px] border-[#B4B4B4] w-[100%] rounded-lg p-2 mt-5' />
                <button className='text-white w-[60%] rounded-lg p-2 mt-10 self-center'  style={{
              background: "linear-gradient(180deg, #212121 0%, rgba(33, 33, 33, 0.66) 100%)",


            }}>Submit</button>
            </div>
           </div>
           
        </div>
    </div>
  )
}

export default SelectDate