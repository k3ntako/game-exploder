import React from 'react';
import { Router, browserHistory, Route, IndexRoute, Link } from 'react-router';

import GameIndex from './GameIndex';
import GamesShowPage from './GamesShowPage';
<<<<<<< HEAD
import SearchResult from './SearchResult'
import ReviewNewPage from '../containers/ReviewNewPage'
=======
import SearchResults from './SearchResults';
import ReviewNewPage from '../containers/ReviewNewPage';
>>>>>>> 69fce6685f2495e133bc33f8696f30252bce412f


export const App = (props) => {
  return (
<<<<<<< HEAD
  <Router history={browserHistory}>
    <Route path="/" component={GameIndex}/>
    <Route path="/games/:id" component={GamesShowPage}/>
    <Route path="/games/search/results/:searchString" component={SearchResult}/>
    <Route path="/games/:id/reviews/new" component={ReviewNewPage}/>
  </Router>
=======
    <Router history={browserHistory}>
      <Route path="/" component={GameIndex}/>
      <Route path="/games/:id" component={GamesShowPage}/>
      <Route path="/games/:id/reviews/new" component={ReviewNewPage}/>
      <Route path="/games/search/:parameters" component={SearchResults}/>
    </Router>
>>>>>>> 69fce6685f2495e133bc33f8696f30252bce412f
  )
}
export default App
