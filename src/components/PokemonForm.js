import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    // console.log(this.state)
    let pokemon = {
      name: this.state.name,
      hp: this.state.hp,
      frontUrl: this.state.frontUrl,
      backUrl: this.state.backUrl,
    }
    this.props.postPokemon(pokemon)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange} value = {this.state.name}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange} value = {this.state.hp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" onChange={this.handleChange} name="frontUrl" value = {this.state.frontUrl}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" onChange={this.handleChange} name="backUrl" value = {this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
