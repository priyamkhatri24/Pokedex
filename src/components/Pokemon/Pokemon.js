import * as classes from "./Pokemon.module.css";
import { useEffect, useState } from "react";
const Pokemon = (props) => {
  const { url } = props;
  const [image, setImage] = useState(null);
  useEffect(() => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => {
        setImage(data.sprites.front_default);
      })
      .catch((err) => {});
  }, [url]);
  return (
    <div className={classes.individualPokemon}>
      <img className={classes.pokeImage} src={image} alt={"pokemon"}>
        {/* {image ? "loading..." : null} */}
      </img>
      <h4 className={classes.pokemonName}>{props.name}</h4>
    </div>
  );
};
export default Pokemon;
