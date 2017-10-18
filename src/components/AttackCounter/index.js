import React, { Component } from 'react';

class AttackCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {attacks: []}
    this.addAttack = this.addAttack.bind(this);
  }

  addAttack() {
    const newAttacks = [Math.floor(Math.random() * 6 + 1)].concat(this.state.attacks);
    this.setState({attacks: newAttacks});
  }

  render() {
    const attacks = this.state.attacks.map((attack, index) => {
      return <li key={this.state.attacks.length - index} className={"counter-list-item" + (index === 0 ? " counter-list-item__main" : "")}>{attack}</li>
    });
    return (
      <div className="counter__container">
        <h1 className="counter__heading">Attack / Defence</h1>
        <button onClick={this.addAttack}>Roll</button>
        <ul className="counter-list__container">
          {attacks}
        </ul>
      </div>
    );
  }
}

export default AttackCounter;