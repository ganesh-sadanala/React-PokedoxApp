import React from "react";
import "./poke-search-result.css";

export const PokeSearchResult = ({ showResult, pokemon }) => {
  let sprite = null;
  if (pokemon) {
    sprite = JSON.parse(pokemon.sprites);
    sprite = sprite.animated;
  }
  return (
    <div className="pokecard">
      {showResult ? (
        <div>
          <img className="pokemon-sprite" alt="pokemon" src={sprite} />
          <p>Name: {pokemon.name}</p>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </div>
      ) : (
        <p>Welcome to the Pokedex</p>
      )}
    </div>
  );
};
