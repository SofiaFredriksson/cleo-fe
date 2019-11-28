import React, { Component } from 'react';

import Tabs from "./containers/TabsContainer"
import Header from "./components/Header"



class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <Tabs />
      </div>
      )
    
  }
}

export default App;
