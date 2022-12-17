import React from 'react'

export const Card = (props) => {
    
  return (
    <div>
      <h1>nombre: {props.name}</h1>
      <h1>tempetamet: {props.temperamet}</h1>
      <h1>minWeight: {props.minWeight}</h1>
      <h1>maxWeight: {props.maxWeight}</h1>
      <img src= {props.image} alt = {props.id} width = "400" height = "400" />
    </div>
  )
}


