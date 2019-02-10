import React, { Component } from 'react';

import Header from './mainWindow/Header.js';
import Sidebar from './mainWindow/Sidebar.js';
import Home from './mainWindow/Home.js';

class MainWindow extends Component {
  constructor(props){
    super(props);

    this.state = { 
      sidebarExpanded: false
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }
  
  render() {
    return (
      <div className="MainWindow" style={{width: '100%', height: '100%'}}>
        <Header toggleSidebar={this.toggleSidebar} />
        <Sidebar expanded={this.state.sidebarExpanded} toggleSidebar={this.toggleSidebar}/>
        <Home />
      </div>
    );
  }

  toggleSidebar(){
    this.setState({ sidebarExpanded: !this.state.sidebarExpanded });
  }
}

export default MainWindow;
