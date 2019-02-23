import React, { Component } from 'react';

import finApps from '../../services/finApps.js';

import AppList from './AppList.js';


class Home extends Component {
  constructor(props){
    super(props);

    this.state = { 
      finApps: {}
    };
    this.loadOpenApps = this.loadOpenApps.bind(this);
    this.closeApp = this.closeApp.bind(this);
    this.loadOpenApps();
  }
  
  render() {
    return this.state.finApps ? (
      <AppList appList={this.state.finApps} closeApp={this.closeApp}/>
    ) : (<p></p>);
  }

  componentDidMount(){
    this.reloadAppsInterval = setInterval(this.loadOpenApps, 15000);
  }
  componentWillUnmount(){
    clearInterval(this.reloadAppsInterval);
  }

  loadOpenApps(){
    finApps.getOpenApps().then(apps=>{
      this.setState({
        finApps: apps
      });
    });
  }
  closeApp(uuid){
    const loadOpenApps = this.loadOpenApps;
    finApps.closeApp(uuid).then(loadOpenApps, loadOpenApps);
  }
}

export default Home;
