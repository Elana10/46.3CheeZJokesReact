import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRefactor from './AppRefactor';
import registerServiceWorker from './registerServiceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRefactor />
  </React.StrictMode>
);
registerServiceWorker();
