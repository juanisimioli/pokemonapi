import PokemoCard from "../PokemonCard/PokemonCard";

const PokemonContainer = ({ pokemons }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {pokemons.map((item, index) => {
        return <PokemoCard item={item} key={`card_${index}`} />;
      })}
    </div>
  );
};

export default PokemonContainer;
