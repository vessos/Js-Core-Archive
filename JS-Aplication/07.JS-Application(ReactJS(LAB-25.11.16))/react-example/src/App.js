 import React, { Component } from 'react';
import './App.css';
 import Header from './Header.js';
 import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>

        <p className="App-intro">
          Hello SoftUni5 !!!
        </p>
          <Footer/>
      </div>
    );
  }
}

export default App;
