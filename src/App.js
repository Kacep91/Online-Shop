import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Offers from './Offers';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Body />
        <Offers />
        <Footer />       
      </div>
    );
  }
}

export default App;
