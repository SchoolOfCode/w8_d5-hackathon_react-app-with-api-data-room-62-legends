import React from "react";

function ListOfPokemon({ pokemon }) {
  return (
    <div>
      {pokemon.map((p) => (
        <div key={p}>
          <ol>{p}</ol>
        </div>
      ))}
    </div>
  );
}

export default ListOfPokemon;

//The outcome/result from this entire function will be a list of pokemon
//  <div key={p}>  This uses each pokemon name as its unique id.
