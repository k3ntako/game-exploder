import React from 'react';
import { Router, browserHistory, Route, IndexRoute, Link } from 'react-router';

import GameIndex from './GameIndex';
import GamesShowPage from './GamesShowPage';
import SearchResult from './SearchResult'
import ReviewNewPage from '../containers/ReviewNewPage'
import ReviewsShowPage from '../components/ReviewsShowPage'




export const App = (props) => {
  return (
  <Router history={browserHistory}>
    <Route path="/" component={GameIndex}/>
    <Route path="/games/:id" component={GamesShowPage}/>
    <Route path="/games/search/results/:searchString" component={SearchResult}/>
    <Route path="/games/:id/reviews/new" component={ReviewNewPage}/>
    <Route path="/games/:id/reviews/:review_id" component={ReviewsShowPage}/>
  </Router>
  )
}
export default App
