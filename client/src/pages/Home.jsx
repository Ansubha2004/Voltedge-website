import React from 'react'
import background1 from "../assets/backgroundimages/background1.png"
import Timer from "../components/Timer.jsx"
import { CiCalendarDate } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../components/Button.jsx"
import {useNavigate} from "react-router-dom"



function Home() {


  const navigate=useNavigate();

  return (
    <div className="w-screen h-screen relative bg-repeat-no bg-cover bg-center  " style={{ backgroundImage: `url(${background1})` }}>
      <div className="w-screen h-screen absolute bg-black/60 flex flex-col  justify-center items-center">
        <p className="translate-y-1 subheading text-white exo-2-font drop-shadow-[0_0_7px_rgba(255,255,255,0.8)] ">EE and EEE Department Presents</p>
        <p className="translate-y-5 float sekuya-regular sm:text-[400%] text-[300%] md:text-[500%] leading-none mb-5 font-extrabold
           drop-shadow-[0_0_7px_rgba(255,152,0)] bg-clip-text text-transparent bg-gradient-to-t tracking-widest from-orange-500 via-yellow-500 to-orange-500 text-center ">
            VOLT-EDGE
        </p>
        <Timer targetdate="2026-02-27T00:00:00"/>
        <div className="flex translate-y-5 justify-center items-center text-[1rem] gap-2 oxanium pop p-2 bg-black/40  border border-white/40 my-2 backdrop-blur-sm">
          <CiCalendarDate className="text-2xl -translate-y-0.5 text-orange-500 "/>
          <p className="text-green-400  [text-shadow:0_0px_3px_rgba(0,255,0,0.8)] ">27TH FEBRUARY, 2026</p>
          <FaArrowRightLong className="text-white "/>
          <p className="text-green-400 [text-shadow:0_0px_3px_rgba(0,255,0,0.8)]">1ST MARCH, 2026</p>
        </div>
        <div className="translate-y-5 w-auto h-auto flex justify-center items-center space-x-[10%] mt-4">
          <Button click={()=>navigate("")} Content="REGISTER NOW" themecss="btn1 "/>
          <Button click={()=>navigate("")} Content="VIEW SCHEDULE" themecss="btn2 "/>
        </div>
        
      </div>
      
    </div>
  )
}

export default Home