import React from 'react'
import './Scroll.css'
import player from './Image/videoplayer.png';
import union from './Image/union.png';
import mic from './Image/Mic.png';
const ScrollContainer = () => {
  return (
    <div>
      <div className='ScrollContainer'>

      <div className="images">
          <img src={union} alt="union" className="union" />
          <img src={player} alt="player" className="player" />
          <img src={mic} alt="Mic" className="mic" />
        </div>

        <div className="FirstScroll">
          <p>Avatar</p>
          <p>Technology</p>
          <p>Design</p>
          <p>Aritificial</p>
          <p>AI Chat Bot</p>
          <p>Customizable</p>
          <p>3D Model</p>
          <p>Technology</p>
          <p>Design</p>
        </div>
        <div className="SecondScroll">
        <p>People</p>
          <p>Create Videos</p>
          <p>Analyze</p>
          <p>Outfit</p>
          <p>3D Model</p>
          <p>Voice Chat</p>
          <p>Marketing</p>
          <p>Record</p>
          <p>Design</p>
        </div>
      </div>
    </div>
  )
}

export default ScrollContainer