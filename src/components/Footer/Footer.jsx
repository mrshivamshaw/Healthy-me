import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


function Footer() {
  return (
    <div className='w-screen bg-white rounded-t-[4vw] pt-[4.5vw] px-[3vw] font-[400] text-[1.3vw]'>

    <div className='flex text-[#4F555A] justify-around pb-[3vw] '>
        <div className='h-[20vw] w-[19.67vw]'>
            <div className='pb-[1.8vw]'>
            <img src="https://res.cloudinary.com/dnrwlbbbj/image/upload/v1702320663/check/Group_1_d0tqtt.png" alt="logo" className='h-[3vw] w-auto '/>
            <h1 className="text-transparent text-[2.8vw] leading-[5vw] font-bold bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
      HealthyMe
    </h1>
            </div>
            <div className='pb-[1.8vw]'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            </div>
            <div className='flex gap-[1vw]'>
            <FaFacebookF  className=' text-[#1678F2]'/>
            <FaXTwitter className=' text-[#1678F2]'/>
            <RiInstagramFill className='text-[#1678F2]' />
            <FaLinkedinIn className='text-[#1678F2]'/>
            <FaYoutube className='text-[#1678F2]'/>
            </div>
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
        <div className=''>
            <div className='text-[#1678F2] font-[700] pb-[1.5vw]'>
            Contact us
            </div>
            <div className='flex'>
            <MdOutlineEmail className='text-[#1678F2] align-middle'/>
            <div className=''>contact@company.com</div>
            </div>
            <div className='flex'>
            <MdOutlineEmail className='text-[#1678F2] align-middle'/>
            <div className=''>(414) 687 - 5892</div>
            </div>
            <div className='flex'>
            <MdOutlineEmail className='text-[#1678F2] align-middle'/>
            <div className=''>794 Mcallister St<br />
San Francisco, 94102m</div>
            </div>
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