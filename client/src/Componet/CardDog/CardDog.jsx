import React from 'react'
import "../CardDog/CardDog.modules.css"
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
   <Link className='linkCard' to={`/dogs/${id}`}>
    <div className='Card' key={id} >
      <h1 className='nameDog'> {`name: ${name}`}</h1>
       {Temperaments ?  
        Temperaments?.map((ele)=><p key={id}>{ele.name}</p>) :<h3><p key={id}> temperaments: {temperament}</p> </h3>}
       <h3>{`min_weight: ${min_weight}KG`}</h3>
      <h3>{`max_weight: ${max_weight}KG`}</h3>
      <img  className='img'  src={image} alt={`imagen de un ${name}`}  />
    </div>
    </Link> 
  )
}



