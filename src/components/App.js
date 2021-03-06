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
      selectedPokemon: null,
    };
  }
  componentDidMount() {
    this.setState({ pokemons: pokemonData });
  }

  handlePokeSearch = (searchValue) => {
    this.setState({ searchField: searchValue });
  };

  handleClick = (name) => {
    const { pokemons } = this.state;
    let selectedPokemon = pokemons.find((pokemon) => pokemon.name === name);
    this.setState({ selectedPokemon: selectedPokemon });
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
          handleClick={this.handleClick}
          selectedPokemon={this.state.selectedPokemon}
        />
      </div>
    );
  }
}
export default App;
