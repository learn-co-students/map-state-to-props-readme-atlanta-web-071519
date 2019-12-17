import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import { Provider } from 'react-redux'; 

import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';

const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  // Provider ensures that our entire React application can potentially access data from the store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
