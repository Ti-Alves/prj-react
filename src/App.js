import React, { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";

import { getAllPokemon, getPokemonData } from "./PokeAPI";

function App() {

  const [loading, setLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = async () => {
    try{
      setLoading(true);
      const data = await getAllPokemon();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      });

      const results = Promise.all(promises);

      setPokemonList(results);
      setLoading(false);

    } catch (error){
      console.log("fetchPokemon error: ", error);
    }
  }

  useEffect(
    () => {
      console.log("carregou");
      fetchPokemon();
    }, []);

  return (
    <>
      <Navbar />
      <Searchbar />
      <Pokedex pokemonList={pokemonList.results} loading={loading}/>
      <div className="App"></div>
    </>
  );
}

export default App;
