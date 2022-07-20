import React from "react";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  const { pokemonList, loading } = props;
  return (
    <>
      <div className="header-pokedex">
        <h1>Pokedex</h1>
        <div>Paginação: </div>
      </div>
      {loading ? (
        <div>Carregando, aguarde...</div>
      ) : (
        <>
        <h1>Carregado!</h1>
          <div className="pokedex-grid">
            {pokemonList &&
              pokemonList.map((pokemon, index) => {
                return <Pokemon key={index} pokemon={pokemon} />;
              })}
          </div>
        </>
      )}
    </>
  );
};

export default Pokedex;
