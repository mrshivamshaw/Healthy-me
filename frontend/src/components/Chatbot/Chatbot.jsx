import React, { useState } from 'react'
import { IoMdAttach } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";


function Chatbot() {

    const [input , setInput] = useState('')

  return (
    <div>
        <div className='h-[75vh] w-auto bg-[#F1F1FF] shadow-xl rounded-2xl drop-shadow-lg'>
            <div className='bg-white rounded-2xl'>
                <div className='flex gap-10 border-b-2 p-3 px-5 py-10'>
                    <div className='h-20 w-20 rounded-s-full bg-blue-400' />
                    <div className='self-center'>Healthbot</div>
                </div>
                <div className='p-5 px-12 text-[#5E5E5E]'>
                    Hi There! <br />
                    I am Rabi, your personal assistant for today. Tell me how I can assist you and I will be glad to assist. 
                </div>
            </div>
            <div className=''>
                
            </div>
            <div className='fixed bottom-0 h-12 w-[80%] rounded-xl m-10 p-3 bg-white text-xl'>
                <input className='w-[70%] h-full outline-none rounded-3xl' type="text"
                 value={input}
                 onChange={(e) => setInput(e.target.value)} 
                 placeholder='type reply . . . . .'
                />
                <button className=' text-[#A3A3A3] px-2 scale-105'><IoMdAttach /></button>
                <button className='text-[#A3A3A3] px-2 scale-105'><MdOutlineEmojiEmotions /></button>
                <button className='text-[#5D6EF7] px-5 scale-150 drop-shadow'><BsFillSendFill /></button>
            </div>
        </div>
    </div>
  )
}

export default Chatbot