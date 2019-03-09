import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import ClassComponent from './components/ClassComponent';

class App extends Component {
  render() {
    return (
      <div className="App">

        <ClassComponent />
      </div>
    );
  }
}

export default App;
