import React from 'react'
import GameIndex from './GameIndex'
import ReviewNewPage from '../containers/ReviewNewPage'
import { Route, IndexRoute, Router, browserHistory, Link } from 'react-router';

export const App = (props) => {
  return (
    <Router history={browserHistory}>
	      <Route>
          <Route path='/' component={GameIndex} />
          <Route path='/games/:id/review/new' component={ReviewNewPage} />
	      </Route>
	   </Router>

  )
}


export default App
