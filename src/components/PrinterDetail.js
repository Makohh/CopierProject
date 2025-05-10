import React from 'react';
import { useParams, Link } from 'react-router-dom';
import printerData from '../data/printerData';
import './PrinterDetail.css';

function PrinterDetail() {
  const { id } = useParams();
  const printer = printerData.find(p => p.id === id);
  
  if (!printer) {
    return (
      <div className="printer-not-found">
        <h2>Printer Not Found</h2>
        <p>The printer you're looking for doesn't exist or has been removed.</p>
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
          <div className="printer-image">
            <img src={`${process.env.PUBLIC_URL}/images/${printer.image}`} alt={printer.name} />
          </div>
          
          <div>
            <div className="description-section">
              <h2>Description</h2>
              <p>{printer.description}</p>
            </div>
            
            <div className="capabilities-section">
              <h2>Capabilities</h2>
              <ul className="capabilities-list">
                {printer.capabilities.map((capability, index) => (
                  <li key={index}>
                    <span className="capability-bullet">•</span> {capability}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrinterDetail;
