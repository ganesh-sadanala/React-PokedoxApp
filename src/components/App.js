import React from "react";
import "./App.css";
import { pokemonData } from "./../data/pokemonData";
import { Pokedex } from "./pokedex/Pokedex";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      pokemons: [],
    };
  }
  componentDidMount() {
    this.setState({ pokemons: pokemonData });
  }

  handlePokeSearch = (searchValue) => {
    this.setState({ searchField: searchValue });
  };
  render() {
    const { pokemons, searchField } = this.state;
    let searchedPokemons = pokemons.filter((pokemon) => {
      return pokemon.name
        ? pokemon.name.toLowerCase().includes(searchField.toLowerCase())
        : false;
    });
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <Pokedex
          pokemons={searchedPokemons}
          handlePokeSearch={this.handlePokeSearch}
        />
      </div>
    );
  }
}
export default App;
