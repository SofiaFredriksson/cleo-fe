import React, { Component } from 'react';
import welcomeIcon from './assets/welcome.jpg';
import Tabs from "./containers/TabsContainer"
import Header from "./components/Header"
import Loader from "./components/Loader"


class App extends Component {


  render() {

    return (

      <div>
      <Header />
      <Tabs />
      </div>
      )
    
  }
}

export default App;
