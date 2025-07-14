import React, { useRef } from 'react'
import './Video.css'
import vdo from '../../assets/Video.mp4'
const Video = ({v,setv}) => {
    const play=useRef(null);
   const cp=(e)=>{
     if(e.target === play.current){
        setv(false);
     }
   }

  return (
    <div className={`vp ${v?'':'hide'}`} ref={play} onClick={cp}>
      <video src={vdo} autoPlay muted controls></video>
    </div>
  )
}

export default Video
