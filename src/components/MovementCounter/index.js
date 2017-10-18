import React, { Component } from 'react';

class MovementCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {movements: []}
    this.addMovement = this.addMovement.bind(this);
  }

  addMovement() {
    const newMovements = [Math.floor(Math.random() * 4 + 1)].concat(this.state.movements);
    this.setState({movements: newMovements});
  }

  render() {
    const movements = this.state.movements.map((movement, index) => {
      return <li key={this.state.movements.length - index} className={"counter-list-item" + (index === 0 ? " counter-list-item__main" : "")}>{movement}</li>
    });
    return (
      <div className="counter__container">
        <h1 className="counter__heading">Movement</h1>
        <button onClick={this.addMovement}>Roll</button>
        <ul className="counter-list__container">
          {movements}
        </ul>
      </div>
    );
  }
}

export default MovementCounter;