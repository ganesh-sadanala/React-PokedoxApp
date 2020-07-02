import React from "react";
import "./pokecard.css";

export const Pokecard = ({ key, id, name, sprite }) => {
  return (
    <div className="pokecard">
      {id <= 200 ? (
        <img className="pokemon-sprite" alt="pokemon" src={sprite} />
      ) : null}
      <p>{name}</p>
    </div>
  );
};
