import React, { Component } from 'react';
import List from './components/list/List';
import Result from './components/result/Result';
import './App.less';

class App extends Component {
  onUpdateTotal = (pros, cons) => {
    let totalScore = {};

    Object.assign(totalScore, pros);
    Object.assign(totalScore, cons);

    this.setState({total: totalScore});
  };

  showResult = () => {
    this.setState({resultIsShown: true});
  };

  state = {
    total: {},
    resultIsShown: false
  };

  render() {
    return (
      <div className="app-container">
        <List updateTotal={this.onUpdateTotal}/>

        <button onClick={this.showResult} className="app-button result-button">See Result</button>

        <Result total={this.state.total} isShown={this.state.resultIsShown}/>
      </div>
    );
  }
}

export default App;