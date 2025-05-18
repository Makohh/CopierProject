import React from 'react';
import { useParams, Link } from 'react-router-dom';
import printerData from '../data/printerData';
import './PrinterDetail.css';

function PrinterDetail() {
  const { id } = useParams();
  const findPrinter = (id, items) => {
    for (let item of items) {
      if (item.id === parseInt(id)) return item;
      if (item.children) {
        const found = findPrinter(id, item.children);
        if (found) return found;
      }
    }
    return null;
  };

  const printer = findPrinter(id, printerData);
  
  if (!printer) {
    return (
      <div className="printer-not-found">
        <h2>Category Not Found</h2>
        <Link to="/" className="back-link">Back to Directory</Link>
      </div>
    );
  }
  
  return (
    <div className="printer-detail">
      <div className="printer-detail-container">
        <Link to="/" className="back-link">← Back to Directory</Link>
        
        <div className="printer-header">
          <h1>{printer.name}</h1>
        </div>
        
        <div className="printer-content">
          {printer.children ? (
            <div className="App-card-grid">
              {printer.children.map((subPrinter) => (
                <Link 
                  to={`/printer/${subPrinter.id}`} 
                  key={subPrinter.id} 
                  className="App-card"
                >
                  <div>
                    <h3>{subPrinter.name}</h3>
                    <p>{subPrinter.brand}</p>
                  </div>
                  <span className="App-card-arrow">→</span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="attachments-section">
              <h2>Attachments</h2>
              <p>Attachment options will be available soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PrinterDetail;
