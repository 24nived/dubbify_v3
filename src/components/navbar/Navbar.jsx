import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.png';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="dub_navbar">
      <div className="dub_navbar-links">
        <div className="dub_navbar-links_logo">
          <img src={logo}/>
          </div>
        <div className="dub_navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href="#possibility">Help</a></p>
          <p><a href="#devlopers">Devlopers</a></p>
          </div>
      </div>
      <div className="dub__navbar-menu">
        {toggleMenu
        ?<RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
        :<RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className="dub__navbar-menu_container scale-up-center">
            <div className="dub__navbar-menu_container-links"> 
            <p><a href="#home">Home</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href="#help">Help</a></p>
          <p><a href="#devlopers">Devlopers</a></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;