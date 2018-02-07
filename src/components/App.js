import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import './App.css';
import { addRecipe, removeFromCalendar } from '../actions/index';

class App extends Component {
  doThing = () => {
    this.props.selectRecipe({})
  }
  render() {
    console.log('props', this.props)
    return (
      <div className="App">

        <pre>
          Hello
        </pre>
      </div>
    );
  }
}

function mapStateToProps (calendar) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal]
          ? calendar[day][meal]
          : null
        return meals
      }, {})
    }))
  }
}

function mapDispatchToProps (dispatch) {
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data))
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App);
