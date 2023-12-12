import React from 'react'

function FeaturesWeProvide() {
  return (
    <div className='w-[85vw] mx-auto bg-white'>
        <div className='text-[1.5vw] font-[700] tracking-wider bg-gradient-to-tr from-[#3A8EF6] to-[#6F3AFA] inline-block text-transparent bg-clip-text'>
        FEATURES WE PROVIDE
        </div>
        <div className='flex'>
        <div>
            <div className='text-[2.2vw] w-[25vw]'>
            Finding your health<br />
            requirements<br />
            now easier
            </div>
            <div className='font-[700] text-[1.3vw] text-[#8A8585]'>
            We calculate your BMI index from data like age, height, weight.
            </div>
        </div>
        <div className='grid grid-cols-3 grid-rows-2 gap-4'>
            <div className=' col-start-1 row-start-1'>
                <div>
                    <img src="" alt="" />
                </div>
                <div className='text-[1.6vw]'>
                Food Recomendation
                </div>
                <div className='text-[#8A8585] text-[1.2vw]'>
                We provide food recomendation according to your calorie requirements.
                </div>
            </div>
            <div className=' col-start-2 row-start-2'>
                <div>
                    <img src="" alt="" />
                </div>
                <div className='text-[1.6vw]'>
                Interactive Chatbot                </div>
                <div className='text-[#8A8585] text-[1.2vw]'>
                Solve your queries by interacting with our bot.                </div>
            </div>
            <div className=' col-start-3 row-start-1'>
                <div>
                    <img src="" alt="" />
                </div>
                <div className='text-[1.6vw]'>
                Doctor’s Recommendations                </div>
                <div className='text-[#8A8585] text-[1.2vw]'>
                Get all the nutritional values of your preferred dish.                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default FeaturesWeProvide