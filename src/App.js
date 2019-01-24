import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import CssBaseline from '@material-ui/core/CssBaseline'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline>
          <Header />
        </CssBaseline>
      </div>
    );
  }
}

export default App;
