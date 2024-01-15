import React from 'react'

function Leaderboard() {
  return (
    <div className='flex flex-col justify-start min-w-[25vw] min-h-[40vh] bg-white rounded-xl shadow-xl z-[20] py-3'>
      <h1 className='w-full text-center text-3xl font-bold'>Top 10🔥</h1>
      <div className='flex flex-col justify-start items-start pl-5 py-5'>
        <div className='flex w-full justify-start items-center gap-4'>
          <div className='relative flex justify-center items-center'>
            <span className='absolute z-0 text-3xl'>⭐</span>
            <span className='z-10'>1</span>
          </div>
          <div className='flex justify-between items-center w-full pr-4'>
            <div className='flex justify-center items-center gap-1'>
              <div className='h-10 w-10 rounded-full bg-slate-100 text-center text-xl font-bold pt-1'>SS </div>
              <div className='text-lg font-semibold '>Shivam shaw</div>
            </div>
            <div className='font-semibold'>
              143
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard