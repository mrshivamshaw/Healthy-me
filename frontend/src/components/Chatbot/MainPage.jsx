import React from 'react'
import { AiOutlineAudio } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { PiImage } from "react-icons/pi"; 
import Chatbot from './Chatbot';

function MainPage() {
  return (
    <div className='w-[85vw] mx-auto'>

        <div className='flex pt-[15vh] justify-around'>
            <div className='h-auto w-[35vw]'>
                <div className='flex justify-around shadow-lg rounded-3xl overflow-hidden mt-1 mb-4 bg-[#F9F7F7]'>
                    <input className='h-12 rounded-3xl bg-[#F9F7F7] outline-none text-slate-900 text-xl' type="text" placeholder='ask me anything' />
                   
                   <div className='self-center'>
                    <button className='h-8 w-8 bg-gradient-to-tr from-[#3A8EF6] to-[#6F3AFA] outline-none self-center rounded-full mx-2'>
                    <PiImage className='text-white text-lg w-full'/>
                    </button>
                    <button className='h-8 w-8 bg-gradient-to-tr from-[#3A8EF6] to-[#6F3AFA] outline-none self-center rounded-full mx-2'>
                    <AiOutlineAudio className='text-white text-lg w-full'/>
                    </button>
                    <button className='h-8 w-8 bg-gradient-to-tr from-[#3A8EF6] to-[#6F3AFA] outline-none self-center rounded-full mx-2'>
                    <IoSearch className='text-white text-lg w-full'/>
                    </button>
                    </div>
                </div>
                <Chatbot />
            </div>
          <div className='flex flex-col justify-center items-center text-6xl font-bold'>
           <span className='p-5 text-teal-600 border rounded-3xl rounded-tl-none  drop-shadow-md my-5'>INQUIRE </span>
          <span className='p-5 text-pink-600 border rounded-3xl drop-shadow-md my-5'>CONSULT</span>
          <span className='p-5 text-purple-600 border rounded-3xl rounded-br-none drop-shadow-md my-5'>EXPLORE</span>
          </div>
        </div>
    </div>
  )
}

export default MainPage