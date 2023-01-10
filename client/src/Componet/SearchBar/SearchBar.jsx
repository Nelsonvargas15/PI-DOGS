import React from 'react'
import { getNameDogs  , ChangePage} from "../../Redux/action"
import { useState } from "react";
import { useDispatch } from "react-redux";
import "../SearchBar/SearchBar.modules.css"


export default function SearchBar() {
  const dispatch = useDispatch()
const [dogsState, setName] = useState('')


function handelClick(evento){
  evento.preventDefault()
  dispatch(ChangePage(1))

  if(dogsState.length){
  dispatch(getNameDogs(dogsState));
  setName("")
 }
}



  return (
    <div className='searchBar'>
      <input className='InputPricipal'
      type="text"
      placeholder='Buscar Perros'
      value={dogsState}
      onChange={(evento)=>{
        setName(evento.target.value)
      }}
      
      
      />
      <button  className='buttonBuscador' type='submit' onClick={handelClick}>Buscar</button>
    </div>
  )
}
