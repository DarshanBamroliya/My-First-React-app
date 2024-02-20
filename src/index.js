// import React from 'react';
import './App.css';
// src/index.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App.js';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
