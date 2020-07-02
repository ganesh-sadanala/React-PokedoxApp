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
  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <Pokedex pokemons={this.state.pokemons} />
      </div>
    );
  }
}
export default App;
