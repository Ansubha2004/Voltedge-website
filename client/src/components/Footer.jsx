import React from 'react'
import { Link } from "react-router-dom"
import { Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";

function Footer() {

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Gaming", href: "/gaming" },
    { name: "Hackathon", href: "/hackathon" },
    { name: "Schedule", href: "/schedule" },
    { name: "Contact", href: "/contact" },
  ];

  const contact = [
    {
      name: "voltedge@gmail.com",
      href: "mailto:voltedge@gmail.com",
      icon: <Mail className="scale-90" />
    },
    {
      name: "+919876543210",
      href: "tel:+919876543210",
      icon: <Phone className="scale-90" />
    }
  ];

  const socials = [
    { href: "https://www.instagram.com", icon: <Instagram /> },
    { href: "https://www.facebook.com", icon: <Facebook /> },
    { href: "https://www.linkedin.com", icon: <Linkedin /> }
  ];

  return (
    <footer
      id="footer"
      className="
        flex flex-col bg-black pb-7 pt-15 sm:pt-10 px-[4%] sm:px-[6%]
        text-white text-[0.6rem]
        border-t border-white/30 border-t-[1px]
        gap-7 
      "
    >
      <div className="w-full h-full flex sm:flex-row flex-col sm:gap-0 gap-7 sm:justify-between">

        {/* LEFT */}
        <div className="sm:w-[40%] flex flex-col items-start gap-4">
          <p
            className="
              voltedgelogo text-[2rem] sm:text-[1.8rem] -translate-x-1 sekuya-regular
              drop-shadow-[0_0_10px_#ec4899]
              hover:drop-shadow-[0_0_26px_#ec4899]
              transition-all duration-300
            "
          >
            VOLT-EDGE
          </p>

          <p className="oxanium sm:text-none text-[0.9rem] opacity-60">
            The flagship inter-departmental technical & cultural event, jointly organized
            by the Department of Electrical and Electronics Engineering and Department of Electrical Engineering.
          </p>

          <p className="oxanium opacity-70 text-[1rem] drop-shadow-[0_0_8px_rgba(236,72,153,0.4)]">
            27 February - 1 March, 2026
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="sm:w-fit w-full flex flex-col items-start gap-2 sm:gap-1">
          <p className="space-mono-bold text-[1.3rem] sm:text-[0.9rem] mb-2 drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]">
            QUICK LINKS
          </p>

          {quickLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="
                oxanium text-[1rem] sm:text-[0.7rem] opacity-50
                drop-shadow-[0_0_6px_rgba(236,72,153,0.4)]
                hover:opacity-100
                hover:bg-gradient-to-br hover:from-teal-400 hover:to-purple-500
                hover:text-transparent hover:bg-clip-text
                hover:drop-shadow-[0_0_20px_#ec4899]
              "
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CONTACT + SOCIAL */}
        <div className="w-full sm:w-fit flex flex-col items-start gap-1">
          <p className="space-mono-bold text-[1.3rem] sm:text-[0.9rem] mb-2 drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]">
            CONTACT US
          </p>

          {contact.map((con, index) => (
            <div
              key={index}
              className="group flex gap-2 items-center oxanium text-[1rem] sm:text-[0.7rem]"
            >
              {/* ICON */}
              <span
                className="
                  p-1 rounded-md
                  opacity-50
                  drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]
                  group-hover:opacity-100
                  group-hover:drop-shadow-[0_0_18px_#ec4899]
                  group-hover:text-pink-400
                  transition-all 
                "
              >
                {con.icon}
              </span>

              {/* TEXT */}
              <a
                href={con.href}
                className="
                  sm:translate-y-0.5 opacity-50
                  drop-shadow-[0_0_6px_rgba(236,72,153,0.4)]
                  group-hover:opacity-100
                  group-hover:bg-gradient-to-br group-hover:from-teal-400 group-hover:to-purple-500
                  group-hover:text-transparent group-hover:bg-clip-text
                  group-hover:drop-shadow-[0_0_20px_#ec4899]
                  transition-all
                "
              >
                {con.name}
              </a>
            </div>
          ))}

          {/* SOCIAL ICONS */}
          <div className="flex gap-3 mt-2">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group p-5 sm:p-3 rounded-[12px]
                  border border-white/20
                  drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]
                  hover:border-pink-500
                  hover:drop-shadow-[0_0_26px_#ec4899]
                  hover:scale-110
                  transition-all
                "
              >
                <span
                  className="
                    block
                    group-hover:text-pink-500
                    group-hover:drop-shadow-[0_0_16px_#ec4899]
                    transition-all duration-300
                  "
                >
                  {social.icon}
                </span>
              </a>
            ))}
          </div>

        </div>

      </div>
      <div className="w-full border-t border-t-[1px] border-t-white/30"></div>
      <div className="flex sm:flex-row flex-col w-full sm:text-none text-[0.8rem] items-center sm:justify-between oxanium opacity-[0.8]">
        <p>© 2026 VOLT-EDGE. All rights reserved.</p>
        <p>Dept. of EEE & Dept. of EE</p>
      </div>
    </footer>
  )
}

export default Footer
