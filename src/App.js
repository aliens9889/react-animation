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
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        { this.state.modalIsOpen ? (
          <Backdrop show />
        ) : null }
        <button onClick={this.showModal} className="Button" >Open Modal</button>
      </div>
    );
  }
}

export default App;
