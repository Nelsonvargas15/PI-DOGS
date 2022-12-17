import React from 'react'
 import Cards from '../Cards/Cards'
import { useState , useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from '../../Redux/action';

export default function Home() {
return (
    <div>
      <Cards/>
    </div>
  )
}
