import React, { useState } from "react";

function FetchApi() {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonName, setPokemonName] = useState("pikachu");
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  const onPokemonNameChange = (event) => {
    setPokemonName(event.target.value);
  };
  const onSearchFormSubmit = async (event) => {
    // event.preventDefault();

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Bad API request");
      }
      console.log(pokemonName);
      const json = await response.json();
      console.log(json);
      console.log();
      setPokemonData(json);
    } catch (error) {
      console.error("FAIL");
    }
  };
  //   onSearchFormSubmit();

  return (
    <div>
      {pokemonData && (
        <img
          width="200"
          src={pokemonData.sprites.front_shiny}
          alt="pokemon"
        ></img>
      )}
      {/* <form onSubmit={onSearchFormSubmit}>
        <input
          type="text"
          onChange={onPokemonNameChange}
          value={pokemonName}
        ></input>
        <input type="submit" value="Search"></input>
      </form> */}
    </div>
  );
}

export default FetchApi;
