import React, { useState, useEffect } from "react";

const fetchPokemonsUrls = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const data = await response.json();
  return data.results;
};

const fetchPokemon = (pokemonUrls) => {
  return pokemonUrls.map(async (item) => {
    const response = await fetch(item.url);
    const pokemonData = await response.json();
    return pokemonData;
  });
};

const PokemonPage = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(async () => {
    const pokemonsUrls = await fetchPokemonsUrls();
    const allPokemons = await Promise.all(fetchPokemon(pokemonsUrls));
    setPokemons(allPokemons);
  }, []);

  console.log(pokemons);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {pokemons.map((item, index) => {
        return (
          <div
            key={index}
            style={{ border: "1px solid black", width: "200px", margin: "5px" }}
          >
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
      })}
    </div>
  );
};

export default PokemonPage;
