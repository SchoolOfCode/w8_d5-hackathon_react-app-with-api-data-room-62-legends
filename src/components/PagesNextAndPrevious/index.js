import React from "react";

function PagesNextAndPrevious({ clickNextPage, clickPreviousPage }) {
  return (
    <div>
      <button onClick={clickPreviousPage}>Previous</button>
      <button onClick={clickNextPage}>Next</button>
    </div>
  );
}

export default PagesNextAndPrevious;
