import React, { Component } from 'react';

class GameIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { games: [] };
  }

  componentDidMount() {
    fetch('/api/v1/games.json')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ games: body });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let gameIndexHTML = this.state.games.map(game => {
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
    return (
      <div className="cell small-22 small-offset-1 cell large-20 large-offset-2">
        {gameIndexHTML}
      </div>
    )
  }
}
export default GameIndex;
