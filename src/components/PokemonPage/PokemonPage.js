import React, { useState, useEffect } from "react";
import PokemonContainer from "../PokemonContainer/PokemonContainer";
import { fetchPokemonsUrls, fetchPokemon } from "../helper";

const PokemonPage = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(async () => {
    const pokemonsUrls = await fetchPokemonsUrls();
    const allPokemons = await Promise.all(fetchPokemon(pokemonsUrls));
    setPokemons(allPokemons);
  }, []);

  return <PokemonContainer pokemons={pokemons} />;
};

export default PokemonPage;
