import React from 'react';
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk'; // Import the redux-thunk middleware
import App from './App';
import uiReducer from '../src/reducers/uiReducer';

// Create the Redux store using configureStore
const store = configureStore({
  reducer: uiReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {},
      },
      serializableCheck: false, // Disable the serializable check for non-serializable values
      immutableStateInvariant: true, // Enable the immutable state invariant check
    }),
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
