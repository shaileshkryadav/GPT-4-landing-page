import {React, useState} from 'react';
import "./navbar.css";
import logo from "../../assets/logo.svg";
import {RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => (
  <>
          <p><a href='#home'>Home</a></p>
          <p><a href='#wgpt4'>What is GPT-4</a></p>
          <p><a href='#posibility'>Open Ai</a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#blog'>Library</a></p>
  </>
)
function Navbar() {
  var [toogle, setToogle] = useState(false);
  return (
    <div className='gpt4__navbar'>
      <div className='gpt4__navbar-links'>
        <div className='gpt4__navbar-links_log'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt4__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt4__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt4__navbar-menu'>
        {toogle ? 
        <RiCloseLine color="#fff" size={27} onClick={()=> setToogle(false)}  />: 
        <RiMenu3Line color="#fff" size={27} onClick={()=>setToogle(true)} /> }
        {toogle && (
          <div className="gpt4__navbar-menu_container scale-up-center">
            <div className='gpt4__navbar-menu_container-links'>
            <Menu></Menu>
            </div>
            <div className='gpt4__navbar-menu_container-links-sign'>
            <p>Sign in</p>
            <button type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;