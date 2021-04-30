import React, { useState, useEffect } from "react";
import PokemonContainer from "../PokemonContainer/PokemonContainer";
import { fetchPokemonsUrls, fetchPokemon } from "../helper";

const PokemonPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    const pokemonsData = await fetchPokemonsUrls();
    const pokemonsUrls = pokemonsData.map((pokemon) => pokemon.url);
    const allPokemons = await Promise.all(fetchPokemon(pokemonsUrls));
    setPokemons(allPokemons);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <div>Loading data...</div>
  ) : (
    <PokemonContainer pokemons={pokemons} />
  );
};

export default PokemonPage;
