import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import PrinterDetail from './components/PrinterDetail';
import Home from './components/Home';
import reportWebVitals from './reportWebVitals';

// Create router with proper basename configuration
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/printer/:id',
          element: <PrinterDetail />
        }
      ]
    }
  ],
  { basename: process.env.PUBLIC_URL }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
