import { useDispatch } from 'react-redux'
import { getDogs } from '../../Redux/action'
import { React, useState } from "react"

export default function Searchbar() {
    const dispatch = useDispatch()

    const clickButton = (eve) => {
        eve.preventDefaul()
        dispatch(getDogs())
    }

    return (

        <div>
            <select>  <option> temperamento </option> 
                      <option>  raza  </option>
            </select>
            
            <select>  <option> A-Z </option>
                      <option> Z-A </option>  
            </select>
            <select>
                <option>peso minimo</option>
                <option>peso maximo </option>
            </select>
            
            <input type="text" />
            <button>Busqueda</button>
            <button onClick={eve => { clickButton(eve) }}>Reinicio</button>
        </div>
    )
}
