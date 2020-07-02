import React from "react";
import "./pokedex.css";
import { PokeList } from "./../pokelist/Pokelist";
import { PokeSearchResult } from "../pokeSearchResult/PokeSearchResult";

export const Pokedex = ({
  pokemons,
  handlePokeSearch,
  handleClick,
  selectedPokemon,
}) => {
  return (
    <div className="pokedex-container">
      <div className="pokelist-container">
        <PokeList
          pokemons={pokemons}
          handlePokeSearch={handlePokeSearch}
          handleClick={handleClick}
        />
      </div>
      <div className="pokesearchresult-container">
        {selectedPokemon ? (
          <PokeSearchResult showResult={true} name={selectedPokemon.name} />
        ) : (
          <PokeSearchResult showResult={false} />
        )}
      </div>
    </div>
  );
};
