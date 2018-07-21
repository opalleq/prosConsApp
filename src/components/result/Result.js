import React, { Component } from 'react';
import './Result.less';

class Result extends Component {
  render() {
    return (
      <div className={'result ' + (this.props.isShown ? '' : 'hidden')}>
        <div className="score proScore">
          <div>Pros</div>
          <div>{this.props.total.pros}</div>
        </div>
        <div>vs</div>
        <div className="score conScore">
          <div>Cons</div>
          <div>{this.props.total.cons}</div>
        </div>
      </div>
    );
  }
}

export default Result;