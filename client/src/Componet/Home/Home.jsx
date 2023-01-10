import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getDogs, getTemperaments, orderName, getDogsByTemperament, filterCreated, ChangePage } from '../../Redux/action';
import { Link } from "react-router-dom"
import CardDog from '../CardDog/CardDog';
import SearchBar from '../SearchBar/SearchBar';
import { Paginated } from "../Paginated/Paginated";
import CreateDogs from '../CreateDogs/CreateDogs';
import "../Home/Home.css"





export default function Home() {

    const dispatch = useDispatch()
    const allDogs = useSelector(state => state.dogs)
    const temperaments = useSelector(state => state.temperaments)
    const currentPage = useSelector(state => state.currentPage)
    const [dogPerPage, setDogPage] = useState(8);
    const indexOfLastDogs = currentPage * dogPerPage
    const indexOfFirstDogs = indexOfLastDogs - dogPerPage
    const currentDogs = allDogs.slice(indexOfFirstDogs, indexOfLastDogs)



    useEffect(() => {
        dispatch(getDogs())
        dispatch(getTemperaments())
    }, [])

    // function handleClick(evento) {
    //     evento.preventDefault();
    //     dispatch(getDogs());
    // }

    function handleClickOrderName(evento) {
        evento.preventDefault();
        dispatch(orderName(evento.target.value));
    }

    

    function handleFilteredByTemperaments(evento) {
        evento.preventDefault();
        dispatch(getDogsByTemperament(evento.target.value));
        dispatch(ChangePage(1))

    }

    // const handleClickFilterCreated = (e) => {
    //     e.preventDefault();
    //     dispatch(filterCreated(e.target.value));
    //     dispatch(ChangePage(1))
    // };




    return (
        <div>


            <div >
                <Link to="/dogs" className='buttonCrear'> Create dogs</Link>
                <button className='buttonRechage' onClick={() => window.location.reload()}>recharge</button>
            </div>
            <SearchBar />
            <div className='filtros'>
                <select onChange={(evento) => { handleClickOrderName(evento) }}>
                    <option value="asc">A - Z</option>
                    <option value="des">Z - A</option>
                </select>
              

                <select onChange={(ele) => handleFilteredByTemperaments(ele)}>

                    {temperaments?.map((elemento) => <option value={elemento.name} >{elemento.name}</option>)}

                </select>

                <div>

                </div>
                <div className='Cards'>


                    {currentDogs?.map((dog) => {

                        return (
                            <div key={dog.id}>
                                <CardDog
                                    id={dog.id}
                                    name={dog.name}
                                    image={dog.image}
                                    temperament={dog.temperament}
                                    Temperaments={dog.Temperaments}
                                    min_weight={dog.min_weight}
                                    max_weight={dog.max_weight}
                                />


                            </div>


                        )
                    })}
                </div>
                <Paginated
                    allDogs={allDogs.length}
                    dogPerPage={dogPerPage}
                    currentPage={currentPage}

                />
            </div>
        </div>

    )
}
