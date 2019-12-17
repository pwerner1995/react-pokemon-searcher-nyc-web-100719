import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

	state = {
		display: [...this.props.pokeData]
	}
	
	displayPoke = (e) =>{
		console.log(this.props.pokeData)
		let search = this.props.pokeData.filter(pokemon =>{
			return pokemon.name.includes(e.target.value)
		})
		console.log(search)
		if(search.length > 0){
			this.setState({
				display: [...search]
			})
		}else{
			this.setState({
				display: [...this.props.pokeData]
			})
		}
	}

	render() {
		console.log(this.props.pokeData)
		return (
			<Container>
			<h1>Pokemon Searcher</h1>
			<br />
			<PokemonForm postPokemon={this.props.postPokemon}/>
			<br />
			<Search search={this.displayPoke} />
			<br />
			<PokemonCollection pokeData={this.state.display.length > 0 ? this.state.display : this.props.pokeData}/>
			</Container>
		)
	}
}

export default PokemonPage
