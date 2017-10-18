import React, { Component } from 'react';

import './HeaderActions.css';

class HeaderActions extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.props.showDice(e.currentTarget.checked);
  }
  render() {
    return (
      <div className="header-actions__container">
        <div className="header-action__dice">
          <input type="checkbox" value="dice" onChange={this.onChange}/>
          <label htmlFor="dice">show dice</label>
        </div>
        <button onClick={this.props.reset}>reset</button>
      </div>
    );
  }
}

export default HeaderActions;