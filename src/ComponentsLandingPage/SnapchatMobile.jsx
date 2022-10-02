import React from 'react'
import "./SnapchatMobile.css";
function SnapchatMobile() {
  return (
    <div className='snapchatMobileMainContainer'>
        <div className='headingButton'>
            <h1>Imagine if <br /> <span> Snapchat </span> <br />had events</h1>
            <h3> Easily host and share events with your friends <br /> across any social media.</h3>
            </div>
        <div className='popcornBox'>
            <img src="popcornImage.png" alt="" className='popcornImage'/>
        </div>
            <button>🎉<p>create my event</p></button>
    </div>
  )
}

export default SnapchatMobile