import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './components/Context';
import TrekContextProvider from './components/TrekContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TrekContextProvider>
  <BrowserRouter>
  <AppProvider>
    <App />
    </AppProvider>
  </BrowserRouter>
  </TrekContextProvider>
  
);
