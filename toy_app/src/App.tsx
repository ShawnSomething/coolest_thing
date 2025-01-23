import React from 'react';
import './App.css';
import img from './image (8).png';

function App() {
  return (
    <>
    <div className="App">
      <div className="App-header">
        <h1>👇 The coolest thing right now</h1>
        <img src={img} alt="Coolest thing" />
        <p>Road Unicycle</p>
      </div>
    </div>
    </>
  );
}

export default App;
