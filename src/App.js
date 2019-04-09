import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ContactList from './ContactList.js'
import ContactProfile from './ContactProfile.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="mainContainer">
          <Route exact path="/" component={ContactList} />
          <Route path="/contact/:id" component={ContactProfile} />
        </div>
      </Router>
    );
  }
}

export default App;
