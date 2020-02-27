import React, { Component } from 'react'
import { Consumer } from '../../context'


class Search extends Component {
  state = {
    pokemonName: ``
  };

  findCard = async (dispatch, e) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://api.pokemontcg.io/v1/cards?name=${this.state.pokemonName}&supertype=pokemon&pageSize=20`);
      const pokeCards = await res.json();
      // this.setState({cards: pokeCards.cards});
      dispatch({
        type: 'SEARCH_CARDS',
        payload: pokeCards.cards
      });

      this.setState({pokemonName:''});
  } 
  catch (err) {
      console.error(err);
  }


}

  onChange = e => {
    this.setState({ pokemonName: e.target.value })
  }

  render() {
    return (
      <Consumer>
        {value => {
          const  { dispatch } = value;
          return (
            <div>
              <h1 className='searchBox text-center'>Search for a Pokecard</h1>
              <form onSubmit={this.findCard.bind(this, dispatch)}>
                <div className='searchWrapper'>
                  <input className='searchBar' type='text' 
                  placeholder='Enter a Pokemon name to get card info...' 
                  name='pokemonName'
                    value={this.state.pokemonName}
                    onChange={this.onChange}
                  />
                </div>
                <button className='btn-2' type= 'submit'>Get PokeCard</button>
              </form>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Search