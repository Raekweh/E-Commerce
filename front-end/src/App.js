import './App.css';
import { Component } from 'react';

import Registerpage from './pages/register-page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Register</h1>
        <Registerpage />
      </div>
    );
  }
}

export default App;
