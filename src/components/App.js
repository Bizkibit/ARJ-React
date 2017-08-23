import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import {OrganizationsIndexPage} from './pages/OrganizationsIndexPage'

export const App = function() {

  return  (
    <Router>
      <div className="App">
        <nav>
          <Link to='/'>Home</Link> |
          <Link to='/organizations'>Organizations</Link> |
        </nav>
        <br />

        <Switch>
          <Route exact path="/" component={OrganizationsIndexPage} />
          <Route exact path="/organizations" component={OrganizationsIndexPage} />
        </Switch>
      </div>
    </Router>
  )
}
