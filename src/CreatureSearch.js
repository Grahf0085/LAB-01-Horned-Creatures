import React, { Component } from 'react';
import './CreatureSearch.css';

export default class CreatureSearch extends Component {
  render() {
    return (
      <form className="CreatureSearch">

        <input />

        <select>
          <option value="all">All</option>
          <option value="name">Name</option>
          <option value="horn">Horn</option>
        </select>

        <button>Search</button>

      </form >
    );
  }
}
