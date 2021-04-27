import React, { Component } from 'react';
import './CreatureSearch.css';

export default class CreatureSearch extends Component {

  state = {
    nameSearch: '',
    hornFilter: '',
    sortField: ''
  }

  handleNameFilter = ({ target }) => {
    this.setState({ nameSearch: target.value });
  }

  handleSortField = ({ target }) => {
    this.setState({ sortField: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state) {
      this.props.onSearch(this.state);
    }
  }

  render() {

    const { nameSearch, hornFilter, sortField } = this.state;
    const { types } = this.props;

    return (
      <form className="CreatureSearch" onSubmit={this.handleSubmit}>

        <select
          name="sortField"
          value={sortField}
          onChange={this.handleSortField}
        >
          <option value="">All</option>
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
