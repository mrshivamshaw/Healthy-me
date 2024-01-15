import React from 'react'

function TypingAnimation() {
  return (
    <div className='flex items-center space-x-2'>
        <div className='w-4 h-4 rounded-full bg-blue-200 animate-pulse delay-75' />
        <div className='w-4 h-4 rounded-full bg-blue-200 animate-pulse delay-150' />
        <div className='w-4 h-4 rounded-full bg-blue-200 animate-pulse delay-200' />
    </div>
  )
}

export default TypingAnimation