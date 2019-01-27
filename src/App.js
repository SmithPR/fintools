import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import finApps from './services/finApps.js';

import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import AppList from './components/AppList.js';


const theme = createMuiTheme({
  typography: {
    fontSize: 12,
    htmlFontSize: 12
  }
});

class App extends Component {
  constructor(props){
    super(props);

    this.state = { 
      sidebarExpanded: false,
      finApps: {}
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);

    finApps.getOpenApps().then(apps=>{
      this.setState({finApps: apps});
    });
  }
  
  render() {
    return (
      <div className="App">
        <CssBaseline>
          <MuiThemeProvider theme={theme}>
            <Header toggleSidebar={this.toggleSidebar} />
            <Sidebar expanded={this.state.sidebarExpanded} toggleSidebar={this.toggleSidebar}/>
            <AppList finApps={this.state.finApps}/>
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
