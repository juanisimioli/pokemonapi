import style from "./pokemonCard.module.scss";

const PokemonCard = ({ item }) => {
  return (
    <div className={style.container}>
      <div className={style.name}>{item.name}</div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
      />
      <div>
        <div className={style.statsTitle}>STATS</div>
        {item.stats.map((stat, index) => (
          <div key={`stat_${index}`}>
            <span className={style.statName}>{stat.stat.name}</span> :{" "}
            {stat.base_stat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
