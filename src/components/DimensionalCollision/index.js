import React, { Component } from 'react';

import './DimensionalCollision.css';

const ALPHA = "ABCDEFG";
const ADD_ITEM_MESSAGE = "Another space-time has collided! Item has appeared at P-";
const DELETE_ITEM_MESSAGE = "Player has acquired item at P-";
const PORTAL_OPEN_MESSAGE = "The portal has been opened, powers await inside!";
const PORTAL_CLOSE_MESSAGE = "The portal has been closed";

class DimensionalCollision extends Component {
  constructor(props) {
    super(props);
    this.state = {roll: -1, items: [], messages: [], portalOpen: false, turnsSincePortalClose: 0}
    this.roll = this.roll.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.getCellId = this.getCellId.bind(this);
    this.openPortal = this.openPortal.bind(this);
    this.closePortal = this.closePortal.bind(this);
  }

  roll() {
    let counter = 0;
    const interval = setInterval(function() {
      counter++;
      this.setState({roll: Math.floor(Math.random() * 10 + 1)});
      if(counter > 9) {
        clearInterval(interval);
        if(this.state.roll >= 7) {
          this.addItem();
        }
      }
    }.bind(this), 100);
  }

  getCellId(row, column) {
    return ALPHA[column] + String(row + 1);    
  }

  addItem() {
    let row, column = -1;
    while(row < 0 || column < 0) {
      row = Math.floor(Math.random() * 7);
      column = Math.floor(Math.random() * 7);
      // Prevent going to the middle or a cell that's already taken
      if((row === 3 && column === 3) || (
        this.state.items.find((item) => item.row === row && item.column === column)
      )) {
        row, column = -1;
      }
    }
    const items = this.state.items.slice();
    items.push({row: row, column: column});
    this.setState({items: items});
    this.addMessage(`${ADD_ITEM_MESSAGE}${this.getCellId(row, column)}`);
  }

  deleteItem(row, column) {
    const items = this.state.items.slice();
    let success = false;
    for(let i = 0; i < this.state.items.length; i++) {
      const item = items[i];
      if(item.row === row && item.column === column) {
        items.splice(i,1);
        success = true;
        break;
      }
    }
    if(success) {
      this.setState({items: items});
      this.addMessage(`${DELETE_ITEM_MESSAGE}${this.getCellId(row, column)}`);
    }
  }

  openPortal() {
    this.setState({portalOpen: true});
    this.addMessage(PORTAL_OPEN_MESSAGE);
  }

  closePortal() {
    this.setState({portalOpen: false, turnsSincePortalClose: 0});
    this.addMessage(PORTAL_CLOSE_MESSAGE);
  }

  addMessage(message) {
    const messages = [message].concat(this.state.messages);
    this.setState({messages: messages});
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.turn < nextProps.turn) {
      if(this.state.items.length < 4) {
        this.roll();
      }
      if(nextProps.turn === 11) {
        this.openPortal();
      } else if(nextProps.turn > 11 && !this.state.portalOpen) {
          this.setState({turnsSincePortalClose: this.state.turnsSincePortalClose + 1});
          // Open portal every 7 turns
          if(this.state.turnsSincePortalClose > 7 - 2) {
            this.openPortal();
          }
      }
    }
  }

  render() {
    // Calculate Grid
    const renderedGrid = [];
    for(let i = 0; i < 7; i++) {
      const rendererRow = [];
      for(let j = 0; j < 7; j++) {
        const isPortal = i === 3 && j === 3;
        const cellId = this.getCellId(i, j);
        const isItem = this.state.items.find((item) => item.row === i && item.column === j);
        rendererRow.push(
          <div key={j} onClick={
            isPortal ?
            () => this.closePortal()
            : () => this.deleteItem(i, j)
          } className={
            "cell" + (isItem ?
            " cell-item" 
            : "") + (isPortal ?
            " cell-portal"
            : "") + (isPortal && this.state.portalOpen ?
            " cell-portal-open"
            : "")} >
            {cellId}
          </div>
        );
      }
      renderedGrid.push(<div key={i} className="row">{rendererRow}</div>);
    }

    const messagesList = this.state.messages.map((message, i) => {
      return <li key={this.state.messages.length - i} className="collision-message">{message}</li>
    });

    return (
      <div className="container">
        <h3 className="container__title" >Collisions</h3>
        <div className="collision-content" >
          <div className="collision-legend">
            <h1 className="dimensional__heading">Legend</h1>
            <div className="collision-legend__content">
              <div className="collision-legend__item">
                <div className="cell-item collision-legend__key"/>
                Item
              </div>
              <div className="collision-legend__item">
                <div className="cell-portal collision-legend__key"/>
                Closed Portal
              </div>
              <div className="collision-legend__item">
                <div className="cell-portal cell-portal-open collision-legend__key"/>
                Open Portal
              </div>
            </div>
          </div>
          <div className="collision-grid">
            <h1 className="dimensional__heading">Portal Room</h1>
            <div className="grid">
              {renderedGrid}
            </div>
          </div>
          <div className="collision-log">
            <h1 className="dimensional__heading">Event Log</h1>
            <ul className="collision-list__container">
              {messagesList}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default DimensionalCollision;