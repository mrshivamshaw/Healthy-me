import React from 'react'
import HelpTopicSlider from './HelpTopicSlider'

function HelpTopics() {
  return (
    <div className='w-[85vw] mx-auto '>
    <div className='text-[1.4vw] font-[900] font-satoshi tracking-widest bg-gradient-to-tr from-[#3A8EF6] to-[#6F3AFA] inline-block text-transparent bg-clip-text pb-5'>
    HELP TOPICS
    </div>
    <div className='text-[2.6vw] font-semibold font-satoshi pb-10'>
        Enhance Your Lifestyle
    </div>
      <HelpTopicSlider />
    
    </div>
  )
}

export default HelpTopics