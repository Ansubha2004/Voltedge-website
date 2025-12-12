import React from 'react'
import voltedgelogo from "../assets/logos/voltedgelogo.png"
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div className="Navbar text-white">
      <img src={voltedgelogo} className="h-25" alt="" />
      <div className="h-20 w-full border-box px-10  flex justify-evenly items-center border-[2px] border-white rounded-md">
        <Link to="/" >HOME</Link>
        <Link to="/about" >ABOUT</Link>
        <Link to="/events" >EVENTS</Link>
        <Link to="/gaming" >GAMING</Link>
        <Link to="/hackathon" >HACKATHON</Link>
        <Link to="/schedule" >SCHEDULE</Link>
        <Link to="/contact" >CONTACT</Link>
      </div>
      <img src={voltedgelogo} className="h-25 " alt="" />
      
    </div>
  )
}

export default Navbar