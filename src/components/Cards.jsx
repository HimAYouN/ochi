import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-100 flex items-center px-32 gap-5'>
        <div className="cardcontainer w-1/2 h-[50vh]">
            <div className='card relative w-full h-full rounded-xl  bg-[#00434D] flex items-center justify-center'>
              <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
              <button className='absolute left-5 bottom-10 border-black border-2 rounded-xl px-5 py-1 text-black text-xs'> ©2019-2022 </button>
            </div>
            
        </div>
        <div className="cardcontainer w-1/2 h-[50vh] flex gap-5">
            <div className='card relative w-1/2 h-full rounded-xl  bg-[#00434D] flex items-center justify-center'>
              <img className='w-24' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
              <button className='absolute left-5 bottom-10 border-black border-2 rounded-xl px-5 py-1 text-black text-xs uppercase'> RATING 5.0 ON CLUTCH </button>
            </div>
            <div className='card relative w-1/2 h-full rounded-xl  bg-[#00434D] flex items-center justify-center'>
              <img className='w-24'  src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
              <button className='absolute left-5 bottom-10 border-black border-2 rounded-xl px-5 py-1 text-black text-xs uppercase'> buSINESS BOOTCAMP ALUMNI </button>
            </div>
            
        </div>
        
        
    </div>
  )
}

export default Cards