import React from "react"
import react from "../src/assets/react.svg" // if you have a logo image

function Navbar() {
  return (
    <nav className="navbar">
      <img src={react} alt="React logo" className="logo" />
      <h3 className="logo-text">ReactFacts</h3>
      <h4 className="course-title">React Course - Project 1</h4>
    </nav>
  )
}

export default Navbar
