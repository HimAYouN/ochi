import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.07' className='w-full p-20 bg-[#CDEA68] rounded-t-3xl text-black'>
        <h1 className='text-[4vw] font-["Bahnschrift"] leading-[3.5vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='w-full pt-10 mt-20 border-t-[1px] border-[#a1b562] flex gap-5 '>
            <div className='w-1/2 '>
                <h1 className='text-7xl pt-10'>Our approach : </h1>
                <button className='px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white flex gap-7 items-center uppercase'>Read More
                    <div className='w-2 h-2 bg-zinc-100 rounded-full '></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-green-200 bg-[url("https://images.unsplash.com/photo-1682685796852-aa311b46f50d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover '></div>
        </div>
    </div>
  )
}

export default About