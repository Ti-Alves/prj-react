import React, { useState } from "react";
import { searchPokemon } from "../PokeAPI";

const Searchbar = (props) => {
  const [search, setSearch] = useState("ditto");
  const [pokemon, setPokemon] = useState();

  const onChangeHandler = (e) => {
    console.log("Pokémon: ", e.target.value);
    setSearch(e.target.value);
  };

  const onButtonClickHandler = () => {
    onSearchHandler(search);
  };

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    setPokemon(result);
  };

  return (
    <>
      <div className="searchbar-div">
        <input
          placeholder="Pesquise um pokémon..."
          onChange={onChangeHandler}
          type="text"
          className="searchbar-input"
        />
        <button className="searchbar-btn" onClick={onButtonClickHandler}>
          🔎
        </button>
        {pokemon ? 
        <div>
          <div>Nome: {pokemon.name}</div>
          <div>Peso: {pokemon.weight}</div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div> 
        : null}
      </div>
    </>
  );
};

export default Searchbar;
