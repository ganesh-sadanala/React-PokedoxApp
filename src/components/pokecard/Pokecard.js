import React from "react";
import "./pokecard.css";

export const Pokecard = ({ name, sprite }) => {
  return (
    <div className="pokecard">
      <img className="pokemon-sprite" alt="pokemon" src={sprite} />
      <p>{name}</p>
    </div>
  );
};
