import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.1' className='w-full -mb-16 py-20 rounded-t-3xl bg-[#004D43]'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex   overflow-hidden whitespace-nowrap ">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear",  repeat: Infinity, duration: 5}}  className='text-[12vw] leading-none font-["Bahnschrift"] uppercase -mb-[2vw] pt-4 font-semibold p-10'>We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear",  repeat:Infinity, duration: 5}} className='text-[12vw] leading-none font-["Bahnschrift"] uppercase -mb-[2vw] pt-4 font-semibold p-10'>We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear",  repeat:Infinity, duration: 5}} className='text-[12vw] leading-none font-["Bahnschrift"] uppercase -mb-[2vw] pt-4 font-semibold p-10'>We are ochi</motion.h1>
            </div>
    </div>
  )
}

export default Marquee