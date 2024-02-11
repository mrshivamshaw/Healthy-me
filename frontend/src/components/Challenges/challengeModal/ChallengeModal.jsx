import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { toast } from 'react-toastify';
import SelectChallangeName from './SelectChallangeName';
import SelectPoints from './SelectPoints';
import SelectDuration from './SelectDuration';
import SelectDate from './SelectDate';

const ChallengeModal = ({setChallengeModal}) => {
    const [name,setName] = useState()
    const [startDate,setStartDate] = useState()
    const [endDate,setEndDate] = useState()
    const [point,setPoint] = useState(0)
    const formHandler = async(e)=>{
        e.preventDefault();
        if(!name || !startDate || !endDate || !point){
            toast.warning("Please fill correctly")
            return;
        }
        try {
            const data = await axios.post(`https://healthy-me-3en2.onrender.com/api/v1/createChallenge`,{
                challengeName : name,
                startDate : startDate,
                endDate : endDate,
                point:point,
                id: localStorage.getItem('userId')
            })
            setChallengeModal(prev => !prev)
            setRefresh(prev => !prev)
            toast.success("Challenge created succesfully");
            console.log(data);
        } catch (error) {
            console.log(error);
        }
        
    }
    
    
  return (
    <div className='w-[100vw] h-[90vh] absolute z-50 flex justify-center items-center bg-black/30 top-0'>
        {/* <div className='bg-white h-auto p-4 rounded-xl'>
            <div onClick={()=>setChallengeModal(false)} className='cursor-pointer w-full flex justify-between items-center'>
                <div className='text-2xl font-bold'>Add A New Challenge</div>
                <FaTimes className='text-2xl'/></div>
            <form onSubmit={formHandler}  className='flex flex-col gap-4 my-5'>
                <div className='flex justify-start items-center gap-3'>
                    <label htmlFor="challengename" className='font-bold'>Challege Name</label>.
                    <input onChange={(e)=>setName(e.target.value)} type="text" id='challengename' className='border-2 border-black/20 px-2 py-[1px] rounded-md' placeholder='Enter challenge name....' />
                </div>
                <div className='flex justify-start items-center gap-3'>
                    <label htmlFor="point" className='font-bold'>Points</label>
                    <input onChange={(e)=>setPoint(e.target.value)} type="number" id='point' className='border-2 border-black/20 px-2 py-[1px] rounded-md'/>
                </div>
                <div  className='flex justify-start items-center gap-3'>
                    <label htmlFor="stdate"  className='font-bold'>Start Date</label>
                    <input onChange={(e)=>setStartDate(e.target.value)} type="date" id='stdate'/>
                </div>
                <div className='flex justify-start items-center gap-3'>
                    <label htmlFor="endate"  className='font-bold'>End Date</label>
                    <input onChange={(e)=>setEndDate(e.target.value)} type="date" id='endate'/>
                </div>
                <button type='submit'
                // onClick={()=>setChallengeModal(false)}
                className="px-4 py-1 text-center text-white rounded-xl text-2xl"
                style={{
                  background:
                    "linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%, #6F3AFA 196.74%)",
                }}
              >
                Add
              </button>
            </form>
        </div> */}
        

        {/* <SelectChallangeName /> */}
        {/* <SelectPoints /> */}
        {/* <SelectDuration /> */}
        <SelectDate />

    </div>
  )
}

export default ChallengeModal