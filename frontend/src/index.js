import React from 'react';
import ReactDOM from 'react-dom/client';
import './fonts/Poppins/Poppins-Regular.ttf';
import './fonts/Poppins/Poppins-Bold.ttf';
import 'material-symbols';
import './index.css';
import App from './App';
import { VehiclesContextProvider } from './context/VehicleContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VehiclesContextProvider>
      <App />
    </VehiclesContextProvider>
  </React.StrictMode>
);