import { useState, useEffect } from "react";
import ListOfPokemon from "../ListOfPokemon";
import PagesNextAndPrevious from "../PagesNextAndPrevious";
import "./App.css";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState();
  //setting state for current url
  const [current, setCurrent] = useState("https://pokeapi.co/api/v2/pokemon");
  //setting states for next and previous pages
  const [next, setNext] = useState();
  const [previous, setPrevious] = useState();

  function clickPreviousPage() {
    setPrevious(previous);
  }

  function clickNextPage() {
    setNext(next);
  }

  return (
    <div className="App">
      <ListOfPokemon pokemon={pokemon} />
      <PagesNextAndPrevious
        clickNextPage={clickNextPage}
        clickPreviousPage={clickPreviousPage}
      />
    </div>
  );
}

export default App;

// PagesNextAndPrevious({ clickNextPage, clickPreviousPage
