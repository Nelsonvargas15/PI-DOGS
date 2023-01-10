import React from 'react'
import { Link } from 'react-router-dom'
import "./welcome.modules.css"

export default function Welcome() {
  return (
    <div className='welcome'>
      <img  className='imgDogs' src='https://www.pngplay.com/wp-content/uploads/12/Dog-Transparent-Background.png'/>
      <h1 className='inicio'> The Dogs App! </h1>
      <Link to = "/home">
      <button className='ButtonInicio'>Empezemos!</button>
      </Link>
    </div>
  )
}