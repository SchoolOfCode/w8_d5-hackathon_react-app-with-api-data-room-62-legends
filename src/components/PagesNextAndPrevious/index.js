import React from "react";
//creating previous and next buttons. Handing clickNextPage and clickPreviousPage as props to the App (where will write the functions)
function PagesNextAndPrevious({ clickNextPage, clickPreviousPage }) {
  return (
    <div>
      <button onClick={clickPreviousPage}>Previous</button>
      <button onClick={clickNextPage}>Next</button>
    </div>
  );
}

export default PagesNextAndPrevious;
