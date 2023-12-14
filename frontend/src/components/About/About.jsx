import React from 'react'

function About() {
  return (
    <div>
      <div>
        <img src="src/assets/AboutUs.png" alt="" />
        <div>
          <div className='text-[1.5vw] font-[700] tracking-wider bg-gradient-to-tr from-[#3A8EF6] to-[#6F3AFA] inline-block text-transparent bg-clip-text'>ABOUT US</div>
          <div className='text-[2vw] font-[500] pb-3'>Our Goal</div>
          <div className='text-[#999191] text-[1.2vw] pb-10'>We are a team of aspiring engineers who are passionate about health and wellness. We believe that everyone deserves to live a healthy and happy life, regardless of their age, background, or location. That’s why we created this website, to provide you with reliable and relevant health guidance that you can trust.</div>
        </div>
        
      </div>
    </div>
  )
}

export default About