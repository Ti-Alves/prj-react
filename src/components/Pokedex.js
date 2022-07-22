import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  const { pokemonList, loading, page, totalPages, setPage } = props;

  const onPrevClickHandler = () => {
    if (page > 0) {
      setPage(page - 1)
    }
  };

  const onNextClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1)
    }
  };

  return (
    <>
      <div className="header-pokedex">
        <h1>Pokedex</h1>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onPrevClick={onPrevClickHandler}
          onNextClick={onNextClickHandler}
        />
      </div>
      {loading ? (
        <div>Carregando, aguarde...</div>
      ) : (
        <>
          {/* <h1>Carregado!</h1> */}
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
