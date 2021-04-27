import React, { Component } from 'react';
import './CreatureSearch.css';

export default class CreatureSearch extends Component {

  state = {
    nameSearch: '',
    sortField: ''
  }

  render() {

    const { nameSearch, sortField } = this.state;

    return (
      <form className="CreatureSearch">

        <select
          name="sortField"
          value={sortField}
        >
          <option value="all">All</option>
          <option value="name">Name</option>
          <option value="horn">Horn</option>
        </select>

        <input
          name="nameSearch"
          value={nameSearch}
        />

        <button>Search</button>

      </form >
    );
  }
}
