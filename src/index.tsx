import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.css'; // Tailwind
import App from './App';
import DemoA from './DemoA';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <DemoA />
  </React.StrictMode>
);
