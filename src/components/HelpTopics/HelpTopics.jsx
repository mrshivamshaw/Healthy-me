import React from 'react'
import Cards from './Cards'

const HelpTopics = () => {
  return (
    <div className='w-[100vw] h-auto bg-white'>
        <div className='w-[85vw] mx-auto flex flex-col font-satoshi justify-start items-start gap-5 '>
            <h2 className='text-[24px] font-[900] tracking-widest text-transparent' style={{background: "linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%)",backgroundClip:'text'}}>HELP TOPICS</h2>
            <h1 className='text-[40px] font-[700] '>Enhance Your Lifestyle</h1>
            <Cards/>
        </div>
    </div>
  )
}

export default HelpTopics