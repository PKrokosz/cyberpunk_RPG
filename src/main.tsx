/// <reference types="vite/client" />

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { NightCityProvider } from './context/NightCityContext';
import App from './App';
import './index.css';

const base = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NightCityProvider>
      <BrowserRouter basename={base}>
        <App />
      </BrowserRouter>
    </NightCityProvider>
  </React.StrictMode>
);
