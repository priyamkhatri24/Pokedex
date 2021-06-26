import Pokemon from "../Pokemon/Pokemon";
import * as classes from "./Pokemons.module.css";
const pokemons = (props) => {
  const pokemons = [...props.pokemons];
  const pokemonList = pokemons.map((ele) => {
    return (
      <Pokemon name={ele.name.toUpperCase()} key={ele.name} url={ele.url} />
    );
  });
  return <div className={classes.pokemons}>{pokemonList}</div>;
};

export default pokemons;
