import React from 'react'
import './Title.css'
const Title = ({sub,tit}) => {
  return (
    <div className='title' >
      <p>{sub}</p>
      <h2>{tit}</h2>
    </div>
  )
}

export default Title
