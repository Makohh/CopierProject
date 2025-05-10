import React from 'react';
import { Link } from 'react-router-dom';
import printerData from '../data/printerData';

function Home() {
  return (
    <>
      <h1 className="App-title">3D Printer Directory</h1>
      <p className="App-description">
        Explore our collection of top-rated 3D printers
      </p>
      <div className="App-card-grid">
        {printerData.map((printer) => (
          <Link to={`/printer/${printer.id}`} key={printer.id} className="App-card">
            <div>
              <h3>{printer.name}</h3>
              <p>{printer.brand}</p>
            </div>
            <span className="App-card-arrow">→</span>
          </Link>
        ))}
      </div>
      <div className="App-footer">
        <a 
          href="https://github.com/corbfon/printers"
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>
    </>
  );
}

export default Home;
