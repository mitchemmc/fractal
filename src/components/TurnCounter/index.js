import React, { Component } from 'react';

import './TurnCounter.css';

class TurnCounter extends Component {
  render() {
    return (
      <div className="container turn__container">
        <div className="turn-counter__container">
            <h3 className="container__title">Turns</h3>
            <h3 className="turn-counter__counter">
              {this.props.turn}              
            </h3>  
            <div>
              <button className="turn-counter__button" onClick={this.props.previousTurn}>-</button>
              <button className="turn-counter__button" onClick={this.props.nextTurn}>+</button>
            </div>
            <div className={"ring-visualiser ring-visualiser-outer"  +
              (this.props.turn === 10 ? " ring-visualiser-will-be-destroyed" : "") +
              (this.props.turn > 10 ? " ring-visualiser-destroyed" : "")}>
              <div className={"ring-visualiser ring-visualiser-middle" +
                (this.props.turn === 17 ? " ring-visualiser-will-be-destroyed" : "") +
                (this.props.turn > 17 ? " ring-visualiser-destroyed" : "")}>
                <div className="ring-visualiser ring-visualiser-inner" />
              </div>
            </div>
            {this.props.turn < 18 ?
            <div className="turn-status__container">
              <h4 className="turn-status__collapse">
              Fracture In:&nbsp;
              {this.props.turn < 11 ? 11 - this.props.turn : 7 - ((this.props.turn - 11) % 7)}
              </h4>
            </div>
            : null}
          </div>
        </div>
    );
  }
}

export default TurnCounter;