import React from "react";

const FavoriteContext = React.createContext({
    favPokemon: [],
    updateFavPokemon: (id) => null
});

export const FavoriteProvider = FavoriteContext.Provider

export default FavoriteContext;