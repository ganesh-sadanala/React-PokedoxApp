import React from "react";
import "./poke-search-result.css";

export const PokeSearchResult = ({ showResult, name }) => {
  return (
    <div className="pokecard">
      {showResult ? (
        <div>
          <p>{name}</p>
        </div>
      ) : (
        <div>
          <p>Welcome to the Pokedex</p>
        </div>
      )}
    </div>
  );
};
