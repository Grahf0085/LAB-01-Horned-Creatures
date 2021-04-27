import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CreatureList from './CreatureList';
import creatures from './creatures.js';
import CreatureSearch from './CreatureSearch.js';

<link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/code-new-roman" type="text/css" />;

const creatureTypes = [...new Set(creatures.map(c => c.type))];

class App extends Component {

  state = {
    creat: creatures
  }

  handleSearch = ({ nameSearch, hornFilter, sortField }) => {
    const nameRegex = new RegExp(nameSearch, 'i');

    const searchData = creatures
      .filter(creature => {
        return !nameSearch || creature.title.match(nameRegex);
      })
      .filter(creature => {
        return !hornFilter || creature.horns === hornFilter;
      })
      .sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
      });

    this.setState({ creat: searchData });
  }

  render() {

    return (
      <div className="App">

        <Header />

        <CreatureSearch types={creatureTypes} onSearch={this.handleSearch} />

        <main>

          <CreatureList creatures={creatures} />

        </main>

        <Footer />
      </div>
    );
  }

}

export default App;
