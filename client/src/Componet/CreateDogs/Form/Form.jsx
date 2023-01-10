import React from 'react'
import { useSelector } from "react-redux";
import "./Form.modules.css"
import { Link } from 'react-router-dom';

export default function Form({

  handleSumbit,
  handleChange,
  handleSelect,
  handleTempDelete,
  input,
  errors,
  key

}) {

  const Temperaments = useSelector(state => state.temperaments)

  return (
    <div className='Container'>
        
      <form onSubmit={(e) => handleSumbit(e)}>
        <div className=' Description'>
        <div >
          <label>Name: </label>
          <input type="text" value={input.name} name="name" onChange={(e) => handleChange(e)} />
          {errors.name ? (<span>{errors.name}</span>) : <span></span>}
        </div>
        <div>
          <label>Minimun height: </label>
          <input type="text" value={input.min_height} name="min_height" onChange={(e) => handleChange(e)} />
          {errors.min_height ? (<span>{errors.min_height}</span>) : <span></span>}
        </div>
        <div>
          <label>Maximum height: </label>
          <input type="text" value={input.max_height} name="max_height" onChange={(e) => handleChange(e)} />
          {errors.max_height ? (<span>{errors.max_height}</span>) : <span></span>}
        </div>
        <div>
          <label>Minimun weight: </label>
          <input type="text" value={input.min_weight} name="min_weight" onChange={(e) => handleChange(e)} />
          {errors.min_weight ? (<span>{errors.min_weight}</span>) : <span></span>}
        </div>
        <div>
          <label>Maximum weight: </label>
          <input type="text" value={input.max_weight} name="max_weight" onChange={(e) => handleChange(e)} />
          {errors.max_weight ? (<span>{errors.max_weight}</span>) : <span></span>}
        </div>
        <div>
          <label>Life Span: </label>
          <input type="text" value={input.life_span} name="life_span" onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <label>Image: </label>
          <input type="text" value={input.image} name="image" onChange={(e) => handleChange(e)} />
        </div>
        <div>
       
          <label>Temperament: </label>
          <select className='select' onChange={(e) => handleSelect(e)}>
            {
              Temperaments.map((temp) => (
                <option value={temp.name}>{temp.name}</option>
              ))
            }
          </select>
          {errors.Temperaments && (<p>{errors.Temperaments}</p>)}
        </div>
        </div>
        <ul className='templist'><p>{input.Temperaments.map(temp => temp + ', ')}</p></ul>
        <button className='CreateButton' type="submit" disabled={
          !input.name ||
          !input.min_height ||
          !input.max_height ||
          !input.min_weight ||
          !input.max_weight ||
          !input.Temperaments ||
          errors.name ||
          errors.min_height ||
          errors.max_height ||
          errors.min_weight ||
          errors.max_weight ||
          errors.temperament}>Create dog</button>
      </form>
      {input.Temperaments.map(temp =>
        <div>

          <span>{temp}</span>
          <button onClick={() => handleTempDelete(temp)}>X</button>

        </div>
      )}
    </div>
  )
}
