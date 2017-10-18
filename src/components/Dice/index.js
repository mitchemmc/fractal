import React, { Component } from 'react';
import MovementCounter from '../../components/MovementCounter';
import AttackCounter from '../../components/AttackCounter';
import SpecialCounter from '../../components/SpecialCounter';

import './Dice.css';

class Dice extends Component {
  render() {
    return (
      <div className={"container dice__container" + (this.props.showDice ? "" : " hide")} >
        <h3 className="container__title" >Dice</h3>
        <div className="dice-counter__container">
          <MovementCounter />
          <AttackCounter />
          <SpecialCounter />
        </div>
      </div>
    );
  }
}

export default Dice;