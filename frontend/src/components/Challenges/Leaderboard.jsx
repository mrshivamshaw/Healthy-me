import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import './Task/task.css'

function Leaderboard() {
  const [sortedData,setSortedData] = useState();
  useEffect(()=>{
    const fetchUser = async() =>{
        try {
          const res = await axios.get('https://healthy-me-3en2.onrender.com/api/v1/getAllUser');
          setSortedData(res.data.data)
        } catch (error) {
          console.error(console.error());
          toast.warning("Unable to Fetch")
        }
      }
      fetchUser();
  },[])
  
  return (
    <div className='flex flex-col justify-start min-w-[25vw] h-[38vh] bg-white rounded-xl shadow-xl z-[20] py-3'>
      <h1 className='w-full text-center text-3xl font-bold'>Top performers 🔥</h1>
      <div className='flex flex-col justify-start items-start pl-5 py-5 overflow-y-scroll task-list'>
        {
          sortedData?.map((item,index) => (
          <div key={index} className='flex w-full justify-start items-center gap-4'>
            <div className='relative flex justify-center items-center'>
              <span className='absolute z-0 text-3xl'>⭐</span>
              <span className='z-10 pt-1'>{index+1}</span>
            </div>
            <div className='flex justify-between items-center w-full pr-4'>
              <div className='flex justify-center items-center gap-1'>
                <div className='h-10 w-10 rounded-full bg-slate-100 text-center text-xl font-bold pt-1 uppercase'>{item.firstName[0]}{item.lastName[0]}</div>
                <div className='text-lg font-semibold '>{item.firstName} {item.lastName}</div>
              </div>
              <div className='font-semibold'>
                {item.totalPoint}
              </div>
            </div>
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default Leaderboard