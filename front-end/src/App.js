import './App.css';
import { Component } from 'react';

import Registerpage from './pages/register-page';
import HomePage from './pages/home-page';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Route>
        <Route exact path ="/" component = {HomePage}/>
        <Route path = "/register-page" component = {Registerpage}/>
      </Route>
    );
  }
}

export default App;
