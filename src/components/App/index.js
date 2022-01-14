import { useState, useEffect } from "react";
import ListOfPokemon from "../ListOfPokemon";
import PagesNextAndPrevious from "../PagesNextAndPrevious";
import Heading from "../Heading";
// import "./App.css";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);
  //setting state for current url
  const [current, setCurrent] = useState("https://pokeapi.co/api/v2/pokemon");
  //setting states for next and previous pages
  const [next, setNext] = useState();
  const [previous, setPrevious] = useState();

  //useEffect is being used as we are creating side effects by fetcing data from an API. As such, we want to set it up so that when something changes (e.g current URL) then respond in a particular way (e.g change current to next/previous).
  //We are also using a specific library (axios) to fetch the data - we are telling axios to 'get' the data from pokeapi & to display from it certaiin things (p.name).
  //Using setPrevious & setNext (the useStates) to display the next & previous URL data fetched by axios (only the name of each pokemon).
  //Need both useState & useEffect together.
  useEffect(() => {
    axios.get(current).then(
      (res) => {
        setNext(res.data.next);
        setPrevious(res.data.previous);
        setPokemon(res.data.results.map((p) => p.name));
      },
      [current]
    );
  });

  //Created the functions to be handed to the component (Pages...) to be used as its props
  //This function takes the current page & updates its URL to be that of the previous page.
  function clickPreviousPage() {
    setCurrent(previous);
  }
  //This function takes the current page URL & updates it value to be that of the next page.
  function clickNextPage() {
    setCurrent(next);
  }
  //Here is (inside the return )what gets rendered on the browser
  return (
    <div>
      <Heading title="Pokemon for every mood!! ^-^" />
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
