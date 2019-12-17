import React, { Component } from 'react'
import PokemonIndex from './components/PokemonIndex'
import './App.css'

class App extends Component{ 

  state = {
		pokeData: []
	}

	componentDidMount(){
		fetch("http://localhost:3000/pokemon")
		.then(resp => resp.json())
		.then(data => this.setState({
			pokeData: [...data]
		}))
  }

  postPokemon = (pokemon) =>{
    console.log(pokemon)
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify({
        name: pokemon.name,
        stats:[{
          value: pokemon.hp,
          name: "hp"}],
          sprites:{
            front: pokemon.frontUrl,
            back: pokemon.backUrl
          }
      })
    })
    .then(resp => {return resp.json()})
    .then(data => this.setState({
      pokeData: [...this.state.pokeData, data]
    }))
  }

  render(){
    return(
        <div className="App">
          <PokemonIndex postPokemon={this.postPokemon} pokeData={this.state.pokeData}/>
        </div>
    )
  }
  
}

export default App
