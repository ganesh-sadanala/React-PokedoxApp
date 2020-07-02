import React from "react";
import "./pokelist.css";
import { Pokecard } from "../pokecard/Pokecard";

export const PokeList = ({ pokemons }) => {
  return (
    <div className="pokelist">
      {pokemons.map((pokemon) => {
        let sprite = null;
        try {
          sprite = JSON.parse(pokemon.sprites);
          sprite = sprite.normal;
        } catch (error) {}
        return pokemon.name ? (
          <Pokecard name={pokemon.name} sprite={sprite} />
        ) : null;
      })}
    </div>
  );
};
