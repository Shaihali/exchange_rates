import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './development/App/App';
import './main.css';
import { Provider } from 'react-redux';
import { store } from './development/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
      <App />
   </Provider>
);