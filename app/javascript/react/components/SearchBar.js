import React, { Component } from 'react';
import { Link } from 'react-router';
import SearchResult from './SearchResult'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      searchString: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newSearchString = event.target.value
    this.setState({ searchString: newSearchString })
  }

  render() {

  return(
    <div className="search">
    <form>
    <input id="search-input" type='text' name='searchString' value={this.state.searchString} onChange={this.handleChange} />

    <Link to={`/games/search/results/${this.state.searchString}`}>Search</Link>
    </form>
    </div>
  )


}
}

export default SearchBar;
