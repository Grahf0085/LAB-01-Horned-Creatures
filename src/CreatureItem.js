import React, { Component } from 'react';
import './CreatureItem.css';

class CreatureItem extends Component {

  render() {
    return (
      <li>
        <h2>'UniWhal</h2>
        <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="UniWhal" />
        <p>Horns: 1</p>
      </li>
    );
  }
}

export default CreatureItem;