import React from 'react'
import "../Paginated/Paginated.css"

export default function Paginated({dogPerPage , allDogs , paginado} ) {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(allDogs / dogPerPage); i++) {
        // lo que hara esta logica, es darnos el numero de paginas que tendremos en nuestro array
        pageNumber.push(i);
      }


  return (
    <nav>
     <ul className="paginado">
        {pageNumber?.map((number) => {
          return (
            <li className="number" key={number}>
              <button onClick={() => paginado(number)}>{number}</button>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}
