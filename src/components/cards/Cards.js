import React, { Component } from 'react'
import { Consumer } from '../../context'
import Card from './Card'

class Cards extends Component {
  render() {
    return (
      <Consumer>
      {value => {
        const { cards } = value;

        if(cards === undefined || cards.length === 0) {
          return <span><h1>Loading...</h1></span>;
        }

        else {
          return (
          <div className ='cardList' >
              {cards.map(item => (
                <Card key = {item.id} card = {item}/>
              ))}

          </div>
        );
        }
      }}
      </Consumer>
    )
  }
}

export default Cards