import PokemonCard from "../PokemonCard/PokemonCard";
import style from "./pokemonContainer.module.scss";

const PokemonContainer = ({ pokemons }) => {
  return (
    <div className={style.container}>
      {pokemons.map((item, index) => {
        return <PokemonCard item={item} key={`card_${index}`} />;
      })}
    </div>
  );
};

export default PokemonContainer;
