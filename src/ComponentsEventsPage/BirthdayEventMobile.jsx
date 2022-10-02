import React from 'react'
import "./BirthdayEventMobile.css";
import {AiFillCalendar} from "react-icons/ai"
import {GrLocation} from "react-icons/gr"
function BirthdayEventMobile() {
  return (
    <div className='birthdayEventMobileMainContainer'>
        <div className='popcornBox'>
            <img src="birthdayImage.png" alt="" className='popcornImage'/>
        </div>
        <div className='headingButton'>
            <h1>Birthday Bash</h1>
            <h3> Hoisted by Elysia</h3>
            <div className='card'><AiFillCalendar className='icon' /><div className='cardText'><p className='upperText'>18 August 6:00 PM</p><p className='lowerText'>to 19 August 1:00PM UTC +10</p></div><i></i></div>
            <div className='card' style={{marginTop:"5em"}}><GrLocation className='icon'/> <div className='cardText'><p className='upperText'>Street name</p><p className='lowerText'>Suburb, State, Postcode</p></div><i></i></div>
        </div>
    </div>
  )
}

export default BirthdayEventMobile