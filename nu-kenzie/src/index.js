import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../src/styles/globalStyle.css";
import App from './App';
import {MainHome} from "./pages/home/home.jsx";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
      <MainHome/>
    </App>
  </React.StrictMode>
);
reportWebVitals();
