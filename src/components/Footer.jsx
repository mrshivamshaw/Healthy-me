import React from 'react'

function Footer() {
  return (
    <div className='w-screen bg-white rounded-t-[4vw] pt-[4.5vw] px-[3vw] font-[400] text-[21.59px]'>

    <div className='flex text-[#4F555A] justify-around pb-[3vw] '>
        <div>
            Logo
        </div>
        <div>
            <div className='text-[#1678F2] font-[700] pb-[1.5vw]'>
                Product
            </div>
            <div>
                <div>Features</div>
                <div>Pricing</div>
                <div>Case studies</div>
                <div>Reviews</div>
                <div>Updates</div>
            </div>
        </div>
        <div>
            <div className='text-[#1678F2] font-[700] pb-[1.5vw]'>
                Company
            </div>
            <div>
                <div>About</div>
                <div>Contact us</div>
                <div>Careers</div>
                <div>Culture</div>
                <div>Blog</div>
            </div>
        </div>
        <div>
            <div className='text-[#1678F2] font-[700] pb-[1.5vw]'>
            Support
            </div>
            <div>
                <div>Getting started</div>
                <div>Help center</div>
                <div>Server status</div>
                <div>Report a bug</div>
                <div>Chat support</div>
            </div>
        </div>
        <div className='text-[#1678F2] font-[700] pb-[1.5vw]'>
            Contact us
        </div>
    </div>
    <div className='flex justify-between text-[#6F6C90] border-t-[1.2px] border-[#D9DBE9] p-3'>
        <div>
        Copyright © 2022 
        </div>
        <div className=' self-end text-right'>
        All Rights Reserved | <span className='text-[#4A3AFF] underline'>Terms and Conditions</span> | <span className='text-[#4A3AFF] underline'>Privacy Policy</span>
        </div>
    </div>
    </div>
  )
}

export default Footer