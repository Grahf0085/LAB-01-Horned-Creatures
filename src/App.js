import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CreatureList from './CreatureList';
import creatures from './creatures.js';
import CreatureSearch from './CreatureSearch.js';

<link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/code-new-roman" type="text/css" />;

const creatureKeywords = [...new Set(creatures.map(c => c.keyword))];
const creatureKeys = Object.keys(creatures[0]);

class App extends Component {

  state = {
    creat: creatures
  }

  handleSearch = ({ nameSearch, keywordsFilter, sortField }) => {
    const nameRegex = new RegExp(nameSearch, 'i');

    const searchData = creatures
      .filter(creature => {
        return !nameSearch || creature.title.match(nameRegex);
      })
      .filter(creature => {
        return !keywordsFilter || creature.keyword === keywordsFilter; //where is keywordsFilter coming from? 
      })
      .sort((a, b) => {
        if (a[sortField] < b[sortField]) return 1;
        if (a[sortField] > b[sortField]) return -1;
        return 0;
      });

    this.setState({ creat: searchData });
  }
  // on line 53, JSX(?) with props? But only one prop(?).  In CreatureList.js line 14 it has two props

  render() {

    const { creat } = this.state;

    return (
      <div className="App">

        <Header />

        <CreatureSearch keys={creatureKeys} keywords={creatureKeywords} onSearch={this.handleSearch} />

        <main>

          <CreatureList creatures={creat} />

        </main>

        <Footer />
      </div>
    );
  }

}

export default App;
