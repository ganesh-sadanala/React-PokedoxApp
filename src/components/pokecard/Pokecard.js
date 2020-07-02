import React from "react";
import "./pokecard.css";

export const Pokecard = ({ key, id, name, sprite, handleClick }) => {
  return (
    <div
      className="pokecard"
      onClick={() => {
        handleClick(name);
      }}
    >
      {id <= 200 ? (
        <img className="pokemon-sprite" alt="pokemon" src={sprite} />
      ) : null}
      <p>{name}</p>
    </div>
  );
};
