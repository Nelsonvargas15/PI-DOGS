import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, postCreateDog } from "../../Redux/action"
import validate from "./Error/Errors";
import Form from './Form/Form';



export default function CreateDogs() {

  const dispatch = useDispatch();
  const history = useHistory()



  const [input, setInput] = useState({
    name: "",
    min_height: "",
    max_height: "",
    min_weight: "",
    max_weight: "",
    life_span: "",
    image: "",
    Temperaments: [],
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true)

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
    setErrors(validate({
      ...input, [event.target.name]: event.target.value
    }));
    
  };

  const handleSelect = (event) => {
    setInput({ ...input, Temperaments: [...input.Temperaments, event.target.value] })
    setErrors(validate({ ...input, temperament: [...input.Temperaments, event.target.value] }))

  }

  const handleSumbit = (event) => {
    event.preventDefault()

    dispatch(postCreateDog(input))
    
    if (errors.name || errors.min_height || errors.max_height || errors.min_weight || errors.max_weight) {
      alert("Necesitas completar los campos?")
    } else {
      alert("Tu perro ha sido creado.")
      setInput({
        name: "",
        min_height: "",
        max_height: "",
        min_weight: "",
        max_weight: "",
        life_span: "",
        image: "",
        Temperaments: [],
      })
      history.push('/home')
    }

  }
  const handleTempDelete = (event) => {
    setInput({ ...input, Temperaments: input.Temperaments.filter(temp => temp !== event) })
  }

  useEffect(() => {
    dispatch(getTemperaments())
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])



  return (

    <div className='background'>{
      !loading ?
        <div>
          <NavLink to='/home'><button>Back</button></NavLink>
          <div>
            <Form
              handleSumbit={handleSumbit}
              handleChange={handleChange}
              handleSelect={handleSelect}
              handleTempDelete={handleTempDelete}
              input={input}
              errors={errors}

            />
          </div>


        </div>
        : <h2>Loading</h2>}



    </div>
  )

}



