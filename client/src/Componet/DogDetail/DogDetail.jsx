import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from "../../Redux/action"
import { Link, useParams } from 'react-router-dom'
import "../DogDetail/dogDetail.modules.css"



export default function DogDetail(props) {

  const dispatch = useDispatch();
  // const {id } = useParams();
  const dogId = useSelector(state => state.dogId);
  useEffect(() => {
    dispatch(actions.getDogById(props.match.params.id))

  }, [])

  useEffect(() => {
    return () => {
      if (dogId) {
        dispatch(actions.emptyDetail())
      }
    }
  }, [dispatch, props.match.params.id])

  return (
    <div className='container'>
      {dogId.length > 0 ?
        <div className='data' >

      <div className='containerButton'>
        <Link to="/home" > <button className='backButton'>Back</button> </Link>
      </div >
          <h1> {dogId[0]?.name}</h1>
          <img  className='imgDetalle' src={dogId[0]?.image} />
          <p > Temperaments: {dogId[0]?.temperament}</p>
          <p >Min Weight: {dogId[0]?.min_weight}</p>
          <p >Max Weight: {dogId[0]?.max_weight}</p>
          <p >Min height: {dogId[0]?.min_height}</p>
          <p >Max height: {dogId[0]?.max_height}</p>
          <p >life_span: {dogId[0]?.life_span}</p>

        </div>
        : <h1 className='Loading...'>Loading</h1>
      }
    </div>
  )
}
