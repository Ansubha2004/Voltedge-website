import React from 'react'
//import background1 from "../assets/backgroundimages/background1.png"
import Timer from "../components/Timer.jsx"
import { CiCalendarDate } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../components/Button.jsx"
import Button1 from "../components/Button1.jsx"
import { useNavigate } from "react-router-dom"
import VantaNetBackground from '../utils/VantaNetBackground.jsx';


function Home() {


  const navigate = useNavigate();

  return (
    <section id="firstscreen" className="w-screen h-screen relative ">
      <VantaNetBackground />
      <div className=" sm:px-0 px-12 sm:gap-5 gap-10 sm:w-auto w-full sm:mt-5 z-2 whitespace-nowrap h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 absolute flex flex-col justify-center items-center">
        <p className="subheading text-white exo-2-font drop-shadow-[0_0_7px_rgba(255,255,255,0.8)] ">EE and EEE Department Presents</p>
        <p className="scale-110 float sekuya-regular sm:text-[400%] text-[270%] md:text-[500%] voltedgelogo">
          VOLT-EDGE
        </p>
        <p className="text-blue-500 translate-y-5 sm:scale-100 scale-120 sm:translate-y-1 drop-shadow-[1px_1px_0px_rgba(255,255,255,1)] ibm-plex-mono-light">EVENT STARTS IN</p>
        <Timer targetdate="2026-02-27T00:00:00" />
        <div className=" flex sm:scale-100 scale-90 justify-center items-center text-[1rem] oxanium pop p-3 bg-black/40 gap-3  border border-white/40 backdrop-blur-sm">
          <CiCalendarDate className="text-2xl -translate-y-0.5 text-orange-500 " />
          <p className="text-green-400  [text-shadow:0_0px_3px_rgba(0,255,0,0.8)] ">27TH FEBRUARY, 2026</p>
          <FaArrowRightLong className="text-white " />
          <p className="text-green-400 [text-shadow:0_0px_3px_rgba(0,255,0,0.8)]">1ST MARCH, 2026</p>
        </div>
        <div className=" sm:w-auto w-full h-auto flex sm:flex-row flex-col justify-center space-y-[5%] sm:space-y-0 items-center sm:space-x-[5%]">
          <Button1 click={() => navigate("")} Content="REGISTER HERE" />
          <Button1 click={() => navigate("")} Content="VIEW SCHEDULE" />
        </div>
      </div>
    </section>
  )
}

export default Home