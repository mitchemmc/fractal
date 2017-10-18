import React, { Component } from 'react';
import './App.css';
import TurnCounter from './components/TurnCounter';
import DimensionalCollision from './components/DimensionalCollision';
import HeaderActions from './components/HeaderActions';
import Dice from './components/Dice';

class App extends Component {
  constructor(props) {
    super(props);
    this.nextTurn = this.nextTurn.bind(this);
    this.previousTurn = this.previousTurn.bind(this);
    this.showDice = this.showDice.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {turn: 1, showDice: false};
  }

  nextTurn() {
    this.setState({turn: this.state.turn + 1});
  }

  previousTurn() {
    this.setState({turn: this.state.turn <= 1 ? 1 : this.state.turn - 1});    
  }

  showDice(show) {
    this.setState({showDice: show});
  }

  reset() {
    this.setState({turn: 1});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fractal</h1>
          <HeaderActions showDice={this.showDice} reset={this.reset}/>
        </header>
        <TurnCounter nextTurn={this.nextTurn} previousTurn={this.previousTurn} turn={this.state.turn} />
        <Dice showDice={this.state.showDice} />
        <DimensionalCollision turn={this.state.turn}/>
      </div>
    );
  }
}

export default App;
