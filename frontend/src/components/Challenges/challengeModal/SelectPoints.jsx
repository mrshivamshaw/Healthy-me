import React, { useState } from 'react'
import { FaArrowLeftLong , FaArrowRight } from "react-icons/fa6";
import { toast } from 'react-toastify';
function SelectPoints({setNameModal,setPointModal,setDurationModal,point,setPoint}) {
  const [selection,setSelection] = useState('')
  
  return (
    <div>
        <div className='flex flex-col justify-center items-center gap-[3vh] h-auto w-auto bg-white shadow-2xl drop-shadow rounded-3xl p-5'>
            <div className='flex justify-between w-full tracking-wide'>
                <button onClick={()=>{setNameModal(true); setPointModal(false)}} className=' flex justify-center items-center text-white text-lg h-10 w-10 bg-indigo-500 rounded-full'><FaArrowLeftLong /></button>
                <h1 className='text-3xl font-bold px-20'>Select Points</h1>
                <button onClick={()=>{
                  if(!selection){
                    toast.warning("please select Points")
                    return;
                  }
                  setPoint(Number(selection.split('p')[0]));
                  setPointModal(false); 
                  setDurationModal(true);
                }} className='flex justify-center items-center text-white text-lg  h-10 w-10 bg-indigo-500 rounded-full'><FaArrowRight /></button>
                
            </div>
            <div className='grid grid-cols-2 grid-rows-3 gap-y-8 gap-x-20'>
                <button onClick={(e) => setSelection(e.target.innerText) }  className={selection === '20p'? 'h-20 w-40 bg-black rounded-2xl shadow-xl text-xl text-white font-bold' : 'h-20 w-40 rounded-2xl shadow-xl text-xl bg-indigo-500 text-white font-bold'}>
                    20p
                </button>
                <button onClick={(e) => setSelection(e.target.innerText) }  className={selection === '40p'? 'h-20 w-40 bg-black rounded-2xl shadow-xl text-xl text-white font-bold' : 'h-20 w-40 rounded-2xl shadow-xl text-xl bg-indigo-500 text-white font-bold'}>
                    40p
                </button>
                <button onClick={(e) => setSelection(e.target.innerText) }  className={selection === '60p'? 'h-20 w-40 bg-black rounded-2xl shadow-xl text-xl text-white font-bold' : 'h-20 w-40 rounded-2xl shadow-xl text-xl bg-indigo-500 text-white font-bold'}>

                    60p
                </button>
                <button onClick={(e) => setSelection(e.target.innerText) }  className={selection === '80p'? 'h-20 w-40 bg-black rounded-2xl shadow-xl text-xl text-white font-bold' : 'h-20 w-40 rounded-2xl shadow-xl text-xl bg-indigo-500 text-white font-bold'}>

                    80p
                </button>
                <button onClick={(e) => setSelection(e.target.innerText) }  className={selection === '100p'? 'h-20 w-40 bg-black rounded-2xl shadow-xl text-xl text-white font-bold' : 'h-20 w-40 rounded-2xl shadow-xl text-xl bg-indigo-500 text-white font-bold'}>

                    100p
                </button>
                <button onClick={(e) => setSelection(e.target.innerText) }  className={selection === '120p'? 'h-20 w-40 bg-black rounded-2xl shadow-xl text-xl text-white font-bold' : 'h-20 w-40 rounded-2xl shadow-xl text-xl bg-indigo-500 text-white font-bold'}>

                    120p
                </button>
            </div>
        </div>
    </div>
  )
}

export default SelectPoints