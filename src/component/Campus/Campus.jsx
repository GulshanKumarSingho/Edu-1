import React from 'react'
import './Campus.css'
import g_1 from '../../assets/gallery-1.png'
import g_2 from '../../assets/gallery-2.png'
import g_3 from '../../assets/gallery-3.png'
import g_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'
const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={g_1}/>
        <img src={g_2}/>
        <img src={g_3}/>
        <img src={g_4}/>
      </div>
      <button className='btn dark-btn'>See more here<img src={white_arrow}/></button>
    </div>
  )
}

export default Campus
