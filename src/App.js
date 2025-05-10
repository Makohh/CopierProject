import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
