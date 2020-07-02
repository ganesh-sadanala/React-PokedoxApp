import React from "react";
import "./pokedex.css";
import { PokeList } from "./../pokelist/Pokelist";

export const Pokedex = ({ pokemons }) => {
  return (
    <div className="pokedex-container">
      <div className="pokelist-container">
        <PokeList pokemons={pokemons} />
      </div>
      <div className="pokesearchresult-container"></div>
    </div>
  );
};
