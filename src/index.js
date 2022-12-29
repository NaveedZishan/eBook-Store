import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import StatContext from './context/StateContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <StatContext>

    <App  />

    </StatContext>
    
    </BrowserRouter>
  </React.StrictMode>
);


