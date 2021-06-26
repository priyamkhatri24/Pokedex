import "./App.css";
import { useEffect, useState } from "react";
import Pokemons from "./components/Pokemons/Pokemons";
function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0")
      .then((res) => res.json())
      .then((data) => setPokemons(data.results))
      .catch((err) => console.log("error"));
  }, []);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then((res) => res.json())
      .then((data) => {
        // setImage(data.other['official-artwork']);
        // console.log(data.other);
      })
      .catch((err) => alert("something went wrong!!"));
  }, []);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokemons pokemons={pokemons} />
    </div>
  );
}

export default App;
