import React from "react";
import "./pokedex.css";
import { PokeList } from "./../pokelist/Pokelist";

export const Pokedex = ({ pokemons, handlePokeSearch }) => {
  return (
    <div className="pokedex-container">
      <div className="pokelist-container">
        <PokeList pokemons={pokemons} handlePokeSearch={handlePokeSearch} />
      </div>
      <div className="pokesearchresult-container"></div>
    </div>
  );
};
