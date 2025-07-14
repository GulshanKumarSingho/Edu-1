import React, { useState } from 'react'
import Navbar from './component/navbar/Navbar'
import Hero from './component/Hero/Hero'
import Program from './component/program/program'
import Title from './component/Title/Title'
import About from './component/About/About'
import Campus from './component/Campus/Campus'
import Testimonials from './component/Testimonials/Testimonials'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'
import Video from './component/Videoplayer/Video'
const App = () => {

const [v,setv]=useState(false);

  return (
  <>
  <Navbar/>
  <Hero/>
 <div className="container">
  <Title sub='OUR PROGRAM' tit='What We Offer' / >
  <Program/>
  <About setv={setv}/>
   <Title sub='Gallery' tit='Campus Photos' / >
   <Campus/>
   <Title sub='testimonials' tit='What Student Says' / >
   <Testimonials/>
   <Title sub='Contact us' tit='Get In Touch' / >
   <Contact/>
   <Footer/>
 </div>
  <Video v={v} setv={setv}/>
  
  </>
  )
}

export default App
