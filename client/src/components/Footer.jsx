import React from 'react'
import {Link} from "react-router-dom";

function Footer() {

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Schedule", href: "/schedule" },
    { name: "Contact", href: "/contact" },
  ];


  return (
    <footer id="footer" className=" relative  bg-[black] border-t border-t-[0.5px] border-t-white/50 shadow-[0px_0px_4px_white] w-full h-auto box-border py-10 px-[4%] sm:px-[6%] text-[white] text-[0.6rem] ">
      <div className="w-full h-full flex justify-between">
        <div className="w-full flex flex-col items-start gap-4">
          <p className="voltedgelogo drop-shadow-none text-[1.8rem] -translate-x-1 sekuya-regular">VOLT-EDGE</p>
          <p className="oxanium paratext opacity-[0.6]">The flagship inter-departmental technical & cultural event, jointly organized by the Department of Electrical and Electronics Engineering and Department of Electrical Engineering.</p>
          <p className="space-mono-bold opacity-[0.7] subheading text-[0.7rem]">27 February - 1 March, 2026</p>
        </div>
        <div className="w-full flex flex-col items-center gap-3">
          <p>Quick Links</p>
          {
            quickLinks.map((link,index)=>(
              <Link key={index} to={link.href}>{link.name}</Link>
            ))
          }
        </div>
        <div className="w-full">necbhjewbhjcbewhcbhjewbchjbehwcbhjebc</div>
      </div>
    </footer>
  )
}

export default Footer