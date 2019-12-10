import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Test from './test';
import Randomusr from './pages/randomuser';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Randomusr />
      </div>
    );
  }
}

export default App;
