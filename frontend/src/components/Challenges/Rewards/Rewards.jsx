import React from 'react'
import rewards from './rewards'

function Rewards() {
  return (
    <div className='flex flex-wrap justify-center  gap-x-14 gap-y-10 min-h-[67vh]'>
    {rewards.map((reward) => (
      <div key={reward.index} className='flex flex-col justify-center items-center mt-16 h-[400px] w-[500px] rounded-3xl shadow-xl bg-white'>
        <div>
          {/* playlist */}
          <iframe width="460" height="260" src={reward.playlist} title="YouTube video player"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className='flex justify-center items-center p-5 pb-0'>
          {/* playlist details */}
          <div>{reward.playlistDetails}</div>
          <button className='flex justify-between items-center mt-5 bg-indigo-500 p-2 px-4 rounded-3xl self-end'>
            <strong className='text-white'>{reward.points}</strong>
            <div className='h-6 w-6 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 rounded-full ml-1' />
          </button>
        </div>
      </div>
    ))}
  </div>
    
  )
}

export default Rewards