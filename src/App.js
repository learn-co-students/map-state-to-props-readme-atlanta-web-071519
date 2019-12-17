import React, { Component } from 'react';
// **
// allows us to specify which data we are listening to (through mapStateToProps), and which component we are providing the data
import { connect } from 'react-redux'; 

import './App.css';

class App extends Component {

  handleOnClick() {
    // dispatch is automatically provided by 'connect'
    this.props.dispatch({
      type: 'INCREASE_COUNT',
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

// specify which slice of the state we want to provide to our component
// want to provide 'state.items' and allow our component to have access to them through a prop called items
// returns an items prop that is used in App.js
const mapStateToProps = (state) => {
  return { items: state.items };  
}

// for the above function
// ...***App component can access that state with the 'this.props.items' (ie what's returned from mapStateToProps)

// listens to each change in the state that occurs
// also specifies which component (App) that we're providing the data to
export default connect(mapStateToProps)(App);

// the entire connect() method return s a new component that looks like the App component, but receives the correct data
