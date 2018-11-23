import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

import Backdrop from './components/Backdrop/Backdrop';
import Modal from './components/Modal/Modal';
import './App.css';

class App extends Component {

  state = {
    modalIsOpen: false,
    showBox: false
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
        <h1>React Animations</h1>
        <button 
          className="Button"
          onClick={() => this.setState(prevState => ({ showBox: !prevState.showBox }))}>Toggle Box</button>
        <br />
        <br />
        <Transition
          mountOnEnter
          unmountOnExit
          in={this.state.showBox}
          timeout={1000}
          onEnter={() => console.log('Enter')}
          onEntering={() => console.log('Entering')}
          onEntered={() => console.log('Entered')}
          onExit={() => console.log('Exit')}
          onExiting={() => console.log('Exiting')}
          onExited={() => console.log('Exited')}>

          {state => (
            <div
              style = {{
                backgroundColor: 'red',
                width: 100,
                height:100,
                margin: 'auto',
                transition: 'opacity 1s ease-out',
                opacity: state === 'exiting' ? 0 : 1
              }} 
            />
          )}
        </Transition>
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        { this.state.modalIsOpen ? (
          <Backdrop show />
        ) : null }
        <br/>
        <button onClick={this.showModal} className="Button" >Open Modal</button>
      </div>
    );
  }
}

export default App;
