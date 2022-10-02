import React from 'react'
import "./SnapchatEvents.css";
function SnapchatEvents() {
  return (
    <div className='snapchatEventsMainContainer'>
        <div className='popcornBox'>
            <img src="popcornImage.png" alt="" className='popcornImage'/>
        </div>
        <div className='headingButton'>
            <h1>Imagine if <br /> <span> Snapchat </span> <br />had events</h1>
            <h3> Easily host and share events with your friends across any social media.</h3>
            <button>🎉<p>create my event</p></button>
        </div>
    </div>
  )
}

export default SnapchatEvents