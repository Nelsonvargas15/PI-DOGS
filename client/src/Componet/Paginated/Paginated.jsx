import React from "react";
import * as actions from "../../Redux/action";
import { useSelector, useDispatch } from "react-redux";
import "./pagination.modules.css"


  export const Paginated = (props) => {
  const {allDogs, dogPerPage, currentPage } = props;
  const dispatch = useDispatch();

  
  let pages = [];
  for (let i = 1; i <= Math.ceil(allDogs / dogPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {currentPage !== 1 ? (
        <>
          <button
            onClick={() => dispatch(actions.ChangePage(currentPage - 1))}
          >
            {"<"}
          </button>
          <button
            onClick={() => dispatch(actions.ChangePage(currentPage - 1))}
          >
            {currentPage - 1}
          </button>
        </>
      ) : (
        <>
          <button disable>{"<"}</button>
          
        </>
      )}

      <button className="active">{currentPage}</button>

      {currentPage !== pages[pages.length - 1] ? (
        <>
          <button
            onClick={() => dispatch(actions.ChangePage(currentPage + 1))}
          >
            {currentPage + 1}
          </button>
          <button
            onClick={() => dispatch(actions.ChangePage(currentPage + 1))}
          >
            {">"}
          </button>
        </>
      ) : (
        <>
          
          <button disabled>{">"}</button>
        </>
      )}
    </div>
  );
};