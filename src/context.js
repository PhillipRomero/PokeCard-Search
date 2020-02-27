import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type){
    case 'SEARCH_CARDS':
      return {
        ...state,
        cards: action.payload
      };
      default:
        return state;
  }
}

export  class Provider extends Component {
  state = {
    cards: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  async componentDidMount() {
      try {
          const res = await fetch('https://api.pokemontcg.io/v1/cards?supertype=pokemon&pageSize=20');
          const pokeCards = await res.json();
          this.setState({cards: pokeCards.cards});
          // console.log(pokeCards)
      } 
      catch (err) {
          console.error(err);
      }
  };
  

  render() {
    return (
      <Context.Provider value={this.state}>
      {this.props.children}

      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;