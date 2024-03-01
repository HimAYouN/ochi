
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import './LandingPage.css'


function LandingPage() {
    
    const myDiv = useRef(null)
    // code for that hovering orange ball
    const [mousePosition, setMousePosition] = useState({x: 0, y:0});
    const [isHovered, setIsHovered] = useState(false)


    const updateMousePosition = (e, myDiv) => {
        setMousePosition({x: e.clientX, y: e.clientY});
    }
    useEffect(()=>{
        myDiv.current.addEventListener('mousemove', updateMousePosition)
        return () =>{
            myDiv.current.removeEventListener('mousemove', updateMousePosition)
        }
    }, [])


    const {x, y } = mousePosition;
    const size = isHovered ? 100 : 0;
  return (
    <div ref={myDiv} onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}} data-scroll data-scroll-section data-scroll-speed='-.3' className='w-full h-screen bg-zinc-900 pt-1'>
        <motion.div 
            animate={{
                WebkitMaskPosition : `${x- size /2}px ${y - size /2}px`,
                WebkitMaskSize : `${size}px`
            }}
            transition={{
                type: 'tween',
                ease : 'backOut'
            }}
            className='mask'
        >
        </motion.div>
        <div className="textstructure mt-52 px-20">
            {["we create", "eye-opening", "presentations"].map((item, index)=>(
                <div key={index} className="masker ">
                    <div className='w-fit flex  relavtive -top-[1vw] '>
                        {index === 1 && (
                            <motion.div 
                                initial={{width: 0}} 
                                animate={{width: '8vw'}} 
                                transition={{ease: [0.76, 0, 0.24, 1]}}
                                className='mt-[2vw] mr-[1vw] w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw] realtive bg-green-500'
                            >
                            </motion.div>
                        )}
                        <h1 className="pt-[2vw] -mb-[1vw] center uppercase text-[9vw]  leading-[.75] tracking-tighter font-['Bahnschrift'] font-semibold ">{item}</h1>
                    
                    </div>                
                </div>
            ))}
            </div>
            <div className='border-t-[1px] border-zinc-800 mt-20  flex justify-between items-center py-5 px-20 '>
             {["For public and private companies", "From the first pitch to IPO"].map((item, index)=>(
                <p key={index} className='text-md font-light tracking-tight leading-none '>{item}</p>
            ))}
                <div className='start flex items-center gap-5'>
                 <div className='px-5 py-2 border-[2px] border-zinc-500 font-light text-md uppercase rounded-full'>Start the project</div>
                <div className="w-10 h-10 border-[2px] border-zinc-500  rounded-full">{/*Bhai yaha icon lagana jb yaad aye*/ }</div>
                </div>
            </div>
        
    </div>
  )
}

export default LandingPage