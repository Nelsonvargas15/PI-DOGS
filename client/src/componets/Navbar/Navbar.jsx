import React from 'react'
import Searchbar from '../Searchbar/Searchbar'

export default function Navbar(props) {
   
  return (
    <div>
     <Searchbar onSearch = {props.onSearch} />
       
    </div>
  )
}
