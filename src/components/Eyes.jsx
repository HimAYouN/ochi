import React, { useEffect, useRef, useState } from 'react'

function Eyes() {
  const [newLeftAngle, setLeftAngle] = useState(0);
  const [newRightAngle, setRightAngle] = useState(0);
  const eyesdiv = useRef(null) 
  const leftEye = useRef(null)
  const rightEye = useRef(null)

  // useEffect(()=>{
  //   // eyesdiv.current.addEventListener("mousemove", (e)=>{
  //   //   // console.log(e.clientX, e.clientY)

  //   //   //Horizontal & vertical mouse pointer location 
  //   //   let mouseX = e.clientX;
  //   //   let mouseY = e.clientY;


  //   //   //Horizontal distance from center of window
  //   //   let deltaX = (mouseX - ((window.innerWidth/2) - leftEye.current.offsetWidth));
  //   //   let deltaY = (mouseY - (window.innerHeight/2));

      

  //   //   // console.log("leftEye innerWidth", )

      
  //   //   var angle = (180/Math.PI) * Math.atan2(deltaY, deltaX);
  //   //   // console.log(angle);
  //   //   setNewAngle(angle-180);
  //   //   // console.log(eyesdiv.current.innerHeight)
  //   //   // console.log(leftEye.current.innerWidth)
  //   // })
  // })

  useEffect(() => {
    fetchAngle()
  });

    const fetchAngle = ()=>{
      
      eyesdiv.current.addEventListener("mousemove", (e)=>{

    
        //Horizontal & vertical mouse pointer location 
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        
        //fetching details of left and right eyes
        const rektL = leftEye.current.getBoundingClientRect();
        const rektR = rightEye.current.getBoundingClientRect();
        // console.log(rektL)
        // console.log(rektR)
        
        //centeres of both eyes
        const leftIX = (rektL.left + leftEye.current.clientWidth) / 2;
        const leftIY = (rektL.top + leftEye.current.clientHeight) / 2;
        const rightIX = (rektR.left + rightEye.current.clientWidth) / 2;
        const rightIY = (rektR.top + rightEye.current.clientHeight) / 2;
        // console.log((rektR.top + rightEye.current.clientHeight) / 2)
        
        
        // console.log(leftIX, leftIY, rightIX, rightIY)
        
        setLeftAngle(angle(mouseX, mouseY, leftIX, leftIY)-180);
        setRightAngle(angle(mouseX, mouseY, rightIX, rightIY)-180);
        
  
      })
    }

    const angle = (mouseX, mouseY, EyeX, EyeY)=>{
      const dy = mouseY-EyeY;
      const dx = mouseX-EyeX;
      const rad = Math.atan2(dy, dx);
      const deg = rad * (180/Math.PI)
      return deg;

    }


  return (
    

    // <div ref={eyesdiv}  data-scroll data-scroll-speed='-.6' className='w-full h-screen overflow-hidden '>
    //   {/* bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] */}
    //   <div className=' relative w-full h-screen   bg-cover bg-center'>
    //     <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10 ">
    //       <div ref={leftEye} className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
    //           <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
    //             <div style={{transform: `translate(-50%, -50%) rotate(${newLeftAngle}deg)`}} className="line absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 p-3">
    //               <div className="w-5 h-5 bg-zinc-100  rounded-full"></div>
    //             </div>
    //           </div>
    //       </div>

    //       <div ref={rightEye} className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
    //           <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
    //             <div style={{transform: `translate(-50%, -50%) rotate(${newRightAngle}deg)`}} className="line absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 p-3">
    //               <div className="w-5 h-5 bg-zinc-100  rounded-full"></div>
    //             </div>
    //           </div>
    //       </div>
          
    //     </div>  
    //   </div>
    // </div>

    
    <div ref={eyesdiv} className={`w-full h-screen overflow-hidden bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] bg-cover bg-center items-center flex justify-center gap-12`}>

      <div  className="lefteye w-[14vw] h-[14vw] bg-zinc-100 rounded-full flex justify-center items-center">
        <div ref={leftEye} style={{transform: `rotate(${newLeftAngle}deg)`}} className="innerblack relative w-[10vw] h-[10vw] bg-zinc-800 rounded-full">
          <div className="movingPart absolute w-[2vw] h-[2vw] bg-zinc-100 rounded-full ml-14 mt-2 "></div>
        </div>
      </div>
      <div className="lefteye w-[14vw] h-[14vw] bg-zinc-100 rounded-full flex justify-center items-center">
        <div ref={rightEye}  style={{transform: `rotate(${newRightAngle}deg)`}} className="innerblack relative w-[10vw] h-[10vw] bg-zinc-800 rounded-full">
          <div className="movingPart absolute w-[2vw] h-[2vw] bg-zinc-100 rounded-full ml-14 mt-2 "></div>
        </div>
      </div>
      {/* <div ref={rightEye} className="temp"></div> */}
    </div>


  /* <div
  style={{ backgroundImage: `url(${url})` }}
  className={`eyeContainer w-full ${changes}
            items-center flex justify-center gap-12`}
  >
  <div className={`eyeLeft w-[12rem] h-[12rem] bg-zinc-100 rounded-full `}>
    <div
      ref={eyeLeft}
      style={{ transform: `rotate(${Angle(eyeLeft)}deg)` }}
      className={`lens w-[8rem] h-[8rem] bg-zinc-900 rounded-full relative
            mt-8 ml-8 after:w-[1.5rem] after:h-[1.5rem] after:bg-zinc-100 
            after:rounded-full after:absolute after:ml-14 after:mt-[1.5px]`}
    ></div>
  </div>
    
  <div className={`eyeRight w-[12rem] h-[12rem] bg-zinc-100 rounded-full`}>
    <div
      ref={eyeRight}
      style={{ transform: `rotate(${Angle(eyeRight)}deg)` }}
      className={`lens w-[8rem] h-[8rem] bg-zinc-900 rounded-full relative
            mt-8 ml-8 after:w-[1.5rem] after:h-[1.5rem] after:bg-zinc-100 
            after:rounded-full after:absolute after:ml-14 after:mt-[1.5px]`}
    ></div>
  </div>
  </div> */

  )
}

export default Eyes