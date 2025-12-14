import React from 'react'
import voltedgelogo from "../assets/logos/voltedgelogo.png"
import darkiemlogo from "../assets/logos/darkiemlogo.png"
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div className="Navbar text-white">
      <img src={voltedgelogo} className="h-20" alt="" />
      <div className="paratext h-15 w-full border-box px-10  flex justify-evenly items-center border-[2px] border-white/50 rounded-l-full rounded-r-full transition-all duration-300 hover:shadow-[0px_0px_15px_rgba(255,255,255,0.50)] hover:backdrop-blur-sm hover:bg-black/10 ">
        <Link to="/" className="navbaranimation">HOME</Link>
        <Link to="/about" className="navbaranimation">ABOUT</Link>
        <Link to="/events" className="navbaranimation">EVENTS</Link>
        <Link to="/gaming" className="navbaranimation">GAMING</Link>
        <Link to="/hackathon" className="navbaranimation">HACKATHON</Link>
        <Link to="/schedule" className="navbaranimation">SCHEDULE</Link>
        <Link to="/contact" className="navbaranimation">CONTACT</Link>
      </div>
      <img src={darkiemlogo} className="h-17 " alt="" />
      
    </div>
  )
}

export default Navbar