import React, { Component } from 'react';
import welcomeIcon from './assets/welcome.jpg';
import Tabs from "./containers/TabsContainer"

class App extends Component {
  render() {
    return (
      <div>
      <img src={welcomeIcon} alt="Welcome!"/>
      <Tabs />
      </div>
    );
  }
}

export default App;
