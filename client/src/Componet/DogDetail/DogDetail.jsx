import React , { useEffect } from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import * as actions from "../../Redux/action"
import { Link, useParams } from 'react-router-dom'




export default function DogDetail(props) {
    
    const dispatch = useDispatch();
    // const {id } = useParams();
    const dogId = useSelector(state => state.dogId);
    useEffect(()=>{
        dispatch(actions.getDogById(props.match.params.id))
        
    },[])

    useEffect (()=>{
        return ()=>{
            if(dogId){
                dispatch(actions.emptyDetail())
            }
        }
    },[dispatch,props.match.params.id])
    
  return (
    <div>
      <Link to = "/home"> <button>Back</button> </Link>
    {  dogId.length > 0?
    <div >

        <h1> {dogId[0]?.name}</h1>
        <img  src = {dogId[0]?.image} />
        <p > temperament: {dogId[0]?.temperament}</p>
        <p >Min Weight: {dogId[0]?.min_weight}</p>
        <p >Max Weight: {dogId[0]?.max_weight}</p>
        <p >Min height: {dogId[0]?.min_height}</p>
        <p >Max height: {dogId[0]?.max_height}</p>
        <p >life_span: {dogId[0]?.life_span}</p>
        
      </div> 
     : <h1>Loading</h1> 
    }
    </div>
  )
}
