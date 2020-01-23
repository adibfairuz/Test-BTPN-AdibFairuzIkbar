import React, { Component } from 'react'
import Contacts from "./Contacts";
import ContactDetails from './ContactDetails';
import AddContact from './AddContact';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
  export default class RouteApp extends Component {
      render() {
          return (
              <Router>
                  <Switch>
                      <Route exact path="/" component={Contacts}/>
                      <Route path="/contacts" component={Contacts}/>
                      <Route path="/contact/:id" component={ContactDetails}/>
                      <Route path="/post" component={AddContact}/>
                  </Switch>
              </Router>
          )
      }
  }
  