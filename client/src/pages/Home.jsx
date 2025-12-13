import React from 'react'
import background1 from "../assets/backgroundimages/background1.png"
import Timer from "../components/Timer.jsx"

function Home() {
  return (
    <div className="w-screen h-screen relative bg-repeat-no bg-cover bg-center  " style={{ backgroundImage: `url(${background1})` }}>
      <div className="w-screen h-screen absolute bg-black/60 flex flex-col justify-center items-center">
        <p className="float subheading text-white exo-2-font drop-shadow-[0_0_7px_rgba(255,255,255,0.8)] ">27TH FEBRUARY, 2026 - 1ST MARCH, 2026</p>
        <div className="float sekuya-regular sm:text-[500%] text-[300%] md:text-[600%] leading-none font-extrabold
           drop-shadow-[0_0_7px_rgba(255,152,0)] bg-clip-text text-transparent bg-gradient-to-t from-orange-500 via-yellow-500 to-orange-500 text-center ">
            <p>VOLT-EDGE</p>
            <p className="">2026</p>
        </div>
      </div>
      <p></p>
    </div>
  )
}

export default Home