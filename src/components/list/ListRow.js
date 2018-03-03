import React, { Component } from 'react';
import ListItem from './ListItem'

export default class ListRow extends Component {
  onUpdateListRow = (score, type) => {
    this.props.updateScores(this.props.itemKey, score, type);
  };

  render() {
    return (
      <div className="list-row">

        <ListItem type="pros" updateListRow={this.onUpdateListRow}/>

        <ListItem type="cons" updateListRow={this.onUpdateListRow}/>

      </div>
    );
  }
}