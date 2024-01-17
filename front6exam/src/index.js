import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import BasketProvider from './context/basket';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BasketProvider>
        <App />
      </BasketProvider>
    </HelmetProvider>
  </React.StrictMode>
);


