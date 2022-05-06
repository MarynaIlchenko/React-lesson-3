import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  handleIncrement = () => {
    console.log('Кликнули в увеличить');
    console.log(this);
  };

  handleDecrement = () => {
    console.log('Кликнули в уменьшить');
    console.log(this);
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">0</span>

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
