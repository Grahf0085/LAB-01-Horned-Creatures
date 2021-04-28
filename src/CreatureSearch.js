import React, { Component } from 'react';
import './CreatureSearch.css';

export default class CreatureSearch extends Component {

  state = {  //empty state?
    nameSearch: '',
    sortField: '',
    keywordsFilter: ''
  }

  handleNameFilter = ({ target }) => { // target???
    this.setState({ nameSearch: target.value });
  }

  handleSortField = ({ target }) => {
    this.setState({ sortField: target.value });
  }

  handleKeywordsChange = ({ target }) => {
    this.setState({ keywordsFilter: target.value });
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

    const { nameSearch, sortField, keywordsFilter } = this.state;
    const { keywords } = this.props;

    return (
      <form className="CreatureSearch" onSubmit={this.handleSubmit}>

        <select
          name="keywordsFilter"
          value={keywordsFilter}
          onChange={this.handleKeywordsChange}
        >
          <option value=""></option>
          {keywords.map(keyword => (
            <option key={keyword} value={keyword}>{keyword}</option>
          ))}
        </select>

        <input
          name="nameSearch"
          value={nameSearch}
          onChange={this.handleNameFilter}
        />
        <select
          name="sortField"
          value={sortField}
          onChange={this.handleSortField}
        >
          <option value="name">Name</option>
        </select>

      </form >
    );
  }
}
