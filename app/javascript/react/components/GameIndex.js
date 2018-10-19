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
        <div key={game.id}>
          <li>{game.name}</li>
          <p>{game.description}</p>
          <img src={game.promo_image_url}></img>
        </div>
      )
    })
    return (
      <div>
        <h1>Games</h1>
        <h3>{gameIndexHTML}</h3>
      </div>
    )
  }
}
export default GameIndex;
