import React, { Component } from 'react';
import SearchBar from './SearchBar'
import GameCard from './GameCard'


class GameIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { games: [] };
  }

  componentDidMount() {
    fetch('/api/v1/games')
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
    return (
<<<<<<< HEAD
      <div className="cell small-22 small-offset-1 cell large-20 large-offset-2">
        <SearchBar />
        <GameCard games={this.state.games} />
=======
      <div>
        {gameIndexHTML}
>>>>>>> 69fce6685f2495e133bc33f8696f30252bce412f
      </div>
    )
  }
}
export default GameIndex;
