import React from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  

  return (
    <div className="relative w-screen h-screen min-h-screen overflow-x-hidden">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/*<Route path="/Events" element={<Events />} />
        <Route path="/Memberinfo" element={<CWC />} />
        <Route path="/Contact" element={<Contact />} /> */}
      </Routes>
    </div>
  )
}

export default App


