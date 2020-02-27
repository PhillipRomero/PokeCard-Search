import React from 'react'
import {Link} from 'react-router-dom'

const Card = (props) => {
  const { card } = props;

  return (
    <Link className="card-link" to = {`/cards/${card.id}`} >
    <div className= 'card'>
            <h2>{card.name}</h2>
            <h3>Dex #: {card.nationalPokedexNumber}</h3>
            <p>Type: {card.types}</p>
            <img className='img' src={card.imageUrl} alt= {card}/>
    </div>
    </Link>
  )
}

export default Card