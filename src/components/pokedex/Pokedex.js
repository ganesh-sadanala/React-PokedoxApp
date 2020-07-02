import React from "react";
import "./pokedex.css";

export const Pokedex = (props) => {
  return (
    <div className="pokedex-container">
      <div className="pokelist-container"></div>
      <div className="pokesearchresult-container"></div>
    </div>
  );
};
