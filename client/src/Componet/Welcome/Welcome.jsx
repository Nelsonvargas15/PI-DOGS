import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <div>
      <h1> inicio </h1>
      <Link to = "/home">
      <button>empezemos</button>
      </Link>
    </div>
  )
}