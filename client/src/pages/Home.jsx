import React from 'react'
import background1 from "../assets/backgroundimages/background1.png"

function Home() {
  return (
    <div className="w-screen h-screen relative bg-repeat-no bg-cover bg-center " style={{backgroundImage:`url(${background1})`}}>

    </div>
  )
}

export default Home