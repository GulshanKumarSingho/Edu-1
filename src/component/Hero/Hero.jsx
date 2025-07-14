import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure better education for a better world</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio debitis iure, ullam eum magnam animi voluptates porro? Quisquam, cum non facilis, quia doloremque dolores illo velit deserunt, dolor necessitatibus laboriosam.</p>
        <button className='btn'>Explore More<img src={dark_arrow}/></button>
      </div>
    </div>
  )
}

export default Hero
