import React from "react";
import "./pokelist.css";
import { Pokecard } from "../pokecard/Pokecard";
import { Searchbox } from "../searchbox/Searchbox";

export const PokeList = ({ pokemons, handlePokeSearch, handleClick }) => {
  return (
    <div>
      <Searchbox handlePokeSearch={handlePokeSearch} />
      <div className="pokelist">
        {pokemons.map((pokemon) => {
          let sprite = null;
          try {
            sprite = JSON.parse(pokemon.sprites);
            sprite = sprite.normal;
          } catch (error) {}
          return pokemon.name ? (
            <Pokecard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              sprite={sprite}
              handleClick={handleClick}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};
