import React, { Component } from 'react';
import './CreatureList.css';
import CreatureItem from './CreatureItem';

class CreatureList extends Component {

  render() {
    return (
      <ul>
        <CreatureItem />
      </ul>
    );
  }
}

export default CreatureList;