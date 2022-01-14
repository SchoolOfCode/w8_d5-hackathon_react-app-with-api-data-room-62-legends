import React from "react";

function ListOfPokemon({ pokemon }) {
  return (
    <div>
      {pokemon.map((p) => (
        <div key={p}>{p}</div>
      ))}
    </div>
  );
}

export default ListOfPokemon;
