import React from 'react'
import "../CardDog/CardDog.css"
export default function CardDog({
    name,
    image,
    temperament,
    Temperaments,
    min_weight,
    max_weight,
    key,
}) {
 
  return (
    <div className='Card' >
      <h1>{`nombre: ${name}`}</h1>


      {Temperaments ?  
        Temperaments?.map((ele)=><p>{ele.name}</p>) 
      :<p>{temperament}</p>}
       
      
      <h3>{`peso minimo: ${min_weight}KG`}</h3>
      <h3>{`peso maximo: ${max_weight}KG`}</h3>
      <img src={image} alt={`imagen de un ${name}`} width="500" height="400" />
    </div>
  )
}
