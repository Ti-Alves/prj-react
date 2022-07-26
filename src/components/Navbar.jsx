import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Navbar = () => {

  const { favPokemon } = useContext(FavoriteContext)

  const logoScr =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <>
      <nav className="nav">
        <div>
          <img src={logoScr} alt="PokeAPI" className="nav-img" />
        </div>
        <div>
          {favPokemon.length} ❤️
        </div>
      </nav>
    </>
  );
};

export default Navbar;
