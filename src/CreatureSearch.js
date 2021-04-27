import React, { Component } from 'react';
import './CreatureSearch.css';

export default class CreatureSearch extends Component {
  render() {
    return (
      <form className="CreatureSearch">

        <select>
          <option value="all">All</option>
          <option value="name">Name</option>
          <option value="horn">Horn</option>
        </select>

        <input />

        <button>Search</button>

      </form >
    );
  }
}
