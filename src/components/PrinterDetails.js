import React from 'react';
import { useParams, Link } from 'react-router-dom';
import printerData from '../data/printerData';

function PrinterDetails() {
  const { id } = useParams();
  const printer = printerData.find(p => p.id === parseInt(id));

  if (!printer) {
    return <div>Printer not found</div>;
  }

  return (
    <div>
      <h1 className="App-title">{printer.name}</h1>
      <div className="App-card-grid">
        {printer.children ? (
          printer.children.map((subPrinter) => (
            <Link to={`/printer/${subPrinter.id}`} key={subPrinter.id} className="App-card">
              <div>
                <h3>{subPrinter.name}</h3>
                <p>{subPrinter.brand}</p>
              </div>
              <span className="App-card-arrow">→</span>
            </Link>
          ))
        ) : (
          <div>No subcategories available</div>
        )}
      </div>
      <Link to="/" className="App-link">Back to Home</Link>
    </div>
  );
}

export default PrinterDetails;
