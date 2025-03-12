import { scan } from "react-scan"; 

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
scan({
  enabled: true,
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
