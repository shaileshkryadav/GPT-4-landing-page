import React from 'react';
import "./navbar.css";
import logo from "."
import {RiMenu3Line, RiCloseLin } from "react-icons/ri";

function Navbar() {
  return (
    <div className='gpt4__navbar'>
      <div className='gpt4__navbar-links'>
        <div className='gpt4__navbar-links_log'>
          <img src='logo' alt='logo' />
        </div>
      </div>
    </div>
  )
}

export default Navbar;