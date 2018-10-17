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

        <li key={game.id}>

        {game.name}
        <p> {game.description}</p>

        <img src={game.promo_image_url}></img>
        </li>


      )
    })
    return (
      <div>
      <h1> Harry is holding me hostage and forcing me to code please help me. He cant read so I know he wont understand this! </h1>
      <h3>{gameIndexHTML} </h3>
      </div>
    )
  }
}

export default GameIndex;
