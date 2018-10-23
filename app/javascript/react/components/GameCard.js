import React from 'react'

const GameCard = props => {
  let gameIndexHTML = props.games.map(game => {
    return(
      <div key={game.id} className="game-card grid-x grid-margin-x">
        <div className="cell small-12">
          <img className="game-promo-image-index" src={game.promo_image_url} />
        </div>
        <div className="cell small-12">
          <h3><a href={`/games/${game.id}`}>{game.name}</a></h3>
          <p>{game.name} {game.description}</p>
        </div>
      </div>
    )
  })
  return(
    <div>
      {gameIndexHTML}
    </div>
  )
}

export default GameCard
