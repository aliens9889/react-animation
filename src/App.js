import React, { Component } from 'react';

import Backdrop from './components/Backdrop/Backdrop';
import './App.css';

class App extends Component {

  state = {
    modalIsOpen: false
  };

  render() {
    return (
      <div className="App">
        <Backdrop show={this.state.modalIsOpen} />
      </div>
    );
  }
}

export default App;
