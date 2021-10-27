import React from 'react';
import './App.css';
import PathfindingVisualizer from './components/PathfindingVisualizer';
import Header from './components/Header/Header'
function App(){
  return (
    <div className="App">
      <Header></Header>
      <PathfindingVisualizer></PathfindingVisualizer>
    </div>
  );
}

export default App;