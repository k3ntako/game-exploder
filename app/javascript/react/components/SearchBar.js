import React, { Component, Link } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      searchString: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const newSearchString = event.target.value
    this.setState({ searchString: newSearchString })
  }

  handleSubmit(event) {
    event.preventDefault()
    const body = JSON.stringify({
      search_string: this.state.searchString
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
      <div className="search-bar-results">
        <h3 className="search-bar-result-title">{game.name}</h3>
        <img className="search-bar-result-picture" src={game.promo_image_url} />
      </div>
    )
  })

  return(
    <div className="search">
      <form onSubmit={this.handleSubmit}>
        <input id="search-input" type='text' name='searchString' value={this.state.searchString} onChange={this.handleChange} />

        <Link to="{`/games/search/${this.state.searchString}`}">Submit</Link>
      </form>
      <ul>{games}</ul>
    </div>
  )
}
}

export default SearchBar;
