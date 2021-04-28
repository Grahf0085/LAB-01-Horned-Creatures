import React, { Component } from 'react';
import './CreatureList.css';
import CreatureItem from './CreatureItem';

class CreatureList extends Component {

  render() {

    const creatures = this.props.creatures;

    return (
      <ul className="CreatureList">
        {creatures.map(creature => (
          <CreatureItem key={creature.title} creature={creature} /> // Why key and creature here but only creatures in app.js line 54?
        ))}
      </ul>
    );
  }
}

export default CreatureList;