import React, { Component } from 'react';

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    }
  }
  componentDidMount() {
    const body = JSON.stringify({
      search_string: this.props.params.searchString
    })
    fetch('/api/v1/games/search.json', {
      method: 'POST',
      body: body,
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ games: body })
    })
  }

  render() {
    const games = this.state.games.map(game => {
      return(
        <div className="search-bar-results" key={game.id}>
        <h3 className="search-bar-result-title">{game.name}</h3>
        <img className="search-bar-result-picture" src={game.promo_image_url} />
        </div>
      )
    })

    return(
      <div>
        {games}
      </div>
    )
  }

}

export default SearchResult
