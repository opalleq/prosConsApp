import React, { Component } from 'react';
import * as Constants from './../../Constants'
import ListRow from './ListRow'
import './List.css';

export default class List extends Component {
  state = {
    rowsNum: Constants.INITIAL_ROWS_NUM,
    rows: [],
    scores: []
  };

  componentDidMount = () => this.setInitialScores();

  setInitialScores = () => {
    let scores = this.state.scores;

    for (let i = 0; i < this.state.rowsNum; i++) {
      if (!scores[i]) {
        scores[i] = {
          pros: 0,
          cons: 0
        };
      }
    }

    this.setState({scores: scores});
  };

  onUpdateScores = (itemKey, score, type) => {
    let scores = [...this.state.scores];

    scores[itemKey][type] = score;
    this.setState({scores: scores}, function() {
      this.countScores(scores);
    });
  };

  onAddChild = () => {
    this.setState({
      rowsNum: this.state.rowsNum + 1
    }, function() {
      this.setInitialScores();
    });
  };

  countScores = arr => {
    let prosTotal = arr.reduce(function(acc, curr) {
      return {pros: acc.pros + curr.pros};
    });
    let consTotal = arr.reduce(function(acc, curr) {
      return {cons: acc.cons + curr.cons};
    });

    this.props.updateTotal(prosTotal, consTotal);
  };

  render() {
    const rows = [];

    for (let i = 0; i < this.state.rowsNum; i++) {
      rows.push(<ListRow key={i} itemKey={i} updateScores={this.onUpdateScores}/>);
    }

    return (
      <div className="list-container">
        <div className="list-header-container">
          <div className="list-header list-header-pro"><span>+</span></div>
          <div className="list-header list-header-con"><span>-</span></div>
        </div>

        {rows}

        <button onClick={this.onAddChild} className="app-button add-button">+</button>
      </div>
    );
  }
}