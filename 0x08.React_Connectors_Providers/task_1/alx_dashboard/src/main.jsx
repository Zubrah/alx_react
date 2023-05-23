import React from 'react';
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import uiReducer from '../src/reducers/uiReducer';

// Create the Redux store using configureStore
const store = configureStore({
  reducer: uiReducer,
});

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Provide the Redux store to the App component */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
