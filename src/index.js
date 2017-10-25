

  import React from 'react';
  import { render } from 'react-dom';
  import { Provider } from 'react-redux';
  import App from './components/app';
  import configureStore from './store/configure_store';

  const store = configureStore(); // You can also pass in an initialState here

  render(
      <Provider store={store}>
          <App />
      </Provider>,
      document.getElementById('root'));
