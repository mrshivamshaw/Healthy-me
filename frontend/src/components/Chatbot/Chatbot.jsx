import React from 'react'

function Chatbot() {
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
            <div className='fixed bottom-0 h-10 w-[70%] rounded-xl m-10 bg-white'>
                <input className='w-[70%] rounded-3xl' type="text" />
            </div>
        </div>
    </div>
  )
}

export default Chatbot