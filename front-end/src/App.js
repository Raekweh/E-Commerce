import './App.css';
import { Component } from 'react';
import { BrowserRouter as Route, Router } from 'react-router-dom';

import NavBar from './pages/navigation-bar';
import Header from './pages/Header';

import Registerpage from './pages/register-page';
import HomePage from './pages/home-page';

class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <NavBar/>
        <Route exact path = "/" component = {HomePage} />
        <Route path = "/register-page" component = {Registerpage}/>
      </Router>
    );
  }
}

export default App;
