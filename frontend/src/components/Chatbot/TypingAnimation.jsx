import React from 'react'

function TypingAnimation() {
  return (
    <div className='flex items-center space-x-4 px-8 '>
      {/* <div className='w-5 h-5 rounded-full bg-[#5D6EF7] animate-spin '>Processing</div> */}

      {/* <div className=' animate-ping'>...</div> */}

        <div className='text-5xl text-white animate-bounce' > . </div>
        <div className='text-5xl text-white animate-bounce ' > . </div>
        <div className=' animate-bounce text-5xl text-white' > . </div>
    </div>
  )
}

export default TypingAnimation