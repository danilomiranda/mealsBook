import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { addRecipe } from '../actions/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <input
          type="text"
          ref={(input) => this.input = input}
          placeholder="Monday's breakfest"
        />
        <button onClick={this.submitFood}>Submit</button>

        <pre>
          Monday's breakfest {this.state.calendar && this.state.calendar.monday.breakfast}
        </pre>
      </div>
    );
  }
}

export default App;
