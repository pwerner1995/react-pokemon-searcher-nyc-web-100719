import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  state = {
    isClicked: false
  }

  handleClick = () =>{
    console.log(this.state.isClicked)
    this.setState({
      isClicked: !this.state.isClicked
    })

  }
  
  render() {
    const { name, stats, sprites} = this.props.pokemon
    const url = this.state.isClicked ? sprites.back : sprites.front
    return (
      <Card>
        <div onClick = {this.handleClick}>
          <div className="image">
            <img src={url} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats[stats.length-1].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
