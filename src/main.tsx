import React, { StrictMode } from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary';

window.addEventListener('error', (event) => {
  document.body.innerHTML += `<div style="color:red;z-index:9999;position:fixed;top:0;left:0;background:white;padding:20px;">Global Error: ${event.message} - ${event.filename}:${event.lineno}</div>`;
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);

