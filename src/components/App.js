import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import  {
  Button,
  Card,
  Row,
  Col,
  Navbar,
  NavItem
} from 'react-materialize'
import {HomePage} from './pages/HomePage'
import {OrganizationsIndexPage} from './pages/OrganizationsIndexPage'

export const App = function() {

  return  (
    <Router>
      <div className="App">
        <Navbar className='brown lighten-3' brand='FinalProject' right>
          <NavItem><Link to='/'>Home</Link></NavItem>
          <NavItem><Link to='/organizations'>Organizations</Link></NavItem>
        </Navbar>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/organizations" component={OrganizationsIndexPage} />
        </Switch>
      </div>
    </Router>
  )
}
