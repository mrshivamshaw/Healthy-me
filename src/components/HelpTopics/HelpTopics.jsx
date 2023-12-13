import React from 'react'
import HelpTopicSlider from './HelpTopicSlider'

function HelpTopics() {
  return (
    <div className='w-[85vw] mx-auto '>
    <div className='text-[1.5vw] font-[700] tracking-wider bg-gradient-to-tr from-[#3A8EF6] to-[#6F3AFA] inline-block text-transparent bg-clip-text'>
    HELP TOPICS
    </div>
    <div className='text-[2vw] font-[700] pb-3'>
        Enhance Your Lifestyle
    </div>
      <HelpTopicSlider />
    
    </div>
  )
}

export default HelpTopics