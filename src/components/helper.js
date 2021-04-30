export const fetchPokemonsUrls = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const data = await response.json();
  return data.results;
};

export const fetchPokemon = (pokemonUrls) => {
  return pokemonUrls.map(async (url) => {
    const response = await fetch(url);
    const pokemonData = await response.json();
    return pokemonData;
  });
};
