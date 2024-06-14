import { useState } from "react";

const FetchPokemon = () => {
  const [searchName, setSearchName] = useState("");
  const [pokeData, setPokeData] = useState(null);

  const fetchPokemonAPI = async (name) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!response.ok) {
        setPokeData(null);
        throw new Error("Could not fetch data from PokeAPI");
      }
      const data = await response.json();
      setPokeData(data);
      console.log(pokeData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchPokemonAPI(searchName);
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
      {pokeData && (
        <div>
          <h3>Name: {pokeData.name}</h3>
          <h3>ID: {pokeData.id}</h3>
          <img src={pokeData.sprites.front_default} alt="" />
        </div>
      )}
    </div>
  );
};

export default FetchPokemon;
