import { useState } from "react";

const FetchPractice = () => {
  const [searchName, setSearchName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  const fetchPokeData = async (name) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

      if (!response.ok) {
        setSearchName(null);
        throw new Error("Could not fetch the data.");
      }

      const data = await response.json();
      setPokemonData(data);
      console.log(pokemonData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchPokeData(searchName);
    console.log(searchName);
    console.log("Fetching Pokemon data success");
  };

  return (
    <div>
      <form onSubmit={(e) => handleSearch(e)}>
        <input
          type="text"
          value={searchName}
          onChange={(e) => {
            setSearchName(e.target.value.toLowerCase());
          }}
        />
        <button type="submit">Search</button>
      </form>
      {pokemonData && (
        <div>
          <h3>Name: {pokemonData.name}</h3>
          <h3>ID: {pokemonData.id}</h3>
          <img src={pokemonData.sprites.front_default} alt="" />
        </div>
      )}
    </div>
  );
};

export default FetchPractice;
