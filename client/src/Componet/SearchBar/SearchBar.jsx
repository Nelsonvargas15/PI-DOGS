import React from 'react'
import { getNameDogs } from "../../Redux/action"
import { useState } from "react";
import { useDispatch } from "react-redux";



export default function SearchBar() {
  const dispatch = useDispatch()
const [dogsState, setName] = useState('')


function handelClick(evento){
  evento.preventDefault()

  if(dogsState.length){
  dispatch(getNameDogs(dogsState));
  setName("")
 }
}



  return (
    <div className='searchBar'>
      <input 
      type="text"
      placeholder='Buscar Perros'
      value={dogsState}
      onChange={(evento)=>{
        setName(evento.target.value)
      }}
      
      
      />
      <button type='submit' onClick={handelClick}>Buscar</button>
    </div>
  )
}
