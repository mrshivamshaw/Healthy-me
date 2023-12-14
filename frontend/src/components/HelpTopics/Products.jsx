import React from 'react'

function Products({image , name , description}) {
  return (
    <div className='mb-[5vw]'>
    <div className='h-[15vw] w-[15vw] shadow-md shadow-slate-800 bg-white z-10 rounded-3xl overflow-hidden mb-2'>
      <img className='h-[100%] w-[100%] rounded-t-3xl' src={image} alt={name} />
      
    </div>

      <div className='font-satoshi font-[700] text-lg p-2'>
        {name}
      </div>
      <div className='font-satoshi text-sm text-black/70 font-normal tracking-wide pl-2'>
        {description}
      </div>
      </div>  
  )
}

export default Products