import React from 'react';
import Counter from './components/Counter';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#608D88' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F5185' },
// ];

const App = () => (
  <>
    <h1>Состояние компонента</h1>
    <Counter initialValue={10} />
  </>
);

export default App;
