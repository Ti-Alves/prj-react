import React, { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";

import Sidebar from "./components/Sidebar";

import { getAllPokemon, getPokemonData, searchPokemon } from "./PokeAPI";
import { FavoriteProvider } from "./contexts/favoritesContext";

const favoritesKey = "f";

function App() {
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [favorites, setFavorites] = useState([]);

  const itemsPerPage = 150;

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getAllPokemon(itemsPerPage, itemsPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);

      setPokemonList(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itemsPerPage));
    } catch (error) {
      console.log("fetchPokemon error: ", error);
    }
  };

  const loadFavPokemon = () => {
    const pokemonList =
      JSON.parse(window.localStorage.getItem(favoritesKey)) || [];
    setFavorites(pokemonList);
  };

  useEffect(() => {
    loadFavPokemon();
  }, []);

  useEffect(() => {
    fetchPokemon();
  }, [page]);

  const updateFavPokemon = (name) => {
    const updatedFavorites = [...favorites];
    const favIndex = favorites.indexOf(name);

    if (favIndex >= 0) {
      updatedFavorites.splice(favIndex, 1);
    } else {
      updatedFavorites.push(name);
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemon();
    }

    setLoading(true);
    setNotFound(false);

    const result = await searchPokemon(pokemon);

    if (!result) {
      setNotFound(true);
    } else {
      setPokemonList([result]);
      setPage(0);
      setTotalPages(1);
    }

    setLoading(false);
  };


  //  const sidebar = Sidebar();

  //   const handleSidebarIn = () => {
  //       sidebar.classList.add('open');
  //   }

  //   const handleSidebarOut = () => {
  //       sidebar.classList.remove('open');
  //   }

  //   const handleSidebarClick = () => {
  //       sidebar.classList.contains('open') ? handleSidebarOut() : handleSidebarIn();
  //   }

  return (
    <FavoriteProvider
      value={{
        favPokemon: favorites,
        updateFavPokemon: updateFavPokemon,
      }}
    >
      <>
        <div className="content">
          <Sidebar />

          <div className="main">
            <Navbar />
            <Searchbar onSearch={onSearchHandler} />
            {notFound ? (
              <div className="not-found-text">Pokémon não encontrado</div>
            ) : null}
            <Pokedex
              pokemonList={pokemonList}
              loading={loading}
              page={page}
              setPage={setPage}
              totalPages={totalPages}
            />
            <div className="App"></div>
          </div>
        </div>
      </>
    </FavoriteProvider>
  );
}

export default App;
