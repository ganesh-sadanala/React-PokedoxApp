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
  componentWillMount() {}
  componentDidMount() {
    this.setState({ pokemons: pokemonData });
  }
  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <Pokedex />
      </div>
    );
  }
}
export default App;
