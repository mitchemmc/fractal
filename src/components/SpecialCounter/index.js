import React, { Component } from 'react';

class SpecialCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {specials: []}
    this.addSpecial = this.addSpecial.bind(this);
  }

  addSpecial() {
    const newSpecials = [Math.floor(Math.random() * 10 + 1)].concat(this.state.specials);
    this.setState({specials: newSpecials});
  }

  render() {
    const specials = this.state.specials.map((special, index) => {
      return <li key={this.state.specials.length - index} className={"counter-list-item" + (index === 0 ? " counter-list-item__main" : "")}>{special}</li>
    });
    return (
      <div className="counter__container">
        <h1 className="counter__heading">Special</h1>
        <button onClick={this.addSpecial}>Roll</button>
        <ul className="counter-list__container">
          {specials}
        </ul>
      </div>
    );
  }
}

export default SpecialCounter;