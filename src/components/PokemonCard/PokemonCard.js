import style from "./pokemonCard.module.scss";

const PokemonCard = ({ item }) => {
  return (
    <div className={style.container}>
      <div>{item.name}</div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
      />
      <div>
        STATS
        {item.stats.map((stat, index) => (
          <div key={`stat_${index}`}>
            {stat.stat.name} : {stat.base_stat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
