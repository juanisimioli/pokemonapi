import React, { useState, useEffect } from "react";
import PokemonContainer from "../PokemonContainer/PokemonContainer";
import { fetchPokemonsUrls, fetchPokemon } from "../helper";

const PokemonPage = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const pokemonsData = await fetchPokemonsUrls();
      const pokemonsUrls = pokemonsData.map((pokemon) => pokemon.url);
      const allPokemons = await Promise.all(fetchPokemon(pokemonsUrls));
      setPokemons(allPokemons);
    }
    fetchData();
  }, []);

  return <PokemonContainer pokemons={pokemons} />;
};

export default PokemonPage;
