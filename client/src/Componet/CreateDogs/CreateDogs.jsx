import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, PostCreateDog } from "../../Redux/action"



export default function CreateDogs() {
const dispatch = useDispatch();
const history = useHistory()
const temperaments = useSelector((state)=> state.temperaments);
const [input,setInput] = useState({
  name:"",
  min_height: "",
    max_height: "",
    min_weight: "",
    max_weight: "",
    temperament: [],
    life_span: "",
    image: "",
  });
  
  useEffect(() =>{
    dispatch(getTemperaments());
  },[]);

  function handleChange(ele){
    setInput({
      ...input,
      [ele.target.name]: ele.target.value,
    })
  }
   
  function handleSelect(ele) {
    setInput({
      ...input, 
      temperament: [...input.temperament, ele.target.value], 
    });
  }

  function handleSubmit(e) {
    // esta funcion mandara todo nuestro input a nuestra funcion creadora
    e.preventDefault();
    console.log(input);
    dispatch(PostCreateDog(input));
    alert("perro nuevo!");
    setInput({
      // seteamos el estado en 0 again
      name: "",
      min_height: "",
      max_height: "",
      min_weight: "",
      max_weight: "",
      temperament: [],
      life_span: "",
      image: "",
    });
    history.push('/home')// este nos re-dirigira al componente home, al terminar
  }

  const handleTempDelete = (event) =>{
    setInput({...input, temperament: input.temperament.filter(temp => temp !== event)})
}






  return (
    <div>
      <Link to="/home">
      <button>Volver</button>
      </Link>
      <h1>Crea a tu Perrito</h1>
      
    </div>
  )
}
