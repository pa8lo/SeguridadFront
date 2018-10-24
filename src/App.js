import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Route, Redirect} from "react-router-dom";
import BasicExample from './components/BasicExample.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BasicExample/>
      </div>
    );
  }
}

export default App;
