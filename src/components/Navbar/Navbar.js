

import React, { useState } from "react"
// Navbar style
import './Navbar.css';
// logo
import logo from './logo2.jpg';
//  React Icon
import {FaTimes , FaBars} from 'react-icons/fa'
//  React Router Nav active link
import { NavLink } from "react-router-dom"; 
// import { Link } from "react-router-dom";

const Header = () => {

  // @@@@@@@@@@@@@@ Navbar scroll  start @@@@@@@@@@@@
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })

   // @@@@@@@@@@@@@@ Navbar scroll  end @@@@@@@@@@@@

    // @@@@@@@@@@@@@@ Navbar Toogle Menu Button @@@@@@@@@@@@
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)

   // @@@@@@@@@@@@@@ Navbar active Link condition start @@@@@@@@@@@@
  const NavLinkStyles = ({isActive}) => {
          return {
             fontWeight: isActive ? 'bold' : 'normal',
             textDecoration: isActive ? 'none' : 'underline' ,   
          }
  }

  // @@@@@@@@@@@@@@ Navbar active Link condition end @@@@@@@@@@@@

  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          {/* logo */}
          <div className='logo'>
            <img src={logo} alt='' />
             
          </div>

        {/*   @@@@@@@@@@@@@@ Navbar active Link start  @@@@@@@@@@@@ */}
        
          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
             
              <li>
                <NavLink style={NavLinkStyles}  to="/">Home</NavLink>
                
              </li>
              <li>
                 <NavLink style={NavLinkStyles} to="/about">About</NavLink>
                
              </li>
              <li>
                <NavLink style={NavLinkStyles} to='/skills'>Skills</NavLink>
                
              </li>
              <li>
                <NavLink style={NavLinkStyles} to="/portfolio">Portfolio</NavLink>
              </li>
            
              <li>
              
                <NavLink style={NavLinkStyles} to="/testimonial">Testimonial</NavLink>
                
              </li>
              
              <li>
                
                <NavLink style={NavLinkStyles} to="/contact">Contact</NavLink>
              </li>
              
              <li>
                <button className='home-btn'>BUY NOW</button>
              </li>
            </ul>

             {/* @@@@@@@@@@@@@@ Navbar active Link end @@@@@@@@@@@@ */}
            
            {/* @@@@@@@@@@@ Toogle Button start */}

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
             { Mobile ? <FaTimes className="close home-btn"></FaTimes> : <FaBars className="open"></FaBars>}
             
            </button>
            {/* @@@@@@@@@@@ Toogle Button start */}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header












