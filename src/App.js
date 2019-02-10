import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import MainWindow from './components/MainWindow.js';
import WebPreview from './components/WebPreview.js';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5669d1'
    }
  },
  typography: {
    fontSize: 12,
    htmlFontSize: 12
  },
  spacing: {
    unit: 6
  },
  shape: {
    borderRadius: 2
  }
});

class App extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div className="App">
        <CssBaseline>
          <MuiThemeProvider theme={theme}>
            { window.fin ? <MainWindow /> : <WebPreview /> }
          </MuiThemeProvider>
        </CssBaseline>
      </div>
    );
  }
}

export default App;
