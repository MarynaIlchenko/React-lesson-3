import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }
  handleIncrement = () => {};

  handleDecrement = () => {};

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>

        <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Уменьшить на 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
