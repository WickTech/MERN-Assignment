import React from 'react';
import Loder from '../Loder/Loder';

function Pagination({ page, handlePreviousClick, handleNextClick, itemsPerPage, totalItems }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const isLastPage = page === totalPages;
       const itemsPer=totalItems>=10?10:totalItems
  return (
    <>
    {<div className="btn-next">
      <div><h3>Page No :{page}</h3></div>
      <button
        className={page===1?"button-prev":"button-next"} 
        type="button"
        onClick={handlePreviousClick}
        disabled={page === 1}
      >
        Prev
      </button>
      <button
        className={isLastPage?"button-prev":"button-next"}  
        type="button"
        onClick={handleNextClick}
        disabled={isLastPage}
      >
        Next
      </button>
      <button
        type='button'
        style={{color:"white", background:"white",width:"1px", height:"1px", border:"0px solid white" }}
      >
        Next
      </button>
      
      <div><h3>Per page:{itemsPer} </h3></div>
    </div>}
    </>
  );
}

export default Pagination;
