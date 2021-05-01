import React, { useState, useEffect } from "react";
import PokemonContainer from "../PokemonContainer/PokemonContainer";
import { fetchPokemonsUrls, fetchPokemon } from "../helper";

const PokemonPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  async function fetchData() {
    try {
      const pokemonsData = await fetchPokemonsUrls();
      const pokemonsUrls = pokemonsData.map((pokemon) => pokemon.url);
      const allPokemons = await Promise.all(fetchPokemon(pokemonsUrls));
      setPokemons(allPokemons);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function renderPage() {
    if (isLoading) {
      return <div>Loading data...</div>;
    }

    return error ? (
      <div>{error.message}</div>
    ) : (
      <PokemonContainer pokemons={pokemons} />
    );
  }

  return renderPage();
};

export default PokemonPage;
