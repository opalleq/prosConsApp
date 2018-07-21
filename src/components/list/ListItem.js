import React, { Component } from 'react';
import * as Constants from './../../Constants'

export default class ListItem extends Component {
  state = {
    severity: 0,
    inputValue: false
  };

  checkInputValue = e => {
    this.setState({inputValue: !!e.target.value}, function() {
      this.setState({severity: this.state.inputValue ? Constants.DEFAULT_SEVERITY : 0}, function() {
        this.props.updateListRow(this.state.severity, this.props.type);
      })
    })
  };

  changeSeverity = () => {
    let severity = this.state.severity === 3 ? 1 : this.state.severity + 1;

    this.setState({
      severity: severity
    }, function() {
      this.props.updateListRow(severity, this.props.type);
    });
  };

  render() {
    return (
      <div
        className={'list-item list-item-' + this.props.type + ' severity-' + this.props.type + ' ' + Constants.SEVERITY_LEVEL[this.state.severity]}>
        <input type="text" onChange={this.checkInputValue}/>
        <button
          className={'app-button severity-switcher ' + Constants.SEVERITY_LEVEL[this.state.severity] + (this.state.inputValue ? '' : ' hidden')}
          onClick={this.changeSeverity}>
        </button>
      </div>
    );
  }
}