import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';

const theme = createMuiTheme({
  typography: {
    fontSize: 12,
    htmlFontSize: 14
  }
});

class App extends Component {
  constructor(props){
    super(props);

    this.state = { 
      sidebarExpanded: false
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }
  
  render() {
    return (
      <div className="App">
        <CssBaseline>
          <MuiThemeProvider theme={theme}>
            <Header toggleSidebar={this.toggleSidebar} />
            <Sidebar expanded={this.state.sidebarExpanded} toggleSidebar={this.toggleSidebar}/>
          </MuiThemeProvider>
        </CssBaseline>
      </div>
    );
  }

  toggleSidebar(){
    this.setState({ sidebarExpanded: !this.state.sidebarExpanded });
  }
}

export default App;
