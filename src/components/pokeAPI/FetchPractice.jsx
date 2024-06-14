import { useState } from "react";

const FetchPractice = () => {
  const [search, setSearch] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  const fetchPokemonbyName = async (searchName) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchName}`
      );
      if (!response.ok) {
        throw new Error("Could not fetch the pokemon data through PokeAPI.");
      }

      const data = await response.json();
      console.log(data);
      setPokemonData(data);
    } catch (error) {
      console.error("Could not fetch the pokemon data through PokeAPI.", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
    fetchPokemonbyName(search);
  };

  return (
    <div>
      <h1>FetchPokemon</h1>
      <h2>Your Searching Pokemon Name: {search}</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button type="submit">Search</button>
      </form>
      {pokemonData && (
        <div>
          <h3>Pokemon Name: {pokemonData.name}</h3>
          <h3>Pokemon ID: {pokemonData.id}</h3>
          <img src={pokemonData.sprites.front_default} alt="" />
        </div>
      )}
    </div>
  );
};

export default FetchPractice;
