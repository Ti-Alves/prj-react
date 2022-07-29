import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Pokemon = (props) => {
  const { favPokemon, updateFavPokemon } = useContext(FavoriteContext)
  const { pokemon } = props;
  const onHeartClick = () => {
    updateFavPokemon(pokemon.name);
  };
  const heart = favPokemon.includes(pokemon.name) ? "❤️" : "🖤";

  return (
    <div className="pokemon-card">
      <div className="pokemon-card-sprite">
        <img className="pokemon-sprite-img" src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="pokemon-card-body">
        <div className="pokemon-card-top">
          <h3 className="pokemon-card-name">{pokemon.name}</h3>
          <p className="pokemon-card-id">#{pokemon.id}</p>
        </div>
        <div className="pokemon-card-bot">
          <div className="pokemon-card-typing">
            {pokemon.types.map((type, index) => {
              return (
                <div key={index} className="pokemon-typing-text">
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <button className="pokemon-fav-btn" onClick={onHeartClick}>
            {heart}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
