import React, { useState } from 'react'
import Burger from "./Burger"
import "./Navbar.css"

const Navbar = () => {
  const [isFF, setIsFF] = useState(false)
  const [isGSC, setIsGSC] = useState(false)

  const FFLoggedIn = () => {
    setIsFF(true)
  }

  return (
    <div className="navbar">
      <h3 className="nav-left">Matches Up</h3>
      <div className="nav-right">
        <button>Home</button>
        <button>Articles</button>
        {isFF ? 
        <button>Sign out</button>
        :
        <button onClick={() => FFLoggedIn()}>Sign In</button>
        }
        <Burger isFF={isFF} />
      </div>
      
    </div>
  )
}

export default Navbar