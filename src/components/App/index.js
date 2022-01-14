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

  return <div className="App">null</div>;
}

export default App;
