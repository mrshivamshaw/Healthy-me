import React from 'react'
import { AiOutlineAudio } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { PiImage } from "react-icons/pi"; 
import Chatbot from './Chatbot';

function MainPage() {
  return (
    <div className='w-screen mt-[10vh] h-[90vh] overflow-hidden bg-[#F9F7F7]'>

        <div className='flex justify-around w-[85vw] mx-auto'>
            <div className='h-auto w-[50%]'>
                <div className='flex justify-around  shadow-lg rounded-3xl overflow-hidden mt-1 mb-4 '>
                    <input className='h-16 rounded-3xl bg-[#F9F7F7] outline-none text-slate-900 text-xl' type="text" placeholder='ask me anything' />
                   
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
          <div className='self-center text-5xl w-[40%] capitalize font-bold text-center leading-relaxed'>
          Hey <span className='text-[#3A8EF6]'>{localStorage.getItem('userName')} !</span> let's talk for <span className='text-[#3A8EF6]'>your</span> better <span className='text-[#3A8EF6]'>health</span>💙
          

          </div>
        </div>
    </div>
  )
}

export default MainPage