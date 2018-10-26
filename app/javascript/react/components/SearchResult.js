import React, { Component } from 'react';
import GameCard from './GameCard'


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
    return(
      <div>
        <h2>Search Results for: {this.props.params.searchString}</h2>
        <GameCard games={this.state.games} />
      </div>
    )
  }

}

export default SearchResult
