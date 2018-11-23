import React, { Component } from 'react';

import './List.css';

class List extends Component {

  state = {
    items: [1,2,3]
  };

  addItemHandler = () => {
    this.setState((prevState) => {
      return {
        items: prevState.items.concat(prevState.items.length + 1)
      }
    });
  }

  removeItemHandler = (selIndex) => {
    this.setState((prevState) => {
      return {
        items: prevState.items.filter((item, index) => index !== selIndex)
      }
    });
  }

  render () {

    const items = this.state.items.map((item, index) => (
      <li
        key={index}
        onClick={() => this.removeItemHandler(index)}>
          {item}
      </li>
    ))

    return (
      <div>
        <button className="Button" onClick={this.addItemHandler}>Add Item</button>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}

export default List;
