import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';
const Navbar = () => {
 const [sticky,setSticky]=useState(false);

useEffect(()=>{
    window.addEventListener('scroll',()=>{
    window.scrollY > 30 ? setSticky(true) : setSticky(false);
  });
},[]);

 const [mob,setmob]=useState(false);
 const toggleMenu=()=>{
  mob?setmob(false):setmob(true);
 }

  return (
<nav  className={`container ${sticky ? 'dark-nav' : ''}`}> 
    <img src={logo} className='logo'/>
    <ul className={`${mob?'mobile-view':''}`}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link  to='program' smooth={true} offset={-240} duration={500}>Program</Link></li>
        <li><Link  to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link  to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link  to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link  to='contact' smooth={true} offset={-220} duration={500}><button className='btn'>Contact us</button></Link></li>
    </ul>
    <img src={menu_icon} className='menu' onClick={toggleMenu}/>
 </nav>
  )
}

export default Navbar
