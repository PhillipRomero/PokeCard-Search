import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class CardInfo extends Component {
  state = {
    cardinfo: {}
  };

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.pokemontcg.io/v1/cards/${this.props.match.params.id}`);
      const pokeCards = await res.json();
      this.setState({cardinfo: pokeCards});
      // console.log(pokeCards)
  } 
  catch (err) {
      console.error(err);
  }
  }

  render() {
    const {cardinfo} = this.state;
    if(
      cardinfo === undefined || Object.keys(cardinfo).length === 0) {
        return <span><h1>Loading...</h1></span>;
    }

    else{
      return (
        <React.Fragment>
        <Link className ='btn' to= "/">Go Back</Link>
        <div className ='card-info'>
          <h2>{cardinfo.card.name}</h2>
          <h3>Pokedex Number: {cardinfo.card.nationalPokedexNumber}</h3>
          <p>Evolution: {cardinfo.card.subtype}</p>
          <p>Type: {cardinfo.card.types}</p>
          <p>Card Artist: {cardinfo.card.artist}</p>
          <p>Series: {cardinfo.card.series}</p>
          <img src={cardinfo.card.imageUrl} alt= {'CardArt'}/>
        </div>
      </React.Fragment>

      )
    }
  }
}

export default CardInfo