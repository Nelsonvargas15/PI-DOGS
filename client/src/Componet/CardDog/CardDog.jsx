import React from 'react'
import "../CardDog/CardDog.css"
import { Link } from 'react-router-dom'
export default function CardDog({
    id,
    name,
    image,
    temperament,
    Temperaments,
    min_weight,
    max_weight,
    key,
}) {
 
  return (
   <Link to={`/dogs/${id}`}>
    <div className='Card' key={id} >
      <h1>{`nombre: ${name}`}</h1>
       {Temperaments ?  
        Temperaments?.map((ele)=><p key={id}>{ele.name}</p>) :<p key={id}>{temperament}</p>}
       <h3>{`peso minimo: ${min_weight}KG`}</h3>
      <h3>{`peso maximo: ${max_weight}KG`}</h3>
      <img src={image} alt={`imagen de un ${name}`} width="500" height="400" />
    </div>
    </Link> 
  )
}



