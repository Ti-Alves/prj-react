import React, { useState } from "react";
import { searchPokemon } from "../PokeAPI";

const Searchbar = (props) => {
  const [search, setSearch] = useState("ditto");
  const { onSearch } = props;

  const onChangeHandler = (e) => {
    setSearch(e.target.value);

    if(e.target.value.length === 0) {
      onSearch(undefined);
    }

  };

  const onButtonClickHandler = () => {
    onSearch(search);
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
          Buscar
        </button>
        
      </div>
    </>
  );
};

export default Searchbar;
