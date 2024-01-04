import React from 'react'
import { IoSearch , IoReorderTwoSharp} from "react-icons/io5";
import { FaPlus } from "react-icons/fa";


function ChallangesOverview() {
     
  return (
    <div className='mt-[15vh] md:mt-[15vh] lg:mt-[15vh] xl:mt-[10vh] h-screen'>
    <div className="w-[85vw] mx-auto bg-[url('bg.png')] ">
        {/*top part */}
        <div>
            Hello
            
        </div>

        {/* Bottom Part */}
        <div>
        <div className='bg-white flex h-20 w-full rounded-3xl fixed bottom-10 justify-around items-center'>
        <IoSearch className='text-[#8565F1] text-2xl'/>
            <button className='flex items-center  justify-center h-16 w-16 rounded-full bg-gradient-to-b from-blue-500 via-indigo-600 to-violet-600 shadow ' ><FaPlus className='text-white text-3xl text-center place-self-center'/></button>
            <IoReorderTwoSharp className='text-[#8565F1] text-2xl'/>
        </div>
        </div>
    </div>
    </div>
  )
}

export default ChallangesOverview