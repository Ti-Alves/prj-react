import React from "react";

const Navbar = () => {
  const logoScr =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <>
      <nav className="nav">
        <div>
          <img src={logoScr} alt="PokeAPI" className="nav-img" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
