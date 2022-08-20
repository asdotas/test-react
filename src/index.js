import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AdminFlagProvider } from './providers/AdminFlagProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AdminFlagProvider>
    <App />
  </AdminFlagProvider>

);

reportWebVitals();

/*
<React.StrictMode>
<App />
</React.StrictMode>
*/
