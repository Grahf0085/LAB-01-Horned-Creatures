import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CreatureList from './CreatureList';
import creatures from './creatures.js';
import CreatureSearch from './CreatureSearch.js';

< link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/code-new-roman" type="text/css" />;

class App extends Component {

  state = {
    creat: creatures
  }

  handleSearch = () => {

  }

  render() {

    return (
      <div className="App">

        <Header />

        <CreatureSearch onSearch={this.handleSearch} />

        <main>

          <CreatureList creatures={creatures} />

        </main>

        <Footer />
      </div>
    );
  }

}

export default App;
