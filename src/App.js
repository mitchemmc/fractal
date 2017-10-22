import React, { Component } from 'react';
import './App.css';
import TurnCounter from './components/TurnCounter';
import DimensionalCollision from './components/DimensionalCollision';
import HeaderActions from './components/HeaderActions';
import Dice from './components/Dice';
import Rules from './components/Rules'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.nextTurn = this.nextTurn.bind(this);
    this.previousTurn = this.previousTurn.bind(this);
    this.showDice = this.showDice.bind(this);
    this.reset = this.reset.bind(this);
    this.showRules = this.showRules.bind(this); 
    this.closeRules = this.closeRules.bind(this); 
    this.state = {turn: 1, showDice: false, showRules: false};
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

  closeRules() {
    this.setState({showRules: false}); 
  }

  showRules() {
    this.setState({showRules: true}); 
  }

  render() {
    return (
      <div className={"App" + (this.state.showRules ? " no-scroll" : "")}>
        <Rules showRules={this.state.showRules} closeRules={this.closeRules}/>
        <header className="App-header">
          <h1 className="App-title">Fractal</h1>
          <button onClick={this.showRules}>Show Rules</button>
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
