import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { getDogs } from '../../Redux/action'
import { useState , useEffect } from 'react'
import {Card} from "../Card/Card"


export default function Cards() {
  
    const dispacth = useDispatch()
    const allDogs = useSelector((state) => state.dogs)
    useEffect(() => {
        dispacth(getDogs())
    },[dispacth])
    return (
    
    <div>
      {allDogs?.map((ele)=>{
        
        return(
            <div key={ele.id}>
                <Card 
                id = {ele.id}
                name = {ele.name} 
                temperamet = {ele.temperament}
                minWeight ={ele.min_weight}
                maxWeight ={ele.max_weight
                }
                image ={ele.image}
                
                />
            </div>
        )
      })}
    </div>
  )
}
