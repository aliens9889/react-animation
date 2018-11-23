import React, { Component } from 'react';

import Backdrop from './components/Backdrop/Backdrop';
import Modal from './components/Modal/Modal';
import './App.css';

class App extends Component {

  state = {
    modalIsOpen: false
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.showModal}>Open Modal</button>
        { this.state.modalIsOpen ? <Modal close={this.closeModal} /> : null }
        <Backdrop show={this.state.modalIsOpen} />
      </div>
    );
  }
}

export default App;
