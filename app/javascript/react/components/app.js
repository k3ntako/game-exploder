import React from 'react';
import { Router, browserHistory, Route, IndexRoute, Link } from 'react-router';

import GameIndex from './GameIndex';
import GamesShowPage from './GamesShowPage';

export const App = (props) => {
  return (
  <Router history={browserHistory}>
    <Route path="/" component={GameIndex}/>
    <Route path="/games/:id" component={GamesShowPage}/>
  </Router>
  )
}

export default App
