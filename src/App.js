import React from 'react';
import Board from './components/Board';
import './styles/root.scss';

const App = () => {
  return (
    <div classnName="app">
      <h1>TIC TAC TOE</h1>
      <Board />
    </div>
  );
};
/* a component must always return a single element */
export default App;
