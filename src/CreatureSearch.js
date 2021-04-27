import React, { Component } from 'react';
import './CreatureSearch.css';

export default class CreatureSearch extends Component {

  state = {
    nameSearch: '',
    sortField: ''
  }

  handleNameFilter = ({ target }) => {
    this.setState({ nameSearch: target.value });
  }

  handleSortField = ({ target }) => {
    this.setState({ sortField: target.value });
  }

  render() {

    const { nameSearch, sortField } = this.state;

    return (
      <form className="CreatureSearch">

        <select
          name="sortField"
          value={sortField}
          onChange={this.handleSortField}
        >
          <option value="all">All</option>
          <option value="name">Name</option>
          <option value="horn">Horn</option>
        </select>

        <input
          name="nameSearch"
          value={nameSearch}
          onChange={this.handleNameFilter}
        />

        <button>Search</button>

      </form >
    );
  }
}
